<template>
  <v-sheet id="carousel" tag="section">
    <Splide :options="options">
      <SplideSlide v-for="({ src, label, btnColor, icon }, index) in slides" :key="index">
        <img :src="src" alt="sample" />
        <a class="caption text-h4 text-sm-h3 text-md-h2 primary--text">{{ label }}</a>
        <!-- <v-btn icon class="ma-4" size="x-large" :color="btnColor">
          <v-icon color="white">{{ icon }}</v-icon>
        </v-btn> -->
      </SplideSlide>
    </Splide>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    options: {
      autoplay: true,
      gap: '1rem',
      fixedHeight: '35rem',
      pagination: false,
      rewind: true,
      cover: true
    },
    slides: [
      {
        src: '/gallery/carousel1.jpg',
        btnColor: '#25d366',
        icon: 'mdi-whatsapp'
      },
      {
        src: '/gallery/carousel2.jpg'
      },
      {
        src: '/gallery/carousel3.jpg'
      }
    ]
  })
}
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

a,
button {
  bottom: 1rem;
  color: #800000;
  font-weight: 400;
  left: 0;
  position: absolute;
}
</style>
