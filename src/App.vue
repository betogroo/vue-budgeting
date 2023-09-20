<script setup lang="ts">
import { AppBar, AppSnackbar } from '@/shared/components'
import useTest from './modules/main/composables/useTest'
const { userName, fetchUser, logout } = useTest()
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
      :is-pending="false"
      :user-name="userName"
      @logout="handleLogout"
    />
    <AppSnackbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
