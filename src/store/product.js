import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { defineStore } from 'pinia'
import { db, storage } from '../firebase'
import { addDoc, collection, doc } from 'firebase/firestore'

export const useProductStore = defineStore('products', {
  state: () => ({
    _isLoading: false,
    _products: []
  }),

  getters: {
    isLoading: (state) => state._isLoading,
    products: (state) => state._products
  },

  actions: {
    async uploadFile(file, filename) {
      const storageRef = ref(storage, filename)
      this._isLoading = true
      await uploadBytes(storageRef, file).finally(() => (this._isLoading = false))

      return getDownloadURL(storageRef).then((url) => url)
    },

    async deleteFile(filename) {
      const storageRef = ref(storage, filename)

      this._isLoading = true
      await deleteObject(storageRef).finally(() => (this._isLoading = false))
    },

    async createProduct(product) {
      this._isLoading = true
      await addDoc(collection(db, 'products'), product)
        .then(() => this._products.push(product))
        .finally(() => (this._isLoading = false))
    }
  }
})
