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
      <ExpensesTable :expenses="expenses" />
    </v-responsive>
  </v-container>
</template>
