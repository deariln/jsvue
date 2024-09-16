import { createApp } from 'vue'
import './style.css'
import App from '#root/App.vue'
import {router} from '#root/routes'

const app = createApp(App)
app.use(router)
// app.component('HeaderComp', HeaderComp)
app.mount('#app')
