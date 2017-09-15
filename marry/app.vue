<template><swiper ref="swiper"></swiper></template>
<script>
  var components = require.context("@/components", true, /\.vue$/)
  export default {
    data: function() {
      return {
      }
    },
    beforeCreate () {
      window.app = this.$parent
      components.keys().forEach(key => { this.constructor.component(key.match(/([^/]+)\.vue$/)[1], components(key)) })
    },
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