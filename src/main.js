import { createPinia } from 'pinia'
import { Notify, Quasar } from 'quasar'
import { createApp } from 'vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(Quasar, {
  config: { notify: { position: 'top', progress: true, timeout: 3000, multiline: true } },
  plugins: { Notify }
})
app.use(pinia)
app.use(router)

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')
