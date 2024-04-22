import axios from "axios";
import cookies from "react-cookies";

export let endpoints = {
  category: "category/",
  products: "api/v1/product/",
  login: "api/v1/jwt/create/",
  current_user: "api/v1/users/profile/",
  register: "api/v1/users/",
};

export let AuthAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Authorization: `Bearer ${cookies.load("access")}`,
    Accept: `application/json`,
  },
});

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
