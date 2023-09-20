// Utilities
import { defineStore } from 'pinia'
import { useHelpers } from '@/shared/composables'
const { fetchData, deleteItem, delay } = useHelpers()
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref<string | null>(null)

  const getUser = async () => {
    const user = fetchData('userName')
    userName.value = user
  }

  const deleteUser = async () => {
    await delay()
    deleteItem('userName')
    userName.value = null
  }

  const addUser = async (data: string) => {
    await delay()
    localStorage.setItem('userName', data)
    userName.value = data
  }
  return { userName, getUser, deleteUser, addUser }
})
