<script setup lang="ts">
import { Budget } from '../types'

interface Props {
  userName: string | null
  budgets: Budget[] | null
}
defineProps<Props>()
</script>

<template>
  <div>
    <h1 class="text-left mb-2">
      Seja bem vindo de volta,<span class="text-blue text-uppercase">
        {{ ' ' + userName }}</span
      >
    </h1>
    <div v-if="!budgets?.length">
      <p class="text-justify">
        Orçamento pessoal é o segredo para a liberdade financeira.
      </p>
      <p class="text-justify">Comece criando seu orçamento agora!</p>
    </div>
  </div>
</template>
