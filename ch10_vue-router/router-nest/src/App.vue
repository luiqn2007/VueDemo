<template>
  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于我们</router-link> |
    <router-link to="/product">产品介绍</router-link>
  </nav>
  <router-view class="my-view"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.my-view {
  width: 500px;
  margin: 0 auto;
  text-indent: 2em;
  text-align: left;
  padding: 5px 10px;
  border: 1px dashed #42b983;
}
</style>
