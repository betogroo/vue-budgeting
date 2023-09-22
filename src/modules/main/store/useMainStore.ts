// Utilities
import { defineStore } from 'pinia'
import { useHelpers } from '@/shared/composables'
import type { Budget, BudgetFormData } from '../types'
const { fetchData, deleteItem, delay, generateRandomColor } = useHelpers()
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref<string | null>(null)
  const budgets = ref<Budget[]>([])

  const getUser = async () => {
    const data = fetchData('userName')
    if (data) userName.value = data
  }
  const getBudget = async () => {
    const data = fetchData('budgets')
    if (data) budgets.value = data
  }

  const deleteUser = async () => {
    await delay()
    deleteItem('userName')
    userName.value = null
  }

  const addUser = async (data: string) => {
    await delay()
    localStorage.setItem('userName', JSON.stringify(data))
    userName.value = data
  }

  const addBudget = async (data: BudgetFormData) => {
    await delay()
    const newValue = {
      id: crypto.randomUUID(),
      createdAt: Date.now().toString(),
      color: generateRandomColor(),
      ...data,
    }
    budgets.value.push(newValue)
    localStorage.setItem('budgets', JSON.stringify(budgets.value))
  }
  return {
    userName,
    budgets,
    getUser,
    getBudget,
    deleteUser,
    addUser,
    addBudget,
  }
})
