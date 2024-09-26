<template>
 <div class="palette">
  <div v-for="color of colors" :key="color" class="box" :style="`background-color: ${color}`" @click="pColor = color"></div>
 </div>


  <p :style="`color: ${pColor}`">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae, consectetur voluptatibus, neque, consequuntur nostrum reprehenderit aut dolore 
    veniam pariatur tenetur quis hic dolor sed nemo mollitia accusantium! Dolorem, sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia 
    veniam minus, debitis commodi repellendus facilis quae in nulla vero modi numquam alias deserunt. Magni officiis accusamus atque, ex perferendis aliquid.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam odit repellat nemo totam et cum vero nesciunt in fugiat at.</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const pColor = ref('white')
const colors=['black','rgb(187, 65, 106)','rgb(211, 40, 40)','rgb(253, 94, 36)','rgb(252, 252, 31)','rgb(90, 194, 90)','rgb(41, 41, 255)','blue','rgb(100, 54, 143)','white']

</script>

<style scoped>
.palette {
  display: flex;
  justify-content: left;
  background-color: rgb(125, 125, 126);
  padding: 10px;
  width: 200px;
}
.box {
  width: 20px;
  height: 20px;
  margin: 2px;
  border: 1px rgb(122, 120, 120);
}
</style>