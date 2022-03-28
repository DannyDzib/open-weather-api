import HttpClient from "settings/httpClient"
import ApiSettings from "settings/api.settings"

export const _getCities = async (filer) => {
  const response = await HttpClient.get(ApiSettings.API_CITIES_URL)
  if (response.status === 201) return response.data
}
export const _getCitiesByName = async (city) => {
  const response = await HttpClient.get(
    `${ApiSettings.API_CITIES_URL}?q=${city}`
  )
  if (response.status === 201) return response.data
}

export const _geClimates = async (lat, long) => {
  const response = await HttpClient.get(
    `${ApiSettings.API_CLIMATE_URL}?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${ApiSettings.API_CLIMATE_TOKEN}`
  )
  if (response.status === 200) return response.data
}
