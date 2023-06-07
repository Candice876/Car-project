import { createApp } from 'vue'
import './style.css'
// import { MotionPlugin } from '@vueuse/motion'
import router from './router/router'
import App from './App.vue'

const app = createApp(App)
 
app.use(router)
// app.use(MotionPlugin)
app.mount('#app')
