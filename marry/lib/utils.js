(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.utils = factory());
}(this, (function () { 'use strict';

var utils = {
  getItemsOfType (type) {
    var res = []
    store.state.pages.forEach(function(item){
      item.elements.forEach(function(it){
        if(it.type == type){
          res.push(it)
        }
      })
    })
    return res
  },
  getItemsOfContent (content) {
    var res = []
    store.state.pages.forEach(function(item){
      item.elements.forEach(function(it){
        if(it.content.search(content) != -1){
          res.push(it)
        }
      })
    })
    return res
  }
}

return utils

})))