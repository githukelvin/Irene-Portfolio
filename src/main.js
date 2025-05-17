import './assets/styles/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import setupRouter from './router'

const app = createApp(App)

app.use(createPinia())
setupRouter(app) // Setup the router

app.mount('#app')
