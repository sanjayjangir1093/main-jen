import axios from "axios";
import {baseURL} from './apiConstants'

const axiosData = {
  baseURL,
  timeout: 120000,
};

var instance = axios.create(axiosData);
// Add a request interceptor
instance.interceptors.request.use(
  async (config) => {
    // console.log("config ************", config?.url, "****", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // console.warn("response *******", response);
    return response;
  },
  function (error) {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default instance;
