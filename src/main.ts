import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import 'vant/lib/index.css'
import { Button, Checkbox, NavBar, Picker, Field, Dialog, Popup, Toast, CountDown } from 'vant'

const app = createApp(App)
app.use(Button)
.use(Checkbox)
.use(NavBar)
.use(Picker)
.use(Field)
.use(Picker)
.use(Dialog)
.use(Popup)
.use(Toast)
.use(CountDown)
.use(router)
.use(createPinia())
.mount('#app')
