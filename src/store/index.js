import Vue from "vue";
import Vuex from "vuex";
import Verse from "./verse";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Verse
  }
});
