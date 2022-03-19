<template>
  <v-sheet id="carousel" tag="section">
    <v-carousel interval="5000" cycle hide-delimiters>
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
        <v-row class="fill-height" align="end" justify="center" elevation="24">
          <h2 class="text-center text-h4 text-sm-h3 text-md-h2 primary--text font-weight-medium">{{ slide.text }}</h2>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        src:
          "https://images.unsplash.com/photo-1516783154360-123b392d0833?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80",
        text: "Seja bem-vindo a CW Convites",
      },
      {
        src: "/gallery/felicidade.jpg",
        text: "Slide 2",
      },
      {
        src: "/gallery/felicidade.jpg",
        text: "Slide 3",
      },
      {
        src: "/gallery/felicidade.jpg",
        text: "Slide 4",
      },
    ],
  }),
};
</script>
