import { useMainStore } from '../store/useMainStore'
import { storeToRefs } from 'pinia'

const useTest = () => {
  const store = useMainStore()
  const { userName } = storeToRefs(store)
  const { getUser } = store
  const fetchUser = () => {
    getUser()
  }

  return { userName, fetchUser }
}

export default useTest
