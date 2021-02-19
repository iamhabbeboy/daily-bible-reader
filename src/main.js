import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Service from "./common/api.service";
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Service.init();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
