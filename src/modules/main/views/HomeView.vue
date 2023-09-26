<script setup lang="ts">
import {
  DashboardComponent,
  IntroComponent,
  BudgetForm,
  ExpenseForm,
  BudgetCard,
} from '../components'
import useMain from '../composables/useMain'
const { userName, budgets, loadDashboard, expenses } = useMain()
loadDashboard()
</script>
<template>
  <v-container
    class="d-flex justify-center fill-height"
    :class="userName ? 'align-baseline' : ''"
  >
    <v-responsive class="text-center">
      <template v-if="userName && Object.keys(userName).length">
        <v-row>
          <v-col class="d-flex flex-row">
            <DashboardComponent
              :budgets="budgets"
              :user-name="userName"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <BudgetForm />
          </v-col>

          <v-col>
            <ExpenseForm
              v-if="budgets.length"
              :budgets="budgets"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <BudgetCard
              v-for="budget in budgets"
              :key="budget.id"
              :budget="budget"
            />
          </v-col>
        </v-row>

        Beto
        <v-row
          ><v-col>
            <v-data-table
              class="elevation-1"
              :headers="[
                {
                  title: 'Nome',
                  key: 'name',
                },
                {
                  title: 'Valor',
                  key: 'amount',
                },
                {
                  title: 'Data',
                  key: 'createdAt',
                },
              ]"
              item-value="name"
              :items="expenses"
            ></v-data-table>
          </v-col>
        </v-row>
        {{ expenses }}
      </template>
      <IntroComponent v-else />
    </v-responsive>
  </v-container>
</template>
