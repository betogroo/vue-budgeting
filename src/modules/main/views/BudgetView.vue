<script setup lang="ts">
import { ref } from 'vue'
import { useMain } from '../composables'
import { useMainStore } from '../store/useMainStore'
import { ExpensesTable, BudgetCard, ExpenseForm } from '../components'
const props = defineProps<Props>()
interface Props {
  id: string
}
const store = useMainStore()
const { expensesByBudgetId, budgets } = store
const { getBudget } = useMain()
const budget = ref(getBudget(props.id))
</script>

<template>
  <v-container>
    <v-responsive>
      <ExpensesTable
        :expenses="expensesByBudgetId(id)"
        :header-addiction="budget?.name"
      />
      <BudgetCard
        v-if="budget"
        :budget="budget"
      />
      <ExpenseForm :budgets="budgets" />
    </v-responsive>
  </v-container>
</template>
