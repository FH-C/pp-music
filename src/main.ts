import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import { Button, Checkbox, NavBar, Picker, Field, Dialog, Popup } from 'vant'

const app = createApp(App)
app.use(Button)
.use(Checkbox)
.use(NavBar)
.use(Picker)
.use(Field)
.use(Picker)
.use(Dialog)
.use(Popup)
.use(router)
.use(createPinia())
.mount('#app')
