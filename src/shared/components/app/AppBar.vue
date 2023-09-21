<script setup lang="ts">
interface Props {
  userName: string | null
  isPending: boolean | string
}
defineProps<Props>()

const $emit = defineEmits<{
  logout: []
}>()

const logout = () => {
  $emit('logout')
}
</script>
<template>
  <v-app-bar
    density="compact"
    elevation="0"
  >
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
      :loading="isPending === 'logout'"
      prepend-icon="mdi-account-remove"
      variant="outlined"
      @click="logout"
      >Delete User</v-btn
    >
  </v-app-bar>
</template>
