import axios from 'axios';
export const BACKEND_URL = 'https://server11.icore.sg/';
const URL = 'https://server11.icore.sg/api';


const Axios = axios.create({
    baseURL: URL,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
       ' Access-Control-Allow-Origin': '*'
    },
});

export default Axios;