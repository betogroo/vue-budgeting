<script setup lang="ts">
import { toRefs } from 'vue'
import { useMainStore } from '../store/useMainStore'
import type { Budget } from '../types'
import { useHelpers } from '@/shared/composables'
const props = defineProps<Props>()

const $emit = defineEmits<{
  cardButton: [id: string]
}>()

const { localCurrency } = useHelpers()

interface Props {
  budget: Budget
  deleteButton?: boolean
}
const { id, name, amount, color, createdAt } = toRefs(props.budget)

const store = useMainStore()

const handleClick = () => {
  $emit('cardButton', id?.value)
}
</script>

<template>
  <v-card
    class="rounded-lg pa-1 mr-2 my-2"
    :color="color"
    style="border: 2px solid"
    variant="tonal"
    width="100%"
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
          :color="color"
          :height="12"
          :max="amount"
          :model-value="store.spentByBudget(id)"
          rounded
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="space-between"
    >
      <v-col
        ><small
          >{{ localCurrency(+store.spentByBudget(id)) }} gastos</small
        ></v-col
      >
      <v-col
        ><small
          >{{
            localCurrency(amount - store.spentByBudget(id))
          }}
          restantes</small
        ></v-col
      >
      <v-col
        cols="12"
        sm="6"
        ><v-btn
          append-icon="mdi-archive-eye"
          :color="deleteButton ? 'red' : budget.color"
          variant="outlined"
          @Click="handleClick"
        >
          {{ deleteButton ? 'Excluir Orçamento' : 'Ver Orçamento' }}
        </v-btn></v-col
      >
    </v-row>
  </v-card>
</template>
