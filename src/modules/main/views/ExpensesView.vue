<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/useMainStore'
const store = useMainStore()
const { expenses } = storeToRefs(store)
</script>

<template>
  <div>Expenses</div>
  {{ expenses }}
</template>
