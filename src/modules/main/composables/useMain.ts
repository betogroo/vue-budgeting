import { ref } from 'vue'
import { useMainStore } from '../store/useMainStore'
import { useSharedSore } from '@/shared/store'
import { storeToRefs } from 'pinia'
import type { BudgetFormData, ExpenseFormData, Budget } from '../types'

const error = ref()
const isPending = ref<boolean | string>(false)

const useMain = () => {
  const mainStore = useMainStore()
  const { userName, budgets, expenses } = storeToRefs(mainStore)
  const {
    getUser,
    deleteUser,
    addUser,
    getBudgets,
    getExpenses,
    addBudget: _addBudget,
    addExpense: _addExpense,
  } = mainStore

  const sharedStore = useSharedSore()
  const { enableSnackbar } = sharedStore

  const loadDashboard = async () => {
    try {
      error.value = null
      isPending.value = true
      await getUser()
      await getBudgets()
      await getExpenses()
    } catch (err) {
      const e = err as Error
      error.value = e.message
      console.log(e)
    } finally {
      isPending.value = false
    }
  }

  const fetchUser = async () => {
    try {
      error.value = null
      isPending.value = true
      getUser()
    } catch (err) {
      const e = err as Error
      error.value = e.message
      console.log(e)
    } finally {
      isPending.value = false
    }
  }

  const logout = async () => {
    try {
      error.value = null
      isPending.value = 'logout'
      await deleteUser()
      enableSnackbar('Logout feito com sucesso!')
    } catch (err) {
      const e = err as Error
      error.value = e.message
      console.log(e)
    } finally {
      isPending.value = false
    }
  }

  const login = async (data: string) => {
    try {
      error.value = null
      isPending.value = 'login'
      await addUser(data)
    } catch (err) {
      const e = err as Error
      error.value = e.message
      enableSnackbar(e.message)
      console.log(e)
    } finally {
      isPending.value = false
    }
  }

  const addBudget = async (data: BudgetFormData) => {
    try {
      error.value = null
      isPending.value = 'addBudget'
      const budget: BudgetFormData = {
        name: data.name,
        amount: data.amount,
      }
      await _addBudget(budget).then(() => {
        enableSnackbar('Orçamento criado com sucesso')
      })
    } catch (err) {
      const e = err as Error
      error.value = e.message
      enableSnackbar(e.message)
      console.log(e)
    } finally {
      isPending.value = false
    }
  }

  const getBudget = (budget_id: Budget['id']) => {
    const data: Budget | undefined = budgets.value.find(
      (budget) => budget.id === budget_id,
    )
    return data
  }
  const addExpense = async (data: ExpenseFormData) => {
    try {
      error.value = null
      isPending.value = 'addExpense'
      const expense: ExpenseFormData = {
        name: data.name,
        amount: data.amount,
        budget_id: data.budget_id,
      }
      await _addExpense(expense).then(() => {
        enableSnackbar('Despesa criada com sucesso')
      })
    } catch (err) {
      const e = err as Error
      error.value = e.message
      enableSnackbar(e.message)
      console.log(e)
    } finally {
      isPending.value = false
    }
  }

  return {
    userName,
    budgets,
    expenses,
    isPending,
    fetchUser,
    logout,
    login,
    loadDashboard,
    addBudget,
    addExpense,
    getBudget,
  }
}

export default useMain
