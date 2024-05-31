<template>
  <div>
    <h3>{{ bookName }}</h3>
    <h3>作者：{{ $store.state.bookAuthor }}</h3>
    <h3>出版社：{{ $store.state.bookPress }}</h3>
    <h3>ISBN：{{ $store.state.BISBN }}</h3>
    <h3>价格：{{ $store.state.bookPrice }}</h3>
  </div>
  <hr>
  <div>
    <h3>{{ bookName }}</h3>
    <h3>作者：{{ bookAuthor }}</h3>
    <h3>出版社：{{ bookPress }}</h3>
    <h3>ISBN：{{ BISBN }}</h3>
    <h3>价格：{{ bookPrice }}</h3>
  </div>
  <hr>
  <div>
    <h3>getter: </h3>
    <h3>买一本需要花的钱：{{ $store.getters.getBookPrice }}</h3>
    <h3>买三本需要花的钱：{{ $store.getters.getThreeBookPrice }}</h3>
    <h3>买五本需要花的钱：{{ $store.getters.getManyBookPrice(5) }}</h3>
    <h3>买一本需要花的钱：{{ getBookPrice }}</h3>
    <h3>买三本需要花的钱：{{ getThreeBookPrice }}</h3>
    <h3>买五本需要花的钱：{{ getFiveBookPrice }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      bookName: 'SSM + SpringBoot + Vue.js 全栈开发从入门到实战（微课视频版）'
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    bookPress() {
      return this.$store.state.bookPress
    },
    ...mapState(['BISBN', 'bookPrice', 'bookAuthor']),
    getFiveBookPrice() {
      return this.$store.getters.getManyBookPrice(5)
    },
    ...mapGetters(['getBookPrice', 'getThreeBookPrice'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>