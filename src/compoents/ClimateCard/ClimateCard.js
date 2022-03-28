import React from "react"
import Typography from "@mui/material/Typography"
import { Card, CardContent } from "@mui/material"
import sx from "./styles"
import { kelvinTocelcius, formatDate } from "utils/utils"
import LightModeIcon from "@mui/icons-material/LightMode"
import ModeNightIcon from "@mui/icons-material/ModeNight"

const ClimateCard = (props) => {
  const {
    data: { temp },
    index,
  } = props

  return (
    <Card variant="outlined" sx={sx.root}>
      <CardContent>
        <Typography color="text.secondary">
          Dia {kelvinTocelcius(temp.day)}°
          <LightModeIcon color="warning" />
        </Typography>
        <Typography mb={1.5} color="text.secondary">
          {`Noche ${kelvinTocelcius(temp.night)}°`}
          <ModeNightIcon color="primary" />
        </Typography>
        <Typography variant="h6" gutterBottom>
          {formatDate(new Date().setDate(new Date().getDate() + index))}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ClimateCard
