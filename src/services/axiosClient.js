import axios from 'axios';
import dotenvConfig from '../config/dotenv.config';

const {ASTRO_API_SERVER} = dotenvConfig;

//creo la estructura basica de axios.
class AxiosClient {
    makeGetRequest = async(path) =>{
        try {
            return await axios({
                method:'GET',
                baseURL:`${ASTRO_API_SERVER}`,
                url:`${path}`,
                headers: {'Content-Type':'application/json'}
            });
        } catch (error) {
            console.log(error);
        }
    }

    makePostRequest = async(url,body) =>{
        try {
            return await axios({
                method:'POST',
                baseURL:`${ASTRO_API_SERVER}`,
                url:`${url}`,
                data:body,
                headers: {'Content-Type': 'application/json'}
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default AxiosClient;