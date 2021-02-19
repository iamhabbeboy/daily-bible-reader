import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { API_URL } from "./config";
import BibleVerses from "./verses.json";

const Service = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  getHelperVerses(index) {
    return index === undefined ? BibleVerses : BibleVerses[index];
  },

  async getBible(book) {
    const response = await Vue.axios.get(API_URL);
    return response.data.find(verse => verse.abbrev === book);
  }
};

export default Service;

export const HelperService = {
  generateRandomIndex: Math.floor(
    Math.random() * Math.floor(BibleVerses.length)
  ),

  getRandomVerses() {
    const verses = Service.getHelperVerses(this.generateRandomIndex);
    return verses.verses[0];
  },

  getBibleTextFromHelper() {
    const verses = this.getRandomVerses();
    return Service.getBible(verses.text);
  }
};

export const BibleService = {};
