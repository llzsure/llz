
import {createRouter,createWebHashHistory} from './grouter/index'
// import { createRouter,createWebHashHistory,Router,RouteRecordRaw } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Login from '../components/Login.vue'
// import { getToken } from '../utils/auth'
// import NProgress from 'nprogress'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path:'/login',
        component:Login,
        hidden:true
    }

    // {
    //     path:'/users/:id',
    //     component:User
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach(async (to,from,next)=>{
//     // canUserAccess() 返回 true 或 false
//     // let token =getToken()
//     // if(!token){
//     //     next('/login')
//     // }
//     // return true
//     NProgress.start()
// })

// router.afterEach(()=>{
//     NProgress.done()
// })

// const routes:Array<RouteRecordRaw>=[

// ]

// const router:Router=createRouter({
//     history:createWebHashHistory(),
//     routes
// })


export default router
