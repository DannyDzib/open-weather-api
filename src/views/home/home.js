import React, { useEffect } from "react"
import { Container, LinearProgress, Typography } from "@mui/material"
import { useAppState } from "contextAPI/DataContext"
import { getCities } from "contextAPI/home/actions"
import ClimatesList from "./ClimatesList"
import AutocompleteForm from "./AutocompleteForm"
import { home as constants } from "texts"

const HomePage = () => {
  const [{ home }, dispatch] = useAppState()
  const { loading } = home

  useEffect(() => {
    getCities(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" mb={3}>
          {constants.HOME_TITLE}
        </Typography>
        <AutocompleteForm />
        <ClimatesList />
      </Container>
    </>
  )
}

export default HomePage
