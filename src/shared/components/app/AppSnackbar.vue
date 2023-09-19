<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSharedSore } from '@/shared/store'

const store = useSharedSore()
const { disableSnackbar } = store
const { snackbar } = storeToRefs(store)
</script>

<template>
  <v-snackbar
    v-model="snackbar.isActive"
    :timeout="snackbar.timeout"
  >
    {{ snackbar.text }}

    <template v-slot:actions>
      <v-btn
        color="blue"
        variant="text"
        @click="disableSnackbar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
