import moment from "moment"
import EsMx from "moment/locale/es-mx"

export const kelvinTocelcius = (value) => {
  return (value - 273.15).toFixed(2)
}

export const formatDate = (date) =>
  moment(date).locale("es-mx", [EsMx]).format("LL")

export const formDateNameDay = (date) =>
  moment(date).locale("es-mx", [EsMx]).format("dddd")
