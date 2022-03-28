import React, { useEffect } from "react"
import { Container, LinearProgress, Typography } from "@mui/material"
import { useAppState } from "contextAPI/DataContext"
import { getCities, getClimates } from "contextAPI/home/actions"
import Climates from "./Climates"
import AutoComplete from "compoents/AutoComplete"

const HomePage = () => {
  const [
    {
      home: { cities, loading },
    },
    dispatch,
  ] = useAppState()
  useEffect(() => {
    getCities(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searchClimates = (item) => {
    if (item) getClimates(dispatch, item)
  }
  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" mb={3}>
          Clima
        </Typography>
        {cities && (
          <AutoComplete
            option={cities}
            onChange={searchClimates}
            label="Ciudades"
          />
        )}
        <Climates />
      </Container>
    </>
  )
}

export default HomePage
