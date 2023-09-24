<script setup lang="ts">
import { ref } from 'vue'
import { useMain } from '../composables'
import type { BudgetFormData } from '../types'
const { addBudget, isPending } = useMain()

const formData = ref<BudgetFormData>({
  name: '',
  amount: +'',
})

const name = ref()

const handleSubmit = async () => {
  await addBudget(formData.value).then(() => {
    formData.value = {
      name: '',
      amount: +'',
    }
    name.value.focus()
  })
}
</script>

<template>
  <v-sheet
    class="rounded-lg pa-1"
    style="border: 2px dotted"
  >
    <v-sheet class="pa-1">
      <div class="text-left text-subtitle-1 font-weight-black pa-1 mb-3">
        Adicione seu Orçamento
      </div>
      <v-form
        class="text-right"
        @submit.prevent="handleSubmit"
      >
        <v-row
          class="my-3"
          no-gutters
        >
          <v-col>
            <v-text-field
              ref="name"
              v-model="formData.name"
              density="compact"
              hide-details
              label="Nome do Orçamento"
              placeholder="ex: Doces"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row
          class="my-3"
          no-gutters
        >
          <v-col>
            <v-text-field
              v-model.number="formData.amount"
              density="compact"
              hide-details
              label="Quantidade"
              placeholder="ex: 1,98"
              prefix="R$"
              type="number"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row
          class="my-3"
          no-gutters
        >
          <v-col>
            <v-btn
              append-icon="mdi-currency-usd"
              class="text-right"
              color="black"
              :disabled="!formData.name || !formData.amount ? true : false"
              :loading="isPending === 'addBudget'"
              type="submit"
              >Cadastrar</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
  </v-sheet>
</template>
