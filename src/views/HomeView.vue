<template>
  <v-app>
    <Header />
    <v-main>
      <Carousel />
      <MaisAcessados />
      <Depoimentos />
      <Contato />
    </v-main>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Carousel from "../components/Carousel.vue";
import MaisAcessados from "../components/MaisAcessados.vue";
import Depoimentos from "../components/Depoimentos.vue";
import Contato from "../components/Contato.vue";

export default {
  name: "App",
  components: { Header, Carousel, Contato, MaisAcessados, Depoimentos },
  data: () => ({
    //
  }),
};
</script>
