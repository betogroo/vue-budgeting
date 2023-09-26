<script setup lang="ts">
import type { Expense } from '../types'
import { toRefs } from 'vue'
import { useMain } from '../composables'
const props = defineProps<Props>()
interface Props {
  expenses: Expense[]
}
const { expenses } = toRefs(props)

const { getBudget } = useMain()
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
          <v-btn :color="getBudget(item.columns.budget_id)?.color">{{
            getBudget(item.columns.budget_id)?.name
          }}</v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
