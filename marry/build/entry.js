//前台版app
// import App from '@/app'
import App from '@/edit'
import utils from '@/lib/utils'

window.Vue = Vue
window.Vuex = Vuex
window.utils = utils

new Vue({
  el: '#app',
  render: h => h(App)
})