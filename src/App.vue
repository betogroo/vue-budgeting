<script setup lang="ts">
import { AppBar, AppSnackbar } from '@/shared/components'
import { useUser } from '@/modules/main/composables'
const { fetchUser, userName } = useUser()
fetchUser()
//import { useHelpers } from '@/shared/composables'
//const { fetchData } = useHelpers()
// const userName = fetchData('userName')
</script>
<template>
  <v-app>
    <AppBar :user-name="userName" />
    <AppSnackbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
