<script setup lang="ts">
import { toRefs } from 'vue'
import { useMainStore } from '../store/useMainStore'
import type { Budget } from '../types'
import { useHelpers } from '@/shared/composables'
const props = defineProps<Props>()

const { localCurrency } = useHelpers()

interface Props {
  budget: Budget
}
const { id, name, amount, color, createdAt } = toRefs(props.budget)

const store = useMainStore()
</script>

<template>
  <v-card
    class="rounded-lg pa-1 mr-2 my-2"
    color="red"
    style="border: 2px solid"
    variant="outlined"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="6">
        <v-card-title>{{ name }}</v-card-title>
      </v-col>
      <v-col>
        <span>{{ localCurrency(amount) }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mx-3">
        <v-progress-linear
          color="red"
          :height="12"
          :max="amount"
          :model-value="store.spentByBudget(id)"
          rounded
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col>{{ localCurrency(+store.spentByBudget(id)) }} gastos</v-col>
      <v-col
        >{{ localCurrency(amount - store.spentByBudget(id)) }} resantes</v-col
      >
    </v-row>
  </v-card>
</template>
