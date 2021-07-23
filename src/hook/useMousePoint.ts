import {render,ref,onMounted, onUnmounted} from "vue";

export default function useMousePoint(){
    const x = ref(-1);
    const y = ref(-1);

    function handleClick(event:MouseEvent){
      
        x.value = event.pageX;
        y.value = event.pageY;
    }



    onMounted(()=>{
        window.addEventListener('click',handleClick)
    })
    onUnmounted(()=>{
        window.removeEventListener('click',handleClick)
    })
    return{
        x,y
    }
}