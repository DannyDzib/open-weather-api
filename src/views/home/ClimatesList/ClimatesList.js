import React from "react"
import { Grid, Typography } from "@mui/material"
import ClimateCard from "components/ClimateCard"
import { useAppState } from "contextAPI/DataContext"
import { kelvinTocelcius } from "utils/utils"

const ClimatesList = () => {
  const [
    {
      home: { climates },
    },
  ] = useAppState()

  const itemRender = (data, i) => (
    <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
      <ClimateCard data={data} index={i} />
    </Grid>
  )
  return (
    <>
      {climates && (
        <>
          <Typography variant="h6" color="text.secondary" mt={2} ml={1}>
            {`Clima ahora ${kelvinTocelcius(climates.current.temp)}°C`}
          </Typography>
          <Grid container spacing={1}>
            {climates.daily.map((item, index) => itemRender(item, index))}
          </Grid>
        </>
      )}
    </>
  )
}

export default ClimatesList
