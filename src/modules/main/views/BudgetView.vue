<script setup lang="ts">
import { useMainStore } from '../store/useMainStore'
import { ExpensesTable } from '../components'
defineProps<Props>()
const store = useMainStore()
interface Props {
  id: string
}
</script>

<template>
  <v-container>
    <v-responsive>
      <ExpensesTable :expenses="store.expensesByBudgetId(id)" />
    </v-responsive>
  </v-container>
</template>
