import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
