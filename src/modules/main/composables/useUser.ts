import { ref } from 'vue'
import { useHelpers } from '@/shared/composables'
const { fetchData } = useHelpers()

const userName = ref<string | null>(null)
const useUser = () => {
  const fetchUser = () => {
    userName.value = fetchData('userName')
  }

  return { userName, fetchUser }
}

export default useUser
