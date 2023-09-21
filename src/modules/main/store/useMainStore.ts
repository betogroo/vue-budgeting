// Utilities
import { defineStore } from 'pinia'
import { useHelpers } from '@/shared/composables'
import type { Budget } from '../types'
const { fetchData, deleteItem, delay } = useHelpers()
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref<string | null>(null)
  const budget = ref<Budget | null>(null)

  const getUser = async () => {
    const data = fetchData('userName')
    console.log(data)
    userName.value = data
  }
  const getBudget = async () => {
    const data = fetchData('budget')
    console.log(data)
    budget.value = data
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

  const addBudget = async (data: Budget) => {
    await delay()
    budget.value = { id: crypto.randomUUID(), ...data }
    localStorage.setItem('budget', JSON.stringify(budget.value))
  }
  return {
    userName,
    budget,
    getUser,
    getBudget,
    deleteUser,
    addUser,
    addBudget,
  }
})
