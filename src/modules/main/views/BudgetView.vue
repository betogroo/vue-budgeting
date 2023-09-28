<script setup lang="ts">
import { useMainStore } from '../store/useMainStore'
import { ExpensesTable } from '../components'
const props = defineProps<Props>()
const store = useMainStore()
interface Props {
  id: string
}
</script>

<template>
  <ExpensesTable :expenses="store.expensesByBudgetId(id)" />
</template>
