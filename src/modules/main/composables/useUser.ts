import { ref } from 'vue'
import { useSharedSore } from '@/shared/store'
import { useHelpers } from '@/shared/composables'
const { fetchData, deleteItem, delay } = useHelpers()
const isPending = ref(false)

const userName = ref<string | null>(null)
const useUser = () => {
  const { enableSnackbar, disableSnackbar } = useSharedSore()
  const fetchUser = () => {
    userName.value = fetchData('userName')
  }

  const logout = async () => {
    isPending.value = true
    deleteItem('userName')
    await delay()
    isPending.value = false
    userName.value = null
    enableSnackbar('Logout feito com sucesso')
    await delay(2000)
    disableSnackbar()
  }

  return { userName, fetchUser, logout, isPending }
}

export default useUser
