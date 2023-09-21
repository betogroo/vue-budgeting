<script setup lang="ts">
import { AppBar, AppSnackbar } from '@/shared/components'
import useMain from './modules/main/composables/useMain'
const { userName, logout, isPending } = useMain()

const handleLogout = () => {
  logout()
}
</script>
<template>
  <v-app>
    <AppBar
      :is-pending="isPending"
      :user-name="String(userName)"
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
