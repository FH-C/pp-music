import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'
import 'virtual:windi.css'

const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')
