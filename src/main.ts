import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(Button).use(createPinia()).mount('#app')
