import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useMain } from '@/modules/main/composables'
export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const { loadDashboard } = useMain()
  loadDashboard()
  console.log('Before')
  next()
}
