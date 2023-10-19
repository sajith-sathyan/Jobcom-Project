import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

export const userRoutes = '/api/user-route';
export const adminRoutes = '/api/admin-route'
export const baseURL = 'http://eeventcom.online';
const accessToken = Cookies.get('AcessToken'); // Note the typo, it should be 'AccessToken'
console.log("accessToken---->",accessToken)
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
});
