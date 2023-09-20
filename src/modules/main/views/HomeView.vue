<script setup lang="ts">
import { DashboardComponent, IntroComponent } from '../components'

import useUser from '../composables/useUser'
const { userName, fetchUser } = useUser()
fetchUser()
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
