import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageIndex: 0
  },
  mutations: {
    pageIndex (state, payload) {
      state.pageIndex = payload
    }
  }
})

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})