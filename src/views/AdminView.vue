<template>
  <h2 class="text-center">Painel Administrativo</h2>
  <q-card class="q-mx-auto q-pa-md" style="width: 40rem; max-width: 90vw">
    <q-card-section>
      <h6 class="q-my-none">Adicionar Produto</h6>
    </q-card-section>
    <q-form greedy @submit="saveProduct" @reset="clearFields">
      <q-card-section class="q-pt-none">
        <q-input label="Nome" required v-model="product.name" />
        <q-select label="Categoria" :options="categoryOptions" v-model="product.category" />
        <q-input label="Descrição" required type="textarea" v-model="product.description" />
        <q-file
          :disable="!product.name || !product.category"
          label="Imagens"
          :loading="productStore.isLoading"
          multiple
          v-model="files"
          @update:model-value="uploadImages"
        />
        <div class="items-center q-my-md q-pa-md rounded-borders row shadow-1">
          <div v-for="(image, index) in product.images" class="col-grow q-mx-xs relative-position">
            <q-img class="rounded-borders" fit="cover" :key="index" :src="image" style="height: 10rem" />
            <q-btn class="absolute" color="negative" icon="delete" round size="sm" style="right: 0; top: 0" @click="removeFile(image)" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat label="Limpar" type="reset" />
        <q-btn color="primary" label="Salvar" type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
  <q-separator color="secondary" spaced="xl" />
</template>

<script setup>
import { useQuasar } from 'quasar'
import { reactive, ref } from 'vue'
import { useProductStore } from '../store'

const $q = useQuasar()
const productStore = useProductStore()

const files = ref(null)
const product = reactive({
  name: '',
  category: null,
  description: '',
  images: []
})

const categoryOptions = [
  { label: 'Convites', value: 'convites' },
  { label: 'Caixas em Cartonagem', value: 'caixas' },
  { label: 'Papelaria', value: 'papelaria' }
]

async function uploadImages(files) {
  for (const file of files) {
    await productStore
      .uploadFile(file, `${product.category.value}/${file.name}`)
      .then((url) => product.images.push(url))
      .catch((error) => console.error(error))
  }
}

function removeFile(file) {
  console.log(file)
  const index = product.images.indexOf(file)
  console.log(index)
  productStore
    .deleteFile(`${product.category.value}/${file.name}`)
    .then(() => product.images.splice(index, 1))
    .catch((error) => console.error(error))
}

function clearFields() {
  product.name = ''
  product.category = null
  product.description = ''
  product.images = []
}

async function saveProduct() {
  await productStore
    .createProduct(product)
    .then(() => {
      clearFields()
      $q.notify({ color: 'positive', message: 'Produto salvo com sucesso!' })
    })
    .catch((error) => console.error(error))
}
</script>
