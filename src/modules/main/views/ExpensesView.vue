<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/useMainStore'
import { ExpensesTable } from '../components'
const store = useMainStore()
const { expenses } = storeToRefs(store)
</script>

<template>
  <v-container>
    <v-responsive>
      <div class="text-h5 text-left font-weight-bold">
        <span>Despesas</span>
        <span class="text-subtitle-2">{{ ` (${expenses.length} total)` }}</span>
      </div>
      <ExpensesTable :expenses="expenses" />
    </v-responsive>
  </v-container>
</template>
