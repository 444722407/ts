import axios from 'axios';
import {ref} from 'vue';

export default function<T>(url:string){
   
    const is_loading = ref(true)
    const error = ref("")
    const data = ref<T | null>(null)
    axios.get(url).then((res)=>{
      
        is_loading.value = false;
        data.value = res.data;
    }).catch((err)=>{
        console.log(err)
        is_loading.value = false;
        error.value = '数据错误';

    })
    return {
        is_loading,error,data
    }
}


