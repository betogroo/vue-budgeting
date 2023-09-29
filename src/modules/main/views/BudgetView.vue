<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMain } from '../composables'
import { useMainStore } from '../store/useMainStore'
import { ExpensesTable, BudgetCard, ExpenseForm } from '../components'
const props = defineProps<Props>()
interface Props {
  id: string
}
const store = useMainStore()
const { expensesByBudgetId, budgets } = store
const { getBudget, deleteBudget, isPending } = useMain()
const router = useRouter()
const budget = ref(getBudget(props.id))
const handleDelete = async (id: string) => {
  await deleteBudget(id).then(() => {
    router.push({ name: 'HomeView' })
  })
}
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-responsive class="text-center">
      <v-row>
        <v-col cols="12">
          <ExpensesTable
            :expenses="expensesByBudgetId(id)"
            :header-addiction="budget?.name"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <BudgetCard
            v-if="budget"
            :budget="budget"
            :delete-button="true"
            :is-pending="isPending"
            @card-button="handleDelete(budget.id)"
          />
        </v-col>
        <v-col>
          <ExpenseForm :budgets="budgets" />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
