import axios from 'axios';

class HttpClient {
    /**
     * Consulta Http por metodo GET.
     *
     * @param url String de consulta http
     * @param request parametros en formato JSON
     */
    header = {
        "appid": process.env.REACT_APP_OPEN_WEATHERMAP_API_KEY,
    }

    get = async (url) => {
        const response = await axios.get(`${url}`,this.header);
        return response;
    };

}

export default new HttpClient()