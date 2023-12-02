import axiosObject from 'axios';
import { onResponseFulfilled, onResponseRejected } from './response.interceptor';
import { API_URL } from '@/constants/api';

export const axios = axiosObject.create();

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/jso; charset=UTF-8';
axios.defaults.validateStatus = (status) => {
  return status < 400;
};
axios.interceptors.response.use(onResponseFulfilled, onResponseRejected);
