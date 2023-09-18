<script setup lang="ts">
import { AppBar } from '@/shared/components'
import { useHelpers } from '@/shared/composables'
const { fetchData } = useHelpers()
const userName = fetchData('userName')
</script>
<template>
  <v-app>
    <AppBar :user-name="userName" />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
