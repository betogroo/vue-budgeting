// Utilities
import { defineStore } from 'pinia'
import { useHelpers } from '@/shared/composables'
import type { Budget, BudgetFormData, Expense, ExpenseFormData } from '../types'
const { fetchData, deleteItem, delay, generateRandomColor } = useHelpers()
import { computed, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref<string | null>(null)
  const budgets = ref<Budget[]>([])
  const expenses = ref<Expense[]>([])

  const getUser = async () => {
    const data = fetchData('userName')
    if (data) userName.value = data
  }
  const getBudget = async () => {
    const data = fetchData('budgets')
    if (data) budgets.value = data
  }
  const getExpenses = async () => {
    const data = fetchData('expenses')
    if (data) expenses.value = data
  }

  const spentByBudget = computed(() => {
    return (budget_id: Budget['id']) => {
      const data = expenses.value.filter(
        (budget) => budget.budget_id === budget_id,
      )
      return data
    }
  })

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
  const addExpense = async (data: ExpenseFormData) => {
    await delay()
    const newValue = {
      id: crypto.randomUUID(),
      createdAt: Date.now().toString(),
      ...data,
    }
    expenses.value.push(newValue)
    localStorage.setItem('expenses', JSON.stringify(expenses.value))
  }
  return {
    userName,
    budgets,
    expenses,
    getUser,
    getBudget,
    getExpenses,
    deleteUser,
    addUser,
    addBudget,
    addExpense,
    spentByBudget,
  }
})
