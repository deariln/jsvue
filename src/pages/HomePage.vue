<template>
  <h1 v-if="bool" @click="str+='!'">{{ str }}</h1>
  <h1 v-else @click="str+='!'" >{{ str.split('').reverse().join('') }}</h1>
  <button v-on:click="bool=!bool">reverse</button>
  <CalcVue/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalcVue from '../components/CalcVue.vue';
const str = ref('vue')
const bool = ref(true)
</script>


<style scoped>
h1 {
  user-select: none;
}
</style>
