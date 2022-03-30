<template>
  <v-sheet id="carousel" tag="section">
    <Splide :options="options">
      <SplideSlide v-for="({ src, caption }, index) in slides" :key="index">
        <img :src="src" :alt="caption" />
        <h2 class="caption text-h4 text-sm-h3 text-md-h2 primary--text">{{ caption }}</h2>
      </SplideSlide>
    </Splide>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    options: {
      autoplay: true,
      gap: "1rem",
      fixedHeight: "35rem",
      pagination: false,
      rewind: true,
      cover: true,
      // width: "100px",
    },
    slides: [
      {
        src: "/gallery/table.jpg",
        caption: "Seja bem-vindo a CW Convites",
      },
      {
        src: "/gallery/felicidade.jpg",
        caption: "Slide 2",
      },
      {
        src: "/gallery/felicidade.jpg",
        caption: "Slide 3",
      },
      {
        src: "/gallery/felicidade.jpg",
        caption: "Slide 4",
      },
    ],
  }),
};
</script>

<style scoped>
.splide__slide .caption {
  visibility: none;
}

.splide__slide.is-active .caption {
  visibility: visible;
}

img {
  position: relative;
}

h2 {
  bottom: 1rem;
  color: #800000;
  font-weight: 400;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
}
</style>
