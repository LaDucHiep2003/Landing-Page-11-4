import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import './style.css';
import { registerGlobalComponents } from "./utils/import.js"
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
registerGlobalComponents(app)
app.use( VueSplide );
app.use(router)
app.use(ElementPlus)
app.mount('#app')
