<script setup lang="ts">
import { AppBar, AppSnackbar } from '@/shared/components'
import useUser from './modules/main/composables/useUser'
const { userName, fetchUser, logout, isPending } = useUser()
fetchUser()

//const { logout, isPending } = useUser()
const handleLogout = () => {
  console.log('test')
  logout()
}
//import { useHelpers } from '@/shared/composables'
//const { fetchData } = useHelpers()
// const userName = fetchData('userName')
</script>
<template>
  <v-app>
    <AppBar
      :is-pending="isPending"
      :user-name="userName"
      @logout="handleLogout"
    />
    <AppSnackbar />
    <v-main>
      <Suspense>
        <RouterView />
        <template #fallback> Carregnado ... </template>
      </Suspense>
    </v-main>
  </v-app>
</template>
