import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { defineStore } from 'pinia'
import { storage } from 'src/firebase'

export const useProductStore = defineStore('products', {
  state: () => ({
    _isLoading: false
  }),

  getters: {
    isLoading: (state) => state._isLoading
  },

  actions: {
    async uploadFile(file, filename) {
      const storageRef = ref(storage, `images/${filename}`)

      this._isLoading = true
      await uploadBytes(storageRef, file).finally(() => (this._isLoading = false))

      return getDownloadURL(storageRef).then((url) => url)
    },

    async deleteFile(filename) {
      const storageRef = ref(storage, `images/${filename}`)

      this._isLoading = true
      await deleteObject(storageRef).finally(() => (this._isLoading = false))
    }
  }
})
