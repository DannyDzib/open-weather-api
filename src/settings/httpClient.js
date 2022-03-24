import axios from 'axios';

class HttpClient {
    /**
     * Consulta Http por metodo GET.
     *
     * @param url String de consulta http
     * @param request parametros en formato JSON
     */

    get = async (url) => {
        const response = await axios.get(`${url}`);
        return response;
    };

}

export default new HttpClient()