import axios from "axios";
import API_URL from "@/common/config";

export default class Request {
  constructor() {
    axios.defaults.baseURL = API_URL;
  }
  /**
   * Get bible json from github raw
   * @returns <Promise>
   */
  get() {
    return axios.get();
  }
}
