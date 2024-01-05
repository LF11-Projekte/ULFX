import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter } from 'vue-router';

createApp(App)
.use(createRouter())
.use(createPinia())
.mount('#app');
