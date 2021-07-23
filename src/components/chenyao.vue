<template>
  <div>
      <input type="text"  v-model="fristname">
      <input type="text"  v-model="lastname">
      <input type="text"  v-model="fullname">
      <input type="text"  v-model="fullname">
  </div>
</template>

<script lang="ts">
import {defineComponent,ref,computed, watch,watchEffect} from "vue"
export default defineComponent({
  setup(){
    const fristname = ref('chen');
    const lastname  = ref('yao')
  
    const fullname = computed({
       get(){
         return  fristname.value + '_' + lastname.value
       },
       set(val:any){
         fristname.value = val.split('_')[0];
         lastname.value = val.split('_')[1];
       }
        
    })  


   

    watchEffect(()=>{
       
         fristname.value = fullname.value.split('_')[0];
         lastname.value = fullname.value.split('_')[1];
         
    })

    return{
      fristname,lastname,fullname
    }
  }

})
</script>

<style lang="css" scoped>
</style>
