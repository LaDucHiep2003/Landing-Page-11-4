import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import './style.css';
import { registerGlobalComponents } from "./utils/import.js"
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const app = createApp(App)
registerGlobalComponents(app)
app.use( VueSplide );
app.use(router)
app.mount('#app')
