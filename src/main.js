import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from "./router";
import store from "./store/index.js";
import  axios from 'axios';
import VueAxios from 'vue-axios';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .mount('#app')
