<script setup lang="ts">
interface Props {
  userName: string | null
}
defineProps<Props>()
</script>

<template>
  <h1 class="text-left mb-2">
    Seja bem vindo de volta,<span class="text-blue text-uppercase">
      {{ ' ' + userName }}</span
    >
  </h1>
</template>
