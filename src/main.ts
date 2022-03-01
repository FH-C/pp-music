import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import { createPinia } from 'pinia'
import router from './router/index'

const app = createApp(App)
app.use(Button).use(router).use(createPinia()).mount('#app')
