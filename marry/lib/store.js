(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, (function () { 'use strict';

var config = {
  state: {
    source: '/api/data.php',
    pageIndex: 0,
    pages: []
  },
  mutations: {
    init (state, payload) {
      state.pages = payload.pages
    },
    pageIndex (state, payload) {
      state.pageIndex = payload
    }
  }
}

return config

})))
