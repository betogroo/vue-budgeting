<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import { useMain } from '../composables'
import type { ExpenseFormData, Budget } from '../types'
const props = defineProps<Props>()
const { budgets } = toRefs(props)

const { addExpense, isPending } = useMain()

interface Props {
  budgets: Budget[]
}
const formData = ref<ExpenseFormData>({
  name: '',
  amount: +'',
  budget_id:
    budgets?.value && budgets.value.length > 0 ? budgets.value[0].id : '',
})

const name = ref()

const filteredBudgets = computed(() => {
  if (budgets.value && budgets.value.length > 1) {
    const index = budgets.value.findIndex(
      (budget) => budget.id === formData.value.budget_id,
    )
    return budgets.value[index].name
  } else {
    return budgets.value[0].name
  }
})

const handleSubmit = async () => {
  await addExpense(formData.value).then(() => {
    formData.value = {
      name: '',
      amount: +'',
      budget_id: budgets.value[0].id,
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
        Adicione sua Despesa em
        <span
          v-if="budgets!.length"
          class="text-blue"
        >
          {{ filteredBudgets }}
        </span>
      </div>
      <v-form
        class="text-right"
        @submit.prevent="handleSubmit"
      >
        <v-row
          class="my-3"
          no-gutters
        >
          <v-col
            class="mr-1 mb-3"
            :cols="budgets.length > 1 ? 6 : 12"
          >
            <v-text-field
              ref="name"
              v-model="formData.name"
              density="compact"
              hide-details
              label="Nome da Despesa"
              placeholder="ex: bolacha"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model.number="formData.amount"
              density="compact"
              hide-details
              label="Valor"
              placeholder="ex: 1,98"
              prefix="R$"
              type="number"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              v-if="budgets.length > 1"
              v-model="formData.budget_id"
              density="compact"
              hide-details
              item-title="name"
              item-value="id"
              :items="budgets"
              label="Categoria"
              variant="outlined"
            ></v-select>
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
              :loading="isPending === 'addExpense'"
              type="submit"
              >Cadastrar</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
  </v-sheet>
</template>
