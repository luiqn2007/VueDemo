<template>
  <nav>
    <router-link to="/first?uname=chenheng&pwd=123456">第一个页面</router-link> |
    <router-link to="/second/shenheng1/654321">第二个页面</router-link> |
    <router-link to="/route-details/Zhangsan/post/123456/post/18">$route 内容</router-link>
  </nav>
  <router-view />
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
</style>
