<script setup lang="ts">
import { toRefs } from 'vue'

interface Props {
  budget: string
}
const props = defineProps<Props>()
const { budget } = toRefs(props)
</script>

<template>
  <div class="text-h3">Budgets - {{ budget }}</div>
</template>
