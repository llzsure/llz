import {ref,watch} from 'vue'

export default function useFavicon(newIcon){
    const favicon=ref(newIcon)

    const updataIcon=(icon)=>{
        document.head.querySelectorAll(`link[rel*="icon"]`).forEach(el=>el.href=`${icon}`)
    }
    const reset=()=>favicon.value='/favicon.ico'
    
    watch(favicon,(i)=>{
        updataIcon(i)
    })
    return {favicon,reset}
}