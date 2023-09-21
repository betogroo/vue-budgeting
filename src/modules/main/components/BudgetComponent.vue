<script setup lang="ts">
import { toRefs } from 'vue'
import type { Budget } from '../types'

interface Props {
  budget: Budget
}
const props = defineProps<Props>()
const { budget } = toRefs(props)
</script>

<template>
  <div class="text-h3">Orçamento: {{ budget.name }}</div>
  <div class="text-h3">Verba: {{ budget.amount }}</div>
  <div></div>
</template>
