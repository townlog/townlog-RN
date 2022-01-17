import axios from "axios";

const request = axios.create({
  // baseURL: "http://54.180.116.252",
  baseURL: "http://localhost:5000",
  // baseURL: process.env.REACT_APP_BASEURL,
});

export default request;
