import { Quasar } from 'quasar'
import { createApp } from 'vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Quasar)
app.use(router)

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')
