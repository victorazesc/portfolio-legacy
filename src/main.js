// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import {MediaQueries} from 'vue-media-queries';
import Vue2TouchEvents from 'vue2-touch-events'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

Vue.use(Vue2TouchEvents)
const mediaQueries = new MediaQueries();
 
Vue.use(mediaQueries);
import './assets/css/_global.css';
// import './assets/js/script_universe.js';
import './assets/css/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mediaQueries: mediaQueries,
  components: { App },
  template: '<App/>',
});
