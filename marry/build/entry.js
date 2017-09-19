import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import storeConfig from '@/lib/store'
import App from '@/app'

window.Vue = Vue
window.Vuex = Vuex

Vue.use(Vuex)

window.store = new Vuex.Store(storeConfig)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})