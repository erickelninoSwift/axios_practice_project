import axios from "axios";

const dataToFecth = axios.create({
  baseURL: "https://course-api.com",
});

dataToFecth.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("request was sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

dataToFecth.interceptors.response.use(
  (response) => {
    console.log("We got the response");
    return response;
  },
  (error) => {
    console.log(error.response);
  }
);

export default dataToFecth;
