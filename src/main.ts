import { createApp } from 'vue'
import './style.css'
import App from '#root/App.vue'
import {createPinia} from 'pinia'
import {router} from '#root/routes'


const pinia = createPinia()
const app = createApp(App)
app.use(router)
// app.component('HeaderComp', HeaderComp)
app.mount('#app')
app.use(pinia)
