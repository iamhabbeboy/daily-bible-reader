import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import store from "./store";
// import Service from "./common/api.service";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

// Service.init();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
