import { ref } from 'vue'
import { useMainStore } from '../store/useMainStore'
import { useSharedSore } from '@/shared/store'
import { storeToRefs } from 'pinia'

const error = ref()
const isPending = ref(false)

const useMain = () => {
  const mainStore = useMainStore()
  const { userName, budget } = storeToRefs(mainStore)
  const { getUser, deleteUser, addUser, getBudget } = mainStore

  const sharedStore = useSharedSore()
  const { enableSnackbar } = sharedStore

  const loadDashboard = async () => {
    try {
      error.value = null
      isPending.value = true
      getUser()
      getBudget()
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
      isPending.value = true
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
      isPending.value = true
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

  return {
    userName,
    budget,
    fetchUser,
    logout,
    login,
    loadDashboard,
    isPending,
  }
}

export default useMain
