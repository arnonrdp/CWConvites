<template>
  <h2>Bem-vindo à CW Convites!</h2>

  <h5>
    Somos especializados em criar cartões, convites, lembranças e muito mais, para tornar seu evento verdadeiramente único e especial. Nosso
    portfólio apresenta uma variedade de nossos melhores trabalhos, para que você possa se inspirar e encontrar o produto perfeito para sua
    ocasião.
    <br />
    Deixe-nos ajudá-lo a fazer do seu evento um sucesso. Dê uma olhada em nosso portfólio e entre em contato conosco para começarmos a
    trabalhar juntos!
  </h5>

  <h4>Produtos</h4>
  <section class="flex justify-around">
    <div v-for="(product, index) in products" :key="index">
      <TheCard :img="product.img" :label="product.label" />
    </div>
  </section>
</template>

<script setup>
import TheCard from '../components/TheCard.vue'

const products = [
  { img: 'https://cdn.quasar.dev/img/mountains.jpg', label: 'Montanhas' },
  { img: 'https://cdn.quasar.dev/img/parallax1.jpg', label: 'Rio' },
  { img: 'https://cdn.quasar.dev/img/parallax2.jpg', label: 'Ponte' }
]
</script>
