import axios from 'axios';

const baseURL = 'http://hailor-001-site9.ctempurl.com';

const audiApi = axios.create({ baseURL });

// audiApi.interceptors.request.use(
//     async (config) => {

//         if (token) {
//             console.log("asdddddd");
            
//             config.headers.common =  {'Authorization' :`Bearer ${token}`}
//             // config.headers['x-token'] = token;
//         }
//         return config;
//     }
// );



export default audiApi;
