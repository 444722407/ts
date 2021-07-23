<template>
  <div>
      <h1>父组件</h1>
      x:{{x}}
      y:{{y}}
      {{obj.car.car_name}}
      <br>
      <button @click="msg +='='">++</button>
      <chenyao />
      <cdata />
      <craw />
  </div>
</template>

<script  setup lang ='ts'>
import useMousePoint from './hook/useMousePoint';
import chenyao from "./components/chenyao.vue";
import cdata from "./components/data.vue";
import craw from "./components/raw.vue";
import { toRaw } from '@vue/reactivity';

const {x ,y } = useMousePoint()
const obj = toRaw({
  name:123,
  car:{
    car_name:'奥迪'
  }
})

</script>

<style lang="css" scoped>

</style>
