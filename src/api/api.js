import axios from "axios";

const API = axios.create({
  baseURL: "https://lottery-backend-1-noll.onrender.com",
  headers: {
    "Content-Type": "application/json",
    "X-ADMIN-KEY": "DISAWAR@2026"
  }
});

export default API;
