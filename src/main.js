import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(vue3GoogleLogin, {
  clientId: '881088275340-5230uo8sds3aonhekjhmbg53arru4l79.apps.googleusercontent.com'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
