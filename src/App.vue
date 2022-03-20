<template>
  <v-app>
    <Header />
    <v-main>
      <Carousel />
      <MaisAcessados />
      <Contato />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Carousel from "./components/Carousel.vue";
import Contato from "./components/Contato.vue";
import MaisAcessados from "./components/MaisAcessados.vue";

export default {
  name: "App",
  components: { Header, Carousel, Contato, MaisAcessados },
  data: () => ({
    //
  }),
};
</script>
