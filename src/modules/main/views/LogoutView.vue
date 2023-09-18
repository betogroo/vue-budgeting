<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHelpers } from '@/shared/composables'
const { deleteItem } = useHelpers()
const { push } = useRouter()
const logout = () => {
  deleteItem('userName')
  push({ path: '/' })
}
logout()
</script>

<template>
  <div>Logout</div>
</template>
