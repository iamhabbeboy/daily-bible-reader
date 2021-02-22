import Vue from "vue";
import Vuex from "vuex";
import verse from "./verse";
// import verse from "./verse.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    verse
  }
});
