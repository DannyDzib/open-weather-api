import { DevEnviroment as Enviroment } from "./dev.env"

class ApiSettings {
  API_CLIMATE_TOKEN = process.env.REACT_APP_OPEN_WEATHERMAP_API_KEY
  constructor() {
    this.API_CITIES_URL = Enviroment.apiCties
    this.API_CLIMATE_URL =  Enviroment.apiClimate
  }
}
export default new ApiSettings()
