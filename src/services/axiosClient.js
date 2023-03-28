import axios from 'axios';
import dotenvConfig from '../config/dotenv.config';

const {ASTRO_API_SERVER} = dotenvConfig;

//creo la estructura basica de axios.
class AxiosClient {
    makeGetRequest = async(path) =>{
        try {
            return await axios.get(`${ASTRO_API_SERVER+path}`,{
                headers: {'Content-Type':'application/json'}
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default AxiosClient;