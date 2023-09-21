<script setup lang="ts">
import {
  DashboardComponent,
  IntroComponent,
  BudgetComponent,
  BudgetForm,
} from '../components'
// {"id":"9ba6e70d-de33-4ecb-9b4a-b1005bf93735","name":"Doce","amount":250}
import useMain from '../composables/useMain'
const { userName, budget, loadDashboard } = useMain()
loadDashboard()
</script>
<template>
  <v-container class="d-flex justify-center fill-height">
    <v-responsive class="text-center">
      <template v-if="userName && Object.keys(userName).length">
        <DashboardComponent
          :budget="budget"
          :user-name="userName"
        />
        <template v-if="budget">
          <BudgetComponent :budget="budget" />
        </template>
        <template v-else> <BudgetForm /></template>
      </template>
      <IntroComponent v-else />
    </v-responsive>
  </v-container>
</template>
