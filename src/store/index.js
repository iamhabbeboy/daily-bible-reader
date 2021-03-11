import Vue from "vue";
import Vuex from "vuex";
import verse from "./verse";
import bible from "./bible";
import utility from "./utility";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    verse,
    utility,
    bible
  }
});
