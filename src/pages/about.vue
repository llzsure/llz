
<template>
    <h1>这是关于页面</h1>
        <!-- 
        
        <button @click="loading">123</button> -->

        <!-- <h1 @click="toggle">click</h1> -->

        <!-- <Rate :value="score"></Rate>
        <Rate :value="4" theme="red"></Rate>
        <Rate :value="1" theme="green"></Rate> -->
        <!-- <Rate :value="3.5"></Rate> -->
        <!-- <h1>你的评分是{{score}}</h1>
        <Rate v-model="score"></Rate> -->
        <!-- <Rate v-model="score">课程评分</Rate>
        <Rate v-model="score">
            <img src="/favicon.ico" alt="">
        </Rate> -->
        <!-- <div class="box" :style="{width:width+'px'}"></div>
        <button @click="change">click</button> -->

        <!-- <button @click="toggle">click</button>
        <transition name="fade">
            <h1 v-if="showTitle">你好 Vue3</h1>
        </transition> -->
       
       <Heading :level="3">heading</Heading>
</template>

<script setup>
import {ref} from 'vue'
import Heading from '../components/Heading'

// import Rate from '../components/Rate.vue'
// let score=ref(3)
// import useFavicon from '../utils/favicon'
// import {useFullscreen} from '@vueuse/core'

// let {favicon}=useFavicon()
// function loading(){
//     favicon.value='/geek.png'
// }

// const {isFullscreen, enter, exit, toggle}=useFullscreen

// let score=ref(3.5)
// function update(num){
//     score.value=num
// }

// let width=ref(100)
// function change(){
//     width.value+=100
// }

let showTitle=ref(true)
function toggle(){
    showTitle.value=!showTitle.value
}
</script>

<style>
/* .box{
    background: red;
    height: 100px;
    transition: width 1s linear;
} */
/* .box{
    width: 30px;
    height: 30px;
    position: relative;
    background: #d88986;
    animation: move 2s linear infinite;
}

@keyframes move{
    0%{left:0px}
    50%{left:200px}
    100%{left:0}
} */

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}
</style>