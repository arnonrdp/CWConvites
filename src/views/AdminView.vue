<template>
  <h2 class="text-center">Painel Administrativo</h2>
  {{ product.image }}
  <q-card class="q-mx-auto q-pa-md" style="width: 40rem; max-width: 90vw">
    <q-card-section>
      <h6 class="q-my-none">Adicionar Produto</h6>
    </q-card-section>
    <q-card-section>
      <q-input label="Nome" v-model="product.name" />
      <q-select label="Categoria" :options="categoryOptions" v-model="product.category" />
      <q-uploader bordered class="full-width q-my-md" color="primary" flat hide-upload-btn label="Imagens" multiple @added="uploadImages" />
    </q-card-section>
    <q-card-actions>
      <q-btn flat label="Limpar" @click="clearFields" />
      <q-btn color="primary" label="Salvar" @click="SaveProduct" />
    </q-card-actions>
  </q-card>
  <q-separator color="secondary" spaced="xl" />
</template>

<script setup>
import { reactive } from 'vue'

const product = reactive({
  name: '',
  category: '',
  image: ''
})

const categoryOptions = [
  { label: 'Cartões', value: 'cartoes' },
  { label: 'Convites', value: 'convites' },
  { label: 'Lembrancinhas', value: 'lembrancinhas' },
  { label: 'Papelaria', value: 'papelaria' }
]

function uploadImages(files) {
  console.log(files)
}

function clearFields() {
  product.name = ''
  product.category = ''
  product.image = ''
}

function SaveProduct() {
  console.log(product)
}
</script>
