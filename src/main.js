import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/global.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

