<template>
  <q-card class="full-height inline-block" style="width: 300px; max-width: 90vw">
    <q-img v-if="images?.length" fit="cover" :src="images[0]" style="max-height: 10rem" />
    <q-card-section class="flex items-center justify-between">
      <h6 class="q-my-none">{{ name }}</h6>
      <q-badge>{{ category.label }}</q-badge>
    </q-card-section>
    <q-card-section class="q-py-none" style="white-space: pre-line">
      <p>{{ description }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  category: { type: Object, required: false },
  description: { type: String, required: false },
  images: { type: Array, required: true },
  name: { type: String, required: true }
})
</script>
