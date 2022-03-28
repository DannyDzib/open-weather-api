import React from "react"
import Typography from "@mui/material/Typography"
import { Box, Card, CardContent } from "@mui/material"
import sx from "./styles"
import { kelvinTocelcius, formatDate, formDateNameDay } from "utils/utils"
import LightModeIcon from "@mui/icons-material/LightMode"
import ModeNightIcon from "@mui/icons-material/ModeNight"

const ClimateCard = (props) => {
  const { data: { temp }, index} = props
  const date = new Date().setDate(new Date().getDate() + index)
  return (
    <Card variant="outlined" sx={sx.root}>
      <CardContent sx={sx.cardContent}>
        <Typography color="text.secondary" sx={sx.nameDay} >
          {`${index === 0 ? "Hoy" : ""} ${formDateNameDay(date)}`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`${formatDate(date)}`}
        </Typography>
        <Typography color="text.secondary" mt={1}>
          Dia {kelvinTocelcius(temp.day)}°C
          <LightModeIcon color="warning" />
        </Typography>
        <Typography mb={1.5} color="text.secondary">
          {`Noche ${kelvinTocelcius(temp.night)}°C`}
          <ModeNightIcon color="primary" />
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="text.secondary">
            {`Min ${kelvinTocelcius(temp.min)}°C`}
          </Typography>
          <Typography color="text.secondary">
            {`Max ${kelvinTocelcius(temp.max)}°C`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ClimateCard
