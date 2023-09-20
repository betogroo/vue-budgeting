// Utilities
import { defineStore } from 'pinia'
import { useHelpers } from '@/shared/composables'
const { fetchData } = useHelpers()
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref<string | null>(null)

  const getUser = () => {
    const user = fetchData('userName')
    userName.value = user
  }
  return { userName, getUser }
})
