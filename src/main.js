import '@quasar/extras/material-icons/material-icons.css'
import VueSplide from '@splidejs/vue-splide'
import { Quasar, Notify } from 'quasar'
import 'quasar/src/css/index.sass'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

loadFonts()

createApp(App)
  .use(router)
  .use(Quasar, {
    plugins: { Notify }
  })
  .use(vuetify)
  .use(VueSplide)
  .mount('#app')
