import axios from "axios";

axios.defaults.baseURL = "https://drf-post-384ec9b9d623.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
