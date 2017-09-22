<template>
  <div id="main">
    <list></list>
    <edit></edit>
    <layer></layer>
    <prop></prop>
  </div>
</template>

<script>
  import App from '@/app'
  import store from '@/lib/estore'
  import VueDraggableResizable from 'vue-draggable-resizable/src'
  Vue.component('vdr', VueDraggableResizable)

  export default {
    data () {
      return {}
    },
    components:{
      app: App
    }
  }
</script>

<style lang="less">
  @import '~@/lib/edit.less';

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: @pchh;
  }
  ::-webkit-scrollbar-track:hover {
    background: @pchh;
  }
  ::-webkit-scrollbar-thumb {
    background: @pch;
  }
  // ::-webkit-scrollbar-thumb:hover {
  // }

  #main{
    height: 100%;
    background-color: @pcd;
    overflow:hidden;
  }
  body{
    overflow:hidden;
  }
</style>