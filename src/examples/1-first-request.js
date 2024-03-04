import { useEffect, useState } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const [allCourse, setAllCourse] = useState([]);

  const getAllcourses = async () => {
    try {
      const response = await axios(url);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getAllcourses();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
