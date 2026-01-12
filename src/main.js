import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import setupRouter from './router'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(head)
setupRouter(app) // Setup the router

app.mount('#app')
