// (function (global, factory) {
//   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
//   typeof define === 'function' && define.amd ? define(factory) :
//   (global.store = factory());
// }(this, (function () { 'use strict';

if(process.env.NODE_ENV == 'development'){
  Vue.use(Vuex)
}

export default new Vuex.Store({
  state: {
    inited: false,
    source: './api/data.php',
    pageIndex: 0,
    pages: [],
    Xpro: 1,
    Ypro: 1,
    width: 640,
    height: 1008
  },
  mutations: {
    init (state, payload) {
      state.Xpro = payload.width/state.width
      state.Ypro = payload.height/state.height
      state.inited = true
      Object.assign(state, payload)
    },
    pageIndex (state, payload) {
      state.pageIndex = payload
    }
  }
})

// })))
