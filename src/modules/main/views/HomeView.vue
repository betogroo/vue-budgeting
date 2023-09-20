<script setup lang="ts">
import {
  DashboardComponent,
  IntroComponent,
  BudgetComponent,
} from '../components'

import useMain from '../composables/useMain'
const { userName, budget, loadDashboard } = useMain()
loadDashboard()
</script>
<template>
  <v-container class="d-flex justify-center fill-height">
    <v-responsive class="text-center">
      <template v-if="userName">
        <DashboardComponent
          :budget="budget"
          :user-name="userName"
        />
        <template v-if="budget">
          <BudgetComponent :budget="budget" />
        </template>
        <template v-else> Formulário Do Budget </template>
      </template>
      <IntroComponent v-else />
    </v-responsive>
  </v-container>
</template>
