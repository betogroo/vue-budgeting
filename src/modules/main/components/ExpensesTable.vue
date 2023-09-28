<script setup lang="ts">
import type { Budget, Expense } from '../types'
import { useHelpers } from '@/shared/composables'
import { ref, toRefs } from 'vue'
import { useMain } from '../composables'
const props = defineProps<Props>()
interface Props {
  expenses: Expense[]
}
const { expenses } = toRefs(props)

const rowLoading = ref(-1)

const { getBudget, deleteExpense, isPending } = useMain()
const { localCurrency, timestampToDate } = useHelpers()

const goToBudget = (id: Budget['id']) => {
  console.log(id)
}
const handleDelete = async (id: string, index: number) => {
  rowLoading.value = index
  deleteExpense(id)
}
</script>

<template>
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
    <template v-slot:item="{ item, index }">
      <tr class="text-left">
        <td>{{ item.name }}</td>
        <td>{{ localCurrency(item.amount) }}</td>
        <td>{{ timestampToDate(item.createdAt) }}</td>
        <td class="text-center">
          <v-chip
            :color="getBudget(item.budget_id)?.color"
            :density="'compact'"
            :to="{ name: 'BudgetView', params: { id: item.budget_id } }"
            >{{ getBudget(item.budget_id)?.name }}</v-chip
          >
        </td>
        <td>
          <v-btn
            color="red"
            icon="mdi-delete"
            :loading="isPending === 'deleteExpense' && rowLoading === index"
            variant="text"
            @click="handleDelete(item.id, index)"
          />
        </td>
      </tr>
    </template>
    <template v-slot:bottom> </template>
  </v-data-table>
</template>
