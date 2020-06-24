import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import router from "./router";
import store from './store'
import { sync } from 'vuex-router-sync'
import './components/_globals'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
