// Styles
import "@mdi/font/css/materialdesignicons.css";
// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";


const vuetify = createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components,
  directives,
});

export default vuetify;
