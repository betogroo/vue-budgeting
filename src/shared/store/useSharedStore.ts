// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Snackbar {
  text: string
  isActive: boolean
  timeout?: number | string
}

export const useSharedSore = defineStore('shared', () => {
  const snackbar = ref<Snackbar>({
    text: 'Snackbar',
    isActive: false,
    timeout: 1000,
  })

  const enableSnackbar = (text: string) => {
    snackbar.value = {
      text: text,
      isActive: true,
    }
  }
  const disableSnackbar = () => {
    snackbar.value.isActive = false
  }

  return { snackbar, enableSnackbar, disableSnackbar }
})
