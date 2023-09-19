<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHelpers } from '@/shared/composables'
import { useSharedSore } from '@/shared/store'
const { enableSnackbar } = useSharedSore()
const { deleteItem } = useHelpers()
const { push } = useRouter()
const logout = () => {
  deleteItem('userName')
  enableSnackbar('Logout com sucesso')
  push({ path: '/' })
}
logout()
</script>

<template>
  <div>Logout</div>
</template>
