import React, { useEffect, useState } from "react"
import { Grid, Typography } from "@mui/material"
import ClimateCard from "components/ClimateCard"
import { useAppState } from "contextAPI/DataContext"
import { kelvinTocelcius } from "utils/utils"

const ClimatesList = () => {
  const [humidityMax, setHumidityMax] = useState(null)
  const [
    {
      home: { climates },
    },
  ] = useAppState()

  useEffect(() => {
    if (climates) {
      const dailies = climates?.daily.map((item) => item.humidity)
      const dailyMax = Math.max(...dailies)
      const valMax = dailies.indexOf(dailyMax)
      setHumidityMax(valMax)
    }
  }, [climates])

  const itemRender = (data, i) => (
    <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
      <ClimateCard data={data} index={i} humidityMax={humidityMax} />
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
