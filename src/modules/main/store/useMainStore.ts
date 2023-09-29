// Utilities
import { defineStore } from 'pinia'
import { useHelpers } from '@/shared/composables'
import type { Budget, BudgetFormData, Expense, ExpenseFormData } from '../types'
const { fetchData, deleteItem, delay, generateRandomColor, timestampToDate } =
  useHelpers()
import { computed, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const userName = ref<string | null>(null)
  const budgets = ref<Budget[]>([])
  const expenses = ref<Expense[]>([])

  const getUser = async () => {
    const data = fetchData('userName')
    if (data) userName.value = data
  }
  const getBudgets = async () => {
    const data = fetchData('budgets')
    if (data) budgets.value = data
  }

  const getExpenses = async () => {
    const data: Expense[] = fetchData('expenses')
    if (data) {
      const mapData: Expense[] = data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          amount: item.amount,
          budget_id: item.budget_id,
          createdAt: item.createdAt,
          formatDate: timestampToDate(+item.createdAt),
        }
      })
      expenses.value = mapData
    }
  }
  const recentExpenses = computed(() => {
    const sortedExpenses: Expense[] = expenses.value.sort(
      (a, b) => +b.createdAt - +a.createdAt,
    )
    return sortedExpenses.slice(0, 5)
  })

  const expensesByBudgetId = computed(() => {
    return (budget_id: Budget['id']) => {
      const data = expenses.value.filter(
        (expense) => expense.budget_id === budget_id,
      )
      console.log(data)
      return data
    }
  })

  const spentByBudget = computed(() => {
    return (budget_id: Budget['id']) => {
      const data = expenses.value.reduce((acc, expense) => {
        if (expense.budget_id !== budget_id) return acc
        return (acc += expense.amount)
      }, 0)
      return data
    }
  })

  const deleteUser = async () => {
    await delay()
    deleteItem('userName')
    userName.value = null
    deleteItem('budgets')
    budgets.value = []
    deleteItem('expenses')
    expenses.value = []
  }

  const deleteExpense = async (id: Expense['id']) => {
    await delay()
    const data: Expense[] = fetchData('expenses')
    const newValue = data.filter((expense) => expense.id !== id)
    expenses.value = newValue
    localStorage.setItem('expenses', JSON.stringify(expenses.value))
    console.log(id, data)
  }

  const deleteBudget = async (id: string) => {
    const existingBudgets: Budget[] = fetchData('budgets')
    const existingExpenses: Expense[] = fetchData('expenses')

    if (existingBudgets.length === 1) {
      await delay(500, 'deleting all')
      deleteItem('budgets')
      deleteItem('expenses')
      console.log('Vai retornar')
      budgets.value = []
      expenses.value = []
      return
    }

    console.log('passou direto')

    const newBudgets = existingBudgets.filter((budget) => budget.id !== id)
    const newExpenses = existingExpenses.filter(
      (expense) => expense.budget_id !== id,
    )

    await delay(500, 'deleting budgets')
    budgets.value = newBudgets
    localStorage.setItem('budgets', JSON.stringify(budgets.value))
    await delay(500, 'deleting expenses')
    expenses.value = newExpenses
    localStorage.setItem('expenses', JSON.stringify(expenses.value))
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
      createdAt: Date.now(),
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
      createdAt: Date.now(),
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
    getBudgets,
    getExpenses,
    deleteUser,
    deleteExpense,
    deleteBudget,
    addUser,
    addBudget,
    addExpense,
    spentByBudget,
    recentExpenses,
    expensesByBudgetId,
  }
})
