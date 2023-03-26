import dotenv from 'dotenv';

dotenv.config();

export default{
    ASTRO_API_SERVER: process.env.ASTRO_SERVER,
    path:{
        URL_SERVICES: process.env.ENDPOINT_SERVICES,
        URL_CERTIFICATES: process.env.ENDPOINT_CERTIFICATES,
        URL_EMAIL: process.env.ENDPOINT_EMAIL
    }
}