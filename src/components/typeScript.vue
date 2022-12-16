<script setup lang="ts">
import {computed,reactive,ref,Ref} from '@vue/runtime-core'
interface Jike{
    name:string;
    price:number
}

const msg= ref('')// 根据输入参数推导字符串类型
const msg1=ref<string>('')// 可以通过泛型显示约束

const obj=reactive({})
const course=reactive<Jike>({name:'玩转Vue3全家桶',price:129})

const msg2=computed(()=>'')// 默认参数推导
const course2=computed<Jike>(()=>{
    return {name:'玩转Vue3全家桶',price:129}
})


const props=defineProps<{
    title:string;
    value:number
}>()

const emit=defineEmits<{
    (e:'update',value:number):void
}>()


interface Todo{
    title:string;
    done:boolean
}
let todos:Ref<Todo[]>= ref([{title:'学习Vue',done:false}])



</script>
