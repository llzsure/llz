<template>
    <div id="app">
    <div @click="()=>console.log(xx)"  name="hello">{{name}}</div>
    <h1 >技术摸鱼</h1>
    <p :id="name" class="app">极客时间</p>
</div>

</template>
<script>
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { id: "app" }
const _hoisted_2 = /*#__PURE__*/_createElementVNode("h1", null, "技术摸鱼", -1 /* HOISTED */)
const _hoisted_3 = ["id"]

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", {
      onClick: _cache[0] || (_cache[0] = ()=>_ctx.console.log(_ctx.xx)),
      name: "hello"
    }, _toDisplayString(_ctx.name), 1 /* TEXT */),
    _hoisted_2,
    _createElementVNode("p", {
      id: _ctx.name,
      class: "app"
    }, "极客时间", 8 /* PROPS */, _hoisted_3)
  ]))
}

/**
 * 
 * function test<某种类型>(args:某种类型)：某种类型{
 *      return args
 * }
 * 
 * 
 * function getProperty<某种类型，某种属性 extends keyof 某种类型>(o:某种类型，name:某种属性):某种类型[某种属性]){
 *      return o[name]
 * }
 * 
 * function getProperty<T, K extends keyof T>(o:T,name:K):T[K]{
 *      return o[name]
 * }
 * 
 * */ 
</script>