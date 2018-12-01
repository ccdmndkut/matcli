import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueMDCAdapter from "vue-mdc-adapter";
import "vue-mdc-adapter/dist/vue-mdc-adapter.css";

Vue.use(VueMDCAdapter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
