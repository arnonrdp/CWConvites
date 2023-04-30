<template>
  <q-card class="cursor-pointer full-height inline-block" style="width: 300px; max-width: 90vw" @click="openDetails = true">
    <q-img v-if="images?.length" fit="cover" :src="images[0]" style="max-height: 10rem" />
    <q-card-section class="flex items-center justify-between">
      <h6 class="q-my-none">{{ name }}</h6>
      <q-badge>{{ category.label }}</q-badge>
    </q-card-section>
  </q-card>

  <q-dialog v-model="openDetails">
    <q-card>
      <q-carousel
        animated
        autoplay
        class="bg-primary"
        height="auto"
        navigation
        infinite
        swipeable
        transition-next="jump-left"
        transition-prev="jump-right"
        v-model="slide"
      >
        <q-carousel-slide v-for="(image, index) in images" class="column q-pa-none" :name="index">
          <q-img :src="image" fit="cover" />
        </q-carousel-slide>
      </q-carousel>

      <q-card-section>
        <h5 class="q-mt-none">{{ name }}</h5>
        <p style="white-space: pre-line">{{ description }}</p>
      </q-card-section>
      <q-card-actions align="center">
        Solicitar orçamento:&nbsp;
        <q-btn flat icon="img:icons/whatsapp.svg" round @click="requestQuote" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  category: { type: Object, required: false },
  description: { type: String, required: false },
  images: { type: Array, required: true },
  name: { type: String, required: true }
})

const openDetails = ref(false)
const slide = ref(0)

function requestQuote() {
  window.open('https://wa.me/5592993969568?text=Olá! Gostaria de solicitar um orçamento para o produto *' + props.name + '*.')
}
</script>
