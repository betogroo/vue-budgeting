<script setup lang="ts">
import { toRefs } from 'vue'
import { useMainStore } from '../store/useMainStore'
import type { Budget } from '../types'

interface Props {
  budget: Budget
}
const props = defineProps<Props>()
const { id, name, amount, color, createdAt } = toRefs(props.budget)

const store = useMainStore()
</script>

<template>
  <v-card
    class="rounded-lg pa-1 mr-2 my-2"
    color="red"
    style="border: 2px solid"
    variant="tonal"
  >
    <v-row>
      <v-col cols="6">
        <v-card-title>{{ name }}</v-card-title>
      </v-col>
      <v-col class="d-flex flex-column">
        <span>R$ {{ amount }}</span> <span>orçamentado</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mx-3">
        <v-progress-linear
          color="red"
          :height="12"
          :max="amount"
          model-value="250"
          rounded
        ></v-progress-linear>
      </v-col>
    </v-row>
    {{ store.spentByBudget(id) }}
  </v-card>
</template>
