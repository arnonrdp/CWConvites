<template>
  <q-layout>
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<style>
body {
  background: #800000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #e6e7e8, #800000); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #e6e7e8, #800000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
