<template>
  <div class="app">
    <swiper v-if="inited" ref="swiper"></swiper>
  </div>
</template>
<script>
  import style from '@/lib/app.less'
  import store from '@/lib/store'
  import AES from 'crypto-js/aes'
  import Base64 from 'crypto-js/enc-base64'
  window.AES = AES
  window.Base64 = Base64
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
    computed: {
      inited () {
        return store.state.inited
      }
    },
    methods: {
      init () {
        $.getJSON(store.state.source).done(res => {
          var data
          var $root = $(this.$el)
          data = res.result.content.match(/pagelists:\s*.*?(?=,\n)/)[0].replace(/pagelists:\s*/, '')
          store.commit('init', {
            id: res.result.pid,
            width: $root.width(),
            height: $root.height(),
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
  .app{
    height: 100%;
  }
</style>