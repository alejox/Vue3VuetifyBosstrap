import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './assets/main.scss'

import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
loadFonts();

const app = createApp(App)
app.use(router)
app.use(store)
app.use(BootstrapVue3)
app.use(VueTelInput)
app.mount("#app");
