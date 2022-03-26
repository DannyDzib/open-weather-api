import React from "react"
import { Box, Typography } from "@mui/material"
import { useAppState } from "contextAPI/DataContext"

const HomePage = () => {
  const [ state, dispatch ] = useAppState()
  console.log(state)
  return (
    <Box>
      <Typography variant="h4" component="h1">
        Home
      </Typography>
    </Box>
  )
}

export default HomePage
