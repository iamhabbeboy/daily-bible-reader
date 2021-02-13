import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
