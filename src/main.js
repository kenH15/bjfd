import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';

import lazy from './directives/lazy';

import 'element-plus/dist/index.css';
const app = createApp(App);
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
//引入tmap组件
import Tmap from '@map-component/vue-tmap';
import './assets/style/index.scss';


app.use(store).use(router).use(ElementPlus).use(Tmap).use(lazy).mount('#app');
