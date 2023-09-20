// Utilities
import { defineStore } from 'pinia'
import { useHelpers } from '@/shared/composables'
const { fetchData, deleteItem, delay } = useHelpers()
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref<string | null>(null)
  const budget = ref<string | null>(null)

  const getUser = async () => {
    const data = fetchData('userName')
    userName.value = data
  }
  const getBudget = async () => {
    const data = fetchData('budget')
    budget.value = data
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
  return { userName, budget, getUser, getBudget, deleteUser, addUser }
})
