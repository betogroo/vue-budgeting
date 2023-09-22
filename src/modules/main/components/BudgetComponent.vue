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
  <v-list-item :value="budget.id">
    <template v-slot:prepend="{ isActive }">
      <v-list-item-action start>
        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
      </v-list-item-action>
    </template>

    <v-list-item-title>{{ budget.name }}</v-list-item-title>

    <v-row>
      <v-col>{{ budget.amount }}</v-col>
      <v-col>{{ budget.createdAt }}</v-col>
    </v-row>
  </v-list-item>
</template>
