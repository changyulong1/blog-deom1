<template>
  <div class="parent-Login">
    <el-col :sm="12" class="Login">
      <p>用户名</p>
      <el-input
          type="text"
          autosize
          v-model="username"
          placeholder="用户名"
          >
      </el-input>
      <p>密码</p>
      <el-input
          type="password"
          autosize
          v-model="password"
          placeholder="密码"
      >
      </el-input>
      <el-button type="success" @click="onLogin">立即登录</el-button>
      <div class="Login-footer">
        <el-link>没有账户？</el-link>
        <router-link to="/Register">立即注册</router-link>
      </div>
    </el-col>
  </div>
</template>

<script lang="js" src="./template.js">

</script>

<style lang="scss" scoped src="./template.scss"></style>