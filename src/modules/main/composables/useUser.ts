import { ref } from 'vue'
import { useHelpers } from '@/shared/composables'
const { fetchData, deleteItem, delay } = useHelpers()
const isPending = ref(false)

const userName = ref<string | null>(null)
const useUser = () => {
  const fetchUser = () => {
    userName.value = fetchData('userName')
  }

  const logout = async () => {
    isPending.value = true
    await delay()
    deleteItem('userName')
    isPending.value = false
  }

  return { userName, fetchUser, logout, isPending }
}

export default useUser
