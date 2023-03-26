import dotenv from 'dotenv';

dotenv.config();

export default{
    ASTRO_API_SERVER: process.env.astro_server,
    path:{
        URL_SERVICES: process.env.path_services,
        URL_CERTIFICATES: process.env.path_certificates,
        URL_EMAIL: process.env.path_email
    }
}