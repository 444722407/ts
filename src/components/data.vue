<template>

      <h1>data 组件</h1>
      <div v-if='is_loading'>Loading...</div>
      <div v-else-if= 'error'>网络错误</div>
      <ul v-else-if ='data.length'>
          <li v-for='(item,index) in data' :key='index'>
              id:{{item.id}}---price:{{item.price}}---
              <span class="del">{{item.old_price}}</span>
          </li>
      </ul>
       <ul v-else>
          <li>
              id:{{data.id}}---price:{{data.price}}---
              <span class="del">{{data.old_price}}</span>
          </li>
      </ul>
 
</template>

<script lang="ts">
import {defineComponent, watch} from "vue"
import requestData from '../hook/requestData'

interface dataType{
    id:number,
    price:string,
    old_price:string
}


export default defineComponent({


  setup() {
    
    const {is_loading,error,data} = requestData<dataType[]>('../data/01.json');
    //const {is_loading,error,data} = requestData<dataType>('../data/02.json');
    watch(data,()=>{
        if(data.value){
            console.log(data.value.length)
        }
        
    })
    return {
        is_loading,error,data
    }
  }
})
</script>

<style lang="css" scoped>
.del{
    color: red;
    text-decoration: line-through;
}
</style>
