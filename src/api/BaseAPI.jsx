import axios from "axios";
import cookies from "react-cookies";

export let endpoints = {
  category: "api/v1/category/",
  product: "api/v1/product/",
  login: "api/v1/jwt/create/",
  current_user: "api/v1/users/profile/",
  register: "api/v1/users/",
  order: "api/v1/orders/",
  user: "api/v1/users/me/",
  user_set_password: "api/v1/users/set_password/"
};

export let EditProfileAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Authorization: `Bearer ${cookies.load("access")}`,
    Accept: `application/json`,
  },
});

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
