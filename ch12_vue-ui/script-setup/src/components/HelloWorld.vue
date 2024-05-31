<template>
  <div>
    <h4>接收父属性传值</h4>
    <h4>info: {{ info }}</h4>
    <h4>constv: {{ constv }}</h4>
  </div>
  <div>
    <button @click="add">新增</button>
    <button @click="del">删除</button>
  </div>
  <div>
    <h4>性别: {{ prop1 }}</h4>
    <h4>其他信息: {{ prop2 }}</h4>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
const prop1 = ref('男')
const prop2 = reactive({
  uname: '陈恒',
  age: 88
})

import {defineProps, defineEmits, defineExpose} from 'vue'
defineProps({
  info: {
    type: String,
    default: '------'
  },
  constv: {
    type: String,
    default: '0'
  }
})
const myEmits = defineEmits(['myAdd', 'myDel'])
const add = () => myEmits('myAdd', '向父组件传递的新增数据')
const del = () => myEmits('myDel', '向父组件传递的删除数据')
defineExpose({ prop1, prop2 })
</script>