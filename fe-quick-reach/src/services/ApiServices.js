import axios from 'axios';
import { BASE_URL } from '../constants/contants';
const axiosInstance = axios.create({
   baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      config.headers['Content-Type'] = 'application/json';
      config.headers['ngrok-skip-browser-warning'] = 'true';

      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);


axiosInstance.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      return Promise.reject(error);
   }
);


export default axiosInstance;