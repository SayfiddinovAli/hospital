import './assets/main.css'

import notifaction from './components/layout/notifactions.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Notifaction', notifaction)
app.use(router)

app.mount('#app')
