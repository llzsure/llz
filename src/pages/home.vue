<template>
    <h1>这是首页</h1>
    
    <!-- <TodoList/>  -->
    <Count/>
</template>

<script setup>
import TodoList from '../components/TodoList.vue'
import Count from '../components/Count.vue'



/**
 * 1. defineProperty
*/
// let getDouble=n=>n*2
// let obj={}
// let count=1
// let double=getDouble(count)
// Object.defineProperty(obj,'count',{
//     get(){
//         return count
//     },
//     set(val){
//         count=val
//         double=getDouble(val)
//     }
// })
// console.log(double)
// obj.count=2
// console.log(double)

/**
 * 2. Proxy
*/
// let obj={}
// let getDouble=n=>n*2
// let count=1
// let double=getDouble(count)
// let proxy=new Proxy(obj,{
//     get:function(target,prop){
//         return target[prop]
//     },
//     set:function(target,prop,value){
//         target[prop]=value;
//         if(prop==='count'){
//             double=getDouble(value)
//         }
//     },
//     deleteProperty(target,prop){
//         delete target[prop]
//         if(prop==='count'){
//             double=NaN
//         }
//     }
// })
// console.log(obj.count,double)
// proxy.count=2
// console.log(obj.count,double)
// delete proxy.count
// 删除属性后，我们打印log时，输出的结果就是undefined NaN
// console.log(obj.count.delete)


// import {reactive,computed,watchEffect} from 'vue'
// let obj=reactive({
//     count:1
// })
// let double=computed(()=>obj.count*2)
// obj.count=2
// watchEffect(()=>{
//     console.log('数据被修改了',obj.count,double.value)
// })


/**
 * 3. value setter
*/
// let getDouble=n=>n*2
// let _value=1
// let double=getDouble(_value)

// let count={
//     get value(){
//         return _value
//     },
//     set value(val){
//         _value=val
//         double=getDouble(_value)
//     }
// }
// console.log(count.value,double)
// count.value=2
// console.log(count.value,double)

// function useStorage(name,value=[]){
//     let data=ref(JSON.parse(localStorage.getItem(name)||value))
//     watchEffect(()=>{
//         localStorage.setItem(name,JSON.stringify(data.value))
//     })
//     return data
// }
// let todos=useStorage('todos',[])
// function add(){

// }
</script>