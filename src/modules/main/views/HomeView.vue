<script setup lang="ts">
import {
  DashboardComponent,
  IntroComponent,
  BudgetForm,
  ExpenseForm,
  ExpensesTable,
  BudgetCard,
} from '../components'
import useMain from '../composables/useMain'
import { useHelpers } from '@/shared/composables'
const { lastColumnGrid } = useHelpers()
const { userName, budgets, expenses, recentExpenses } = useMain()
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
            :sm="!budgets.length ? 8 : 6"
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
        <v-row dense>
          <v-col cols="12">
            <div class="text-h5 text-left font-weight-bold">
              <span>Orçamentos Cadastrados</span>
            </div>
          </v-col>
          <v-col
            v-for="(budget, index) in budgets"
            :key="budget.id"
            cols="12"
            :sm="lastColumnGrid(budgets, index)"
          >
            <BudgetCard :budget="budget" />
          </v-col>
        </v-row>

        <v-row dense
          ><v-col
            v-if="recentExpenses.length"
            cols="12"
            ><div class="text-h5 text-left font-weight-bold">
              <span>Despesas recentes</span>
              <span class="text-subtitle-2">{{
                ` (${recentExpenses.length} total)`
              }}</span>
            </div>
            <ExpensesTable :expenses="recentExpenses"
          /></v-col>
          <v-col class="text-right">
            <v-btn
              v-if="expenses.length > 5"
              append-icon="mdi-table-eye"
              color="black"
              :to="{ name: 'ExpensesView' }"
              >ver todas as despesas</v-btn
            >
          </v-col>
        </v-row>
      </template>
      <IntroComponent v-else />
    </v-responsive>
  </v-container>
</template>
