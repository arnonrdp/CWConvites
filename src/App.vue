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

<style lang="scss">
body {
  background: $primary; /* fallback for old browsers */
  background: -moz-linear-gradient(top, $secondary, $primary); /* Firefox 3.6-15 */
  background: -webkit-linear-gradient(top, $secondary, $primary); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(top, $secondary, $primary); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: auto;
  max-width: 90vw;
  width: 1200px;
}

.q-body--fullscreen-mixin,
.q-body--prevent-scroll {
  position: inherit !important;
}
</style>
