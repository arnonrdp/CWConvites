<template>
  <v-sheet id="pedidos" color="#f0ffff" class="grey lighten-3 text-center py-16" tag="section">
    <h2 class="text-h3 font-weight-bold mb-3">DEPOIMENTOS</h2>

    <v-responsive class="mx-auto mb-12" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>

    <Splide :options="options">
      <SplideSlide v-for="({ quote, author }, index) in depoimentos" :key="index">
        <figure class="quote">
          <blockquote>{{ quote }}</blockquote>
          <figcaption>&mdash; {{ author }}</figcaption>
        </figure>
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
      interval: 4000,
      pagination: false,
      rewind: true,
      speed: 3000,
      type: "fade",
    },
    depoimentos: [
      { quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", author: "Autor 1 da Citação" },
      { quote: "Non sed delectus laborum labore commodi est perspiciatis quia.", author: "Autor 2 da Citação" },
      { quote: "Aliquid, temporibus cum commodi consectetur ullam dolorem asperiores architecto dolores ea recusandae beatae.", author: "Autor 3 da Citação" },
    ],
  }),
};
</script>

<style scoped>
.quote {
  background: #eee;
  border-radius: 1em;
  margin: auto;
  padding: 1em;
  width: min(600px, 100vw);
}
.quote figcaption,
.quote blockquote {
  margin: 1em;
}
.quote blockquote::before {
  content: open-quote;
}
.quote blockquote::after {
  content: close-quote;
}
.quote blockquote {
  quotes: "“" "”" "‘" "’";
}
</style>
