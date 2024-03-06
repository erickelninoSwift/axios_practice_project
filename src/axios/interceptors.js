import axios from "axios";

const dataFetch = axios.create({
  baseURL: "https://course-api.com",
});

dataFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("request was sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

dataFetch.interceptors.response.use(
  (response) => {
    console.log("We got the response");
    return response;
  },
  (error) => {
    console.log(error.response);
  }
);

export default dataFetch;
