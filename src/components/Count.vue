<template>
    <div>
        {{count}}*2={{ double }}
    </div>
    <button @click="add">add</button>
    <button @click="asyncAdd">async Add</button>
    <input type="text" v-focus>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from '../store/gvuex'
let store=useStore()
let count=computed(()=>store.state.count)
// TODO:1
let double=computed(()=>store.getters.double)

function add(){
    store.commit('add')
}


function asyncAdd(){
    // TODO
    store.dispatch('asyncAdd')
}
</script>