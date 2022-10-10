<template>
  <v-app>
    <Header />
    <v-main class="pt-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style>
html {
  font-size: 16px;
}
@media screen and (max-width: 720px) {
  html {
    font-size: 15px;
  }
}
@media screen and (max-width: 640px) {
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 560px) {
  html {
    font-size: 13px;
  }
}
@media screen and (max-width: 480px) {
  html {
    font-size: 12px;
  }
}
@media screen and (max-width: 360px) {
  html {
    font-size: 11px;
  }
}
</style>