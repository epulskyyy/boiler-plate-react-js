import axios from "axios";
export const BASE_URL = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});
