import {inject ,reactive, computed} from 'vue'

const STORE_KEY='__store__'
function useStore(){
    return inject(STORE_KEY)
}
function createStore(options){
    return new Store(options)
}
class Store{
    constructor(options){
        this.$options=options
        this._state=reactive({
            data:options.state()
        })
        this._mutations=options.mutations

        // TODO:1已完成
        this._actions=options.actions
        this.getters={}

        Object.keys(options.getters).forEach(name=>{
            const fn=options.getters[name]
            this.getters[name]=computed(()=>fn(this.state))
        })
        // TODO:1已完成
    }
    get state(){
        return this._state.data
    }
    commit=(type,payload)=>{
        const entry=this._mutations[type]
        entry && entry(this.state,payload)
    }

    // TODO:2 已完成
    dispatch(type,payload){
        const entry=this._actions[type]
        return entry && entry(this,payload)
    }
    // TODO:2 已完成

    // main.js入口处app.use(store)的时候，会执行这个函数
    install(app){
        app.provide(STORE_KEY,this)
    }
}
export {createStore,useStore}