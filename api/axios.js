import axios from "axios";

const request = axios.create({
  baseURL: "http://54.180.116.252",
  // baseURL: "http://192.168.156.97:5000",
  // baseURL: "http://143.248.229.88:5000",
  // baseURL: process.env.REACT_APP_BASEURL,
});

export default request;
