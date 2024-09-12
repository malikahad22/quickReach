import axiosInstance from '../services/ApiServices';
import { responseHandler } from '../utils';

export const get = async (url, params = {}) => {
   try {
      const response = await axiosInstance.get(url, {
         params: params
      });
      return responseHandler(response);
   } catch (error) {
      throw error;
   }
}

export const post = async (url, data = {}, params = {}) => {
   try {
      const response = await axiosInstance.post(url, data, {
         params: params
      });
      return responseHandler(response);
   } catch (error) {
      throw error;
   }
}

export const deleteMethod = async (url, params = {}) => {

   try {
      const response = await axiosInstance.delete(url, {
         params: params
      });
      return responseHandler(response);
   } catch (error) {
      throw error;
   }

}

export const update = async (url, data = {}, params = {}) => {
   try {
      const response = await axiosInstance.put(url, data, {
         params: params
      });
      return responseHandler(response);
   } catch (error) {
      throw error;
   }
}