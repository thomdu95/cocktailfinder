import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'

import { routes } from "./route"

import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
