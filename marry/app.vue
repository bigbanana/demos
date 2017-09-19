<template><swiper v-if="$store.state.inited" ref="swiper"></swiper></template>
<script>
  var components = require.context("@/components", true, /\.vue$/)
  components.keys().forEach(key => {
    Vue.component(key.match(/([^/]+)\.vue$/)[1], components(key))
  })
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
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        $.getJSON(this.$store.state.source).done(res => {
          var _data = $.parseJSON(res.result)
          var data
          data = _data.content.match(/pagelists:\s*.*?(?=,\n)/)[0].replace(/pagelists:\s*/, '')
          this.$store.commit('init', {
            id: _data.pid,
            pages: $.parseJSON(data)
          })
        })
      },
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