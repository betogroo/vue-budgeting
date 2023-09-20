<script setup lang="ts">
import { useHelpers } from '@/shared/composables'
import { DashboardComponent, IntroComponent } from '../components'
const { fetchData } = useHelpers()
const userName = fetchData('userName')
</script>
<template>
  <v-container class="d-flex justify-center fill-height">
    <v-responsive class="text-center">
      <DashboardComponent
        v-if="userName"
        :user-name="userName"
      />
      <IntroComponent v-else />
    </v-responsive>
  </v-container>
</template>
