<template>
  <div>
    <HelloWorld :info="msg" constv="88" @myAdd="myAddAction" @myDel="myDelAction" ref="comRef" />
    <button @click="getSon">获取子组件数据</button>
  </div>
</template>
<script setup>
  // 注册 HelloWorld 子组件
  import HelloWorld from '@/components/HelloWorld.vue'
  // 与子组件的数据通信
  import { ref } from 'vue'
  const msg = '传递给子组件的数据'
  const myAddAction = msg => alert(`子组件新增按钮传值 ${msg}`)
  const myDelAction = msg => alert(`子组件删除按钮传值 ${msg}`)
  const comRef = ref()
  const getSon = () => {
    console.log("性别：", comRef.value.prop1)
    console.log("其他信息：", comRef.value.prop2)
  }
</script>