<template>
  <v-sheet id="carousel" tag="section">
    <v-carousel cycle hide-delimiters v-model="model">
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" />
    </v-carousel>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    slides: [
      { src: '/gallery/carousel1.jpeg', btnColor: '#25d366', icon: 'mdi-whatsapp' },
      { src: '/gallery/carousel2.jpeg' },
      { src: '/gallery/carousel3.jpeg' }
    ]
  })
}
</script>

<style scoped>
.v-carousel {
  height: inherit !important;
}

a,
button {
  bottom: 1rem;
  color: #800000;
  font-weight: 400;
  left: 0;
  position: absolute;
}
</style>
