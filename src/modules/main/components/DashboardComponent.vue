<script setup lang="ts">
interface Props {
  userName: string
}
defineProps<Props>()
</script>

<template>
  <h1>{{ userName }}</h1>
  <div>Dashboard</div>
</template>
