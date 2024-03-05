import axios from "axios";

const datafetch = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default datafetch;
