import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 初始化从本地获取用户信息 (token)
    user: JSON.parse(window.localStorage.getItem('user'))
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      // 持久化到本地存储
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  }
})
