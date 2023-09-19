<script setup lang="ts">
import { AppBar, AppSnackbar } from '@/shared/components'
import { useHelpers } from '@/shared/composables'
const { fetchData } = useHelpers()
const userName = fetchData('userName')
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
