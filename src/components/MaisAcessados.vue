<template>
  <v-sheet id="pedidos" color="#f0f8ff" class="grey lighten-3 text-center py-16" tag="section">
    <h2 class="text-h3 font-weight-bold mb-3">PRODUTOS MAIS ACESSADOS</h2>

    <v-responsive class="mx-auto mb-12" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>

    <Splide :options="options">
      <SplideSlide v-for="({ path }, index) in acessados" :key="index">
        <img :src="path" alt="produto destaque" />
      </SplideSlide>
    </Splide>

  </v-sheet>
</template>

<script>
import "@splidejs/splide/dist/css/splide.min.css";

export default {
  data: () => ({
    options: {
      arrows: false,
      autoplay: true,
      cover: true,
      drag: "free",
      fixedHeight: "20rem",
      fixedWidth: "20rem",
      focus: "center",
      gap: "1rem",
      pagination: false,
      rewind: true,
      interval: 500,
      speed: 3000,
      type: "loop",
    },
    acessados: [
      { path: "/gallery/acessado1.jpeg" },
      { path: "/gallery/acessado2.jpeg" },
      { path: "/gallery/acessado3.jpeg" },
      { path: "/gallery/acessado4.jpeg" },
      { path: "/gallery/acessado5.jpeg" },
      { path: "/gallery/acessado6.jpeg" },
      { path: "/gallery/acessado7.jpeg" },
      { path: "/gallery/acessado8.jpeg" },
      { path: "/gallery/acessado9.jpeg" },
      { path: "/gallery/acessado10.jpeg" },
      { path: "/gallery/acessado11.jpeg" },
      { path: "/gallery/acessado12.jpeg" },
      { path: "/gallery/acessado13.gif" },
    ],
  }),
};
</script>

<style scoped>
li {
  border-radius: 24px 4px;
}
</style>