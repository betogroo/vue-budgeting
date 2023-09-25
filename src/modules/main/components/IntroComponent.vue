<script setup lang="ts">
import { UserForm } from '.'
</script>

<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-col
      cols="12"
      sm="6"
    >
      <v-sheet class="mx-4">
        <h1 class="text-left mb-2">
          Tenha o controle do <br /><span class="text-blue text-uppercase"
            >seu dinheiro</span
          >
        </h1>
        <p class="text-justify">
          Orçamento pessoal é o segredo para a liberdade financeira. Comece sua
          jornada hoje!
        </p>
      </v-sheet>
      <UserForm />
    </v-col>
    <v-col>
      <v-img
        alt=""
        max-width="550"
        src="../../../assets/images/bg_art.jfif"
      ></v-img>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
h1 {
  line-height: 1;
}
</style>
