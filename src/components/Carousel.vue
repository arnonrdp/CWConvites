<template>
  <q-responsive :ratio="16 / 9">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide v-for="(slide, i) in slides" :key="i" :name="i" :img-src="slide.src" />
    </q-carousel>
  </q-responsive>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
const slides = ref([{ src: '/gallery/carousel1.jpeg' }, { src: '/gallery/carousel2.jpeg' }, { src: '/gallery/carousel3.jpeg' }])
</script>
