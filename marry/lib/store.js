(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, (function () { 'use strict';

var config = {
  state: {
    inited: false,
    source: '/api/data.php',
    pageIndex: 10,
    pages: [],
    Xpro: 1,
    Ypro: 1
  },
  mutations: {
    init (state, payload) {
      state.Xpro = document.documentElement.clientWidth/640
      state.Ypro = document.documentElement.clientHeight/1008
      state.inited = true
      state.pages = payload.pages
    },
    pageIndex (state, payload) {
      state.pageIndex = payload
    }
  }
}

return config

})))
