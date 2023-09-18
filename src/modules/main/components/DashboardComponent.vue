<script setup lang="ts">
interface Props {
  userName: string | null
}
defineProps<Props>()
</script>

<template>
  <h1>{{ userName ? userName : '' }}</h1>
  <div>Dashboard</div>
</template>
