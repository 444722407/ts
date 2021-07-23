<template>
    <h1>其他api</h1>
    {{ref1.name}}
    {{rect1.cars.car_name}}
    <button @click="changeValue">改变值</button>
    <br>
    {{ref2.name}}
    {{rect2.cars.car_name}}
    <button @click="changeValue2">改变值--(shallowReactive )(shallowRef)</button>
</template>

<script lang="ts">
import {defineComponent,reactive,ref, shallowReactive, shallowRef} from "vue"
export default defineComponent({
name:"App",
  setup() {
 

    const ref1 = ref({name:"ref1"});
    const rect1 = reactive({
        name:"chenyao",
        cars:{
            car_name:'奥迪'
        }
    })


    const ref2 = shallowRef({name:"ref2"});
    const rect2 = shallowReactive({
        name:"chenyao",
         cars:{
            car_name:'奥迪'
        }
    });

    const changeValue = ()=>{
        console.log('chang1')
        ref1.value.name += "-";
        rect1.cars.car_name  += '=';

    }
    const changeValue2 = ()=>{
        console.log('chang2')
        ref2.value.name += "-";
        rect2.cars.car_name += '=';
    }

    return {
        ref1,rect1,changeValue,
        ref2,rect2,changeValue2,
      
    }
}
})
</script>

<style lang="css" scoped>
</style>
