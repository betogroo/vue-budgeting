import { useMainStore } from '../store/useMainStore'
import { storeToRefs } from 'pinia'

const useTest = () => {
  const store = useMainStore()
  const { userName } = storeToRefs(store)
  const { getUser, deleteUser } = store
  const fetchUser = () => {
    getUser()
  }

  const logout = () => {
    deleteUser()
  }

  return { userName, fetchUser, logout }
}

export default useTest
