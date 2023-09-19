<script setup lang="ts">
import { AppBar, AppSnackbar } from '@/shared/components'
import { useUser } from '@/modules/main/composables'
const { userName, fetchUser, logout, isPending } = useUser()
fetchUser()
const handleLogout = () => {
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
      <RouterView />
    </v-main>
  </v-app>
</template>
