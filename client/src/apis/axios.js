import axios from "axios";
import { adminApi, userApi } from "./api";


const TIMEOUT_DURATION = 110000;
const createAxiosInstanceWithInterceptorUser = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: TIMEOUT_DURATION,
  });

  instance.interceptors.request.use(
    (config) => {
      const details = localStorage.getItem("token");

      const token = details;
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          console.log(
            error.message,
            "ooooooooooooiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
          );
          window.location.href = "/error404";
        } else if (error.response.status === 500) {
          window.location.href = "/error500";
        } else {
          console.log("HTTP ERROR CODE :", error.response.status);
        }
      } else {
        console.log("Network Error: ", error.message);
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

const createAxiosInstanceWithInterceptorAdmin = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: TIMEOUT_DURATION,
  });

  instance.interceptors.request.use(
    (config) => {
      const details = localStorage.getItem("Atoken");
      const token = details
      console.log("this is the token from the axios file -----");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          console.log(
            error.message,
            "ooooooooooooiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
          );
          window.location.href = "/error404";
        } else if (error.response.status === 500) {
          window.location.href = "/error500";
        } else {
          console.log("HTTP ERROR CODE :", error.response.status);
        }
      } else {
        console.log("Network Error: ", error.message);
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

const userAxiosInstance = createAxiosInstanceWithInterceptorUser(
  userApi,
  "user"
);
const adminAxiosInstance = createAxiosInstanceWithInterceptorAdmin(
  adminApi,
  "admin"
);

export { userAxiosInstance, adminAxiosInstance };
