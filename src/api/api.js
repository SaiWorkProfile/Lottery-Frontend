import axios from "axios";

const API = axios.create({
  baseURL: "https://lottery-backend-1-noll.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export default API;
