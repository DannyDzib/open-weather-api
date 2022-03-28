import moment from "moment"
import EsMx from "moment/locale/es-mx"

export const kelvinTocelcius = (value) => {
  return (value - 273.15).toFixed(2)
}

export const kelvinToFahrenheit = (value) => {
  return (value - 273.15) * 1.8 + 32
}


export const formatDate = (date) => {
    return moment(date).locale("es-mx", [EsMx]).format("LL")
  }
  