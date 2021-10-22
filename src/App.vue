<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="/logo_horizontal.svg"
          width="260"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="#"
        text
      >
        <span>Casamento</span>
      </v-btn>
      <v-btn
        href="#"
        text
      >
        <span>Debutantes</span>
      </v-btn>
      <v-btn
        href="#"
        text
      >
        <span>Empresarial</span>
      </v-btn>
    </v-app-bar>
    <TheContent />
  </v-app>
</template>

<script>
import TheContent from "./components/TheContent.vue";

export default {
  name: "App",
  components: { TheContent },
  data: () => ({
    //
  }),
};
</script>
