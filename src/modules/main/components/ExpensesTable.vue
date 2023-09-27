<script setup lang="ts">
import type { Budget, Expense } from '../types'
import { useHelpers } from '@/shared/composables'
import { toRefs } from 'vue'
import { useMain } from '../composables'
const props = defineProps<Props>()
interface Props {
  expenses: Expense[]
}
const { expenses } = toRefs(props)

const { getBudget } = useMain()
const { localCurrency, timestampToDate } = useHelpers()

const goToBudget = (id: Budget['id']) => {
  console.log(id)
}
const deleteExpense = (id: Expense['id']) => {
  console.log(id)
}
</script>

<template>
  <div class="text-h5 text-left font-weight-bold">
    <span>Despesas recentes</span>
    <span class="text-subtitle-2">{{ ` (${expenses.length} total)` }}</span>
  </div>
  <v-data-table
    class="elevation-1"
    density="compact"
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
      {
        title: 'Orçamento',
        key: 'budget_id',
        width: 40,
      },
      {
        title: '',
        key: 'id',
      },
    ]"
    :items="expenses"
    sort-asc-icon="mdi-sort-ascending"
    :sort-by="[{ key: 'createdAt', order: 'desc' }]"
    sort-desc-icon="mdi-sort-descending"
  >
    <template v-slot:item="{ item }">
      <tr class="text-left">
        <td>{{ item.columns.name }}</td>
        <td>{{ localCurrency(item.columns.amount) }}</td>
        <td>{{ timestampToDate(item.columns.createdAt) }}</td>
        <td class="text-center">
          <v-chip
            :color="getBudget(item.columns.budget_id)?.color"
            :density="'compact'"
            @click="goToBudget(item.columns.budget_id)"
            >{{ getBudget(item.columns.budget_id)?.name }}</v-chip
          >
        </td>
        <td>
          <v-icon
            color="red"
            @click="deleteExpense(item.columns.id)"
            >mdi-delete</v-icon
          >
        </td>
      </tr>
    </template>
    <template v-slot:bottom> </template>
  </v-data-table>
</template>