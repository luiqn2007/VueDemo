<template>
  <div class="about">
    <h1>欢迎</h1>
    <div>{{ uname }} 登陆成功</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: window.sessionStorage.getItem('user')
    }
  }
}
</script>