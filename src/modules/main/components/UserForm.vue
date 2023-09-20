<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '../composables'
import { useSharedSore } from '@/shared/store'
const { login, isPending } = useUser()
const store = useSharedSore()
const { enableSnackbar, disableSnackbar } = store

const formData = ref<{ userName: string }>({
  userName: '',
})

const handleSubmit = () => {
  login(formData.value.userName).then(() => {
    console.log('Deu certo')
  })
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
      :loading="isPending"
      type="submit"
      >Criar conta</v-btn
    >
  </v-form>
</template>
