<template>
  <q-card class="inline-block" style="width: 300px">
    <img :src="img" />
    <q-card-section>
      <div class="text-h6">{{ label }}</div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  img: { type: String, required: true },
  label: { type: String, required: true }
})
</script>
