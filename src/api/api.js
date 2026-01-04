import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    "X-ADMIN-KEY": "DISAWAR@2026"
  }
});

export default API;
