import axios from "axios";

const API = axios.create({
  baseURL: "https://question-paper-generator-vh4u.onrender.com/api"
});

export default API;
