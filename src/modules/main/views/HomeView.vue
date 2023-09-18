<script setup lang="ts">
import { useHelpers } from '@/shared/composables'
import { DashboardComponent } from '../components'
const { fetchData } = useHelpers()
const userName = fetchData('userName')
</script>
<template>
  <v-container class="d-flex justify-center">
    <v-responsive class="text-center">
      <DashboardComponent :user-name="userName" />
    </v-responsive>
  </v-container>
</template>
