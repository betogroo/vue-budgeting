<script setup lang="ts">
interface Props {
  userName: string | null
}
defineProps<Props>()
</script>
<template>
  <v-app-bar density="compact">
    <v-app-bar-title>
      <RouterLink
        class="text-black text-decoration-none"
        :to="{ name: 'HomeView' }"
      >
        <v-icon color="blue">mdi-home</v-icon>
        Budgeting App</RouterLink
      >
    </v-app-bar-title>
    <v-btn
      v-if="userName"
      color="error"
      prepend-icon="mdi-account-remove"
      :to="{ name: 'LogoutView' }"
      variant="outlined"
      >Delete User</v-btn
    >
  </v-app-bar>
</template>
