import axios from "axios";
import API_URL from "@/common/config";

export default class Request {
  constructor() {
    axios.defaults.baseURL = API_URL;
  }
  get() {
    return axios.get();
  }
}
