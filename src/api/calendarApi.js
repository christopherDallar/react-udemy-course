import { getEnvVariables } from '../helpers/getEnvVariables';

const { axios } = require('axios');

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

// Todo: set interceptors

export default calendarApi;
