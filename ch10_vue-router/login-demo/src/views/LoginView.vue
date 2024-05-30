<template>
  <div class="about">
    <h1>登录页面</h1>
    <form>
      <label>用户名：<input type="text" v-model="uname" placeholder="请输入用户名"></label><br><br>
      <label>密码：<input type="password" v-model="upwd" placeholder="请输入密码"></label><br><br>
      <button type="button" @click="login" :disabled="isDisable">登录</button>
      <button type="reset">重置</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDisable: false,
      uname: "",
      upwd: ""
    }
  },
  methods: {
    login() {
      this.isDisable = true
      if (this.uname === 'zhangsan' && this.upwd === '123456') {
        alert('登陆成功')
        window.sessionStorage.setItem('user', this.uname)
        const p = this.$route.query.redirect 
        this.$router.replace({
          path: p === '/' || p === undefined ? '/main' : p 
        })
      } else {
        alert('登录失败')
        this.isDisable = false
      }
    }
  }
}
</script>