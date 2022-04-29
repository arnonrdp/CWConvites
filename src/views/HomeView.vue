<template>
  <Carousel />
  <MaisAcessados />
  <Depoimentos />
  <Contato />
</template>

<script>
import Carousel from "../components/Carousel.vue";
import MaisAcessados from "../components/MaisAcessados.vue";
import Depoimentos from "../components/Depoimentos.vue";
import Contato from "../components/Contato.vue";

export default {
  name: "App",
  components: { Carousel, Contato, MaisAcessados, Depoimentos },
};
</script>
