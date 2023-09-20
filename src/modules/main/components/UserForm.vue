<script setup lang="ts">
import { ref } from 'vue'
import useMain from '../composables/useMain'

const formData = ref<{ userName: string }>({
  userName: '',
})

const { login, isPending } = useMain()

const handleSubmit = async () => {
  await login(formData.value.userName)
}
</script>

<template>
  <v-form
    class="ma-2 pa-1 text-right"
    @submit.prevent="handleSubmit"
  >
    <v-text-field
      v-model="formData.userName"
      :center-affix="true"
      density="compact"
      label="Seu nome"
      placeholder="Qual é o seu nome?"
      variant="underlined"
    />
    <v-btn
      append-icon="mdi-account-plus"
      color="black"
      :disabled="formData.userName.length < 1"
      :loading="isPending"
      type="submit"
      >Criar conta</v-btn
    >
  </v-form>
</template>
