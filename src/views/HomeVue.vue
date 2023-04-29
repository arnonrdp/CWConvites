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
    <div v-for="(product, index) in products" class="q-gutter-md" :key="index">
      <TheCard v-bind="product" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TheCard from '../components/TheCard.vue'
import { useProductStore } from '../store'

const productStore = useProductStore()

const products = ref(productStore.products)

onMounted(async () => {
  await productStore.readProducts()
})

productStore.$subscribe((_, state) => {
  products.value = state._products
})
</script>
