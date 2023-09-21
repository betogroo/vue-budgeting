<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="text-center">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="6"
        >
          <div class="text-h4 text-sm-h3 text-blue">404</div>
          <div class="text-h4 text-sm-h3 text-blue">Página não encontrada!</div>
        </v-col>
        <v-col>
          <v-img
            max-width="450"
            src="../../../assets/images/not_found.jfif"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-btn
            color="blue"
            density="compact"
            prepend-icon="mdi-backspace-outline"
            variant="text"
            @click="router.back()"
            >Voltar</v-btn
          ></v-col
        >
      </v-row>
    </v-responsive>
  </v-container>
</template>
