<template>
  <v-app>
    <Header />
    <Carousel />
    <TheContent />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Carousel from "./components/Carousel.vue";
import TheContent from "./components/TheContent.vue";

export default {
  name: "App",
  components: { Header, Carousel, TheContent },
  data: () => ({
    //
  }),
};
</script>
