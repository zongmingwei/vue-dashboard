import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";
Vue.config.productionTip = false;

// Initialize Netlify Identity
netlifyIdentityWidget.init();

// Initialize Gotrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://sharp-sited.netlify.com/.netlify/identity",
  setCookie: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
