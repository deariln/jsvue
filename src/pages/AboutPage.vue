<template>
 <div class="palette">
  <div class="box color1"></div>
  <div class="box color2"></div>
  <div class="box color3"></div>
  <div class="box color4"></div>
  <div class="box color5"></div>
  <div class="box color6"></div>
  <div class="box color7"></div>
  <div class="box color8"></div>
  <div class="box color9"></div>
  <div class="box color10"></div>
 </div>


  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae, consectetur voluptatibus, neque, consequuntur nostrum reprehenderit aut dolore 
    veniam pariatur tenetur quis hic dolor sed nemo mollitia accusantium! Dolorem, sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia 
    veniam minus, debitis commodi repellendus facilis quae in nulla vero modi numquam alias deserunt. Magni officiis accusamus atque, ex perferendis aliquid.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam odit repellat nemo totam et cum vero nesciunt in fugiat at.</p>
</template>

<script setup lang="ts">


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
.color1 {
  background-color: black;
}
.color2 {
  background-color:rgb(187, 65, 106);
}
.color3 {
  background-color: rgb(211, 40, 40);
}
.color4 {
  background-color: rgb(253, 94, 36);
}
.color5 {
  background-color: rgb(252, 252, 31);
}
.color6 {
  background-color: rgb(90, 194, 90);
}
.color7 {
  background-color: rgb(41, 41, 255);
}
.color8 {
  background-color: blue;
}
.color9 {
  background-color: rgb(100, 54, 143);
}
.color10 {
  background-color: white;
}
</style>