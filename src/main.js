import { createApp } from 'vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import { parserOptions } from '@vue/compiler-dom'
// window.onerror = function(e){
//     console.info('info=>',e)
//     console.error('error=>',e)
//     console.log('log=>',e)
//     console.log(['https://stackoverflow.com/search?q=[js]+'+e])
// }
const app=createApp(App)
// 注册一个全局自定义指令 v-focus
app.directive('focus',{
    // 当被绑定的元素挂载到 DOM 中时
    mounted(el){
        el.focus()
    }
})

// const lazyPlugin={
//     install(app,options){
//         app.directive('lazy',{
//             mounted:'',
//             updated:"",
//             unmounted:''
//         })
//     }
// }

// const loadingDirective={
//     mounted:function(el,binding,vnode){
//         const mask=createComponent(Loading,{
//             ...options,
//             onAfterLeave(){
//                 el.domVisible=false
//                 const target=binding.modifiers.fullscreen||binding.modifiers.body?document.body:el
//                 removeClass(target,'el-loading-parent--relative')
//                 removeClass(target,'el-loading-parent-hidden')
//             }
//         })
//         el.options= options
//         el.instances=mask.proxy
//         el.mask=mask.proxy.$el
//         el.maskStyle={}
//         binding.value && toggleLoading(el,binding)

//     },

//     updated:function(el,binding){
//         el.instances.setText(el.getAttribute('el-loading-text'))
//         if(binding.oldValue!==binding.value){
//             toggleLoading(el,binding)
//         }
//     },

//     unmounted:function(){
//         el.instances&&el.instances.close()
//     }

// }
// export default{
//     install(app){
//         // if (Vue.prototype.$isServer) return
//         app.directive('loading',loadingDirective)
//     }
// }

app.use(store).use(router).use(Element3).mount('#app')





