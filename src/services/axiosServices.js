import AxiosClient from "./axiosClient.js";

//inicio al axios client y paso en el constructor, la ruta a la que desa hacer la consulta.
class AxiosServices {
    constructor (path){
        this.path = path;
        this.client = new AxiosClient();
    }
    //me trae todos los datos del servidor
    getAll = async() =>{
        return await this.client.makeGetRequest(this.path);
    }

    // //hago una peticcion de envio de datos de un formulario.
    // sendData = async (body) =>{
    //     return await this.client.makePostRequest(this.path,body)
    // }
}

export default AxiosServices;