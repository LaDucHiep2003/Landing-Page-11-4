import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import './style.css';
import { registerGlobalComponents } from "./utils/import.js"

const app = createApp(App)
registerGlobalComponents(app)
app.use(router)
app.mount('#app')
