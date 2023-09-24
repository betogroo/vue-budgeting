<script setup lang="ts">
import {
  DashboardComponent,
  IntroComponent,
  BudgetForm,
  ExpenseForm,
} from '../components'
// {"id":"9ba6e70d-de33-4ecb-9b4a-b1005bf93735","name":"Doce","amount":250}
import useMain from '../composables/useMain'
const { userName, budgets, loadDashboard } = useMain()
loadDashboard()
</script>
<template>
  <v-container class="d-flex justify-center fill-height">
    <v-responsive class="text-center">
      <template v-if="userName && Object.keys(userName).length">
        <DashboardComponent :user-name="userName" />
        <div v-if="!budgets.length">
          <p class="text-justify">
            Orçamento pessoal é o segredo para a liberdade financeira.
          </p>
          <p class="text-justify">Crie seu orçamento agora</p>
        </div>

        <BudgetForm />
        <ExpenseForm
          v-if="budgets.length"
          :budgets="budgets"
        />
      </template>
      <IntroComponent v-else />
    </v-responsive>
  </v-container>
</template>
