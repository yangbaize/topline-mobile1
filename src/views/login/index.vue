<template>
  <div class="login-wrap">
    <!-- 头部 -->
    <van-nav-bar title="登录" />
    <!-- 表单 -->
    <form>
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号 "
        />
        <van-field
          v-model="user.code"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>

      <div class="login-btn-box">
        <van-button
          type="info"
          class="login-btn"
          @click.prevent="handleLogin"
          :loading="loginLoading"
          loading-text="登录中..."
        >登录</van-button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18604148640',
        code: '123456'
      },
      loginLoading: false
    }
  },
  methods: {
    async handleLogin () {
      this.loginLoading = true
      try {
        const data = await login(this.user)
        this.$store.commit('setUser', data)
        // 先跳转到首页
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
      this.loginLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn-box {
  padding: 10px;
  .login-btn {
    width: 100%;
  }
}
</style>
