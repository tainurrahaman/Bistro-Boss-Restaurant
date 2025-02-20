import axios from "axios";

const axisoSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosSecure = () => {
  return axisoSecure;
};

export default UseAxiosSecure;
