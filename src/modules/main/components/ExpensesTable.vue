<script setup lang="ts">
import type { Budget, Expense } from '../types'
import { toRefs } from 'vue'
import { useMain } from '../composables'
const props = defineProps<Props>()
interface Props {
  expenses: Expense[]
}
const { expenses } = toRefs(props)

const { getBudget } = useMain()

const goToBudget = (id: Budget['id']) => {
  console.log(id)
}
const deleteExpense = (id: Expense['id']) => {
  console.log(id)
}
</script>

<template>
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
        key: 'formatDate',
      },
      {
        title: 'Orçamento',
        key: 'budget_id',
      },
      {
        title: '*',
        key: 'id',
      },
    ]"
    item-value="name"
    :items="expenses"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.columns.name }}</td>
        <td>{{ item.columns.amount }}</td>
        <td>{{ item.columns.formatDate }}</td>
        <td>
          <v-btn
            :color="getBudget(item.columns.budget_id)?.color"
            width="150"
            @click="goToBudget(item.columns.budget_id)"
            >{{ getBudget(item.columns.budget_id)?.name }}</v-btn
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
  </v-data-table>
</template>
