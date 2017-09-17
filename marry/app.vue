<template><swiper ref="swiper"></swiper></template>
<script>
  // console.log(Vuex)
  var components = require.context("@/components", true, /\.vue$/)
  export default {
    data: function() {
      return {
        width: 414,
        height: 736
      }
    },
    beforeCreate () {
      window.app = this.$parent
      window.onresize = () => {
        this.resetViewport()
      }
      // document.documentElement.style.fontSize = window.screen.width*16/414+'px'
      components.keys().forEach(key => { this.constructor.component(key.match(/([^/]+)\.vue$/)[1], components(key)) })
    },
    methods: {
      resetViewport () {
        var width = window.screen.width
        var scale = width/414
        var content = 'width=' + width + ', initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=0';
        var viewport = document.createElement('meta')
        viewport.name = 'viewport';
        viewport.content = content;
        var oldViewport = window.document.head.querySelector('meta[name="viewport"]');
        if (oldViewport) {
          oldViewport.parentNode.removeChild(oldViewport);
        }
        window.document.head.appendChild(viewport);
      }
    }
  }
</script>

<style lang="less">
  html,body{
    height: 100%;
  }
  body{
    margin: 0;
  }
</style>