import { useEffect } from "react";
import axios from "axios";
import dataToFecth from "../axios/interceptors";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await dataToFecth("/react-store-products");
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
