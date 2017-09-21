<template>
  <div id="main">
    <list></list>
    <app id="view"></app>
    <layer></layer>
    <prop></prop>
  </div>
</template>

<script>
  import App from '@/app'
  import store from '@/lib/store'

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
   ::-webkit-scrollbar-thumb:hover {
       background: @pchh;
   }
   ::-webkit-scrollbar-thumb:active {
       background: @pchh;
   }

  #main{
    height: 100%;
  }
  #view{
    width: 414px;
    height: 736px;
    position: absolute; left: 50%; top: 50%; margin: -368px 0 0 -212px;
  }
</style>