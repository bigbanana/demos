<template>
  <div id="list">
    <div v-for="(page, index) in pages" class="slide" :class="{active: pageIndex==index}">
      <div class="slide-box" @click="handleSlideTo(index)">
        <page :data="page"></page>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/lib/estore'

  export default {
    data () {
      return {}
    },
    computed: {
      pages () {
        return store.state.pages
      },
      pageIndex () {
        return store.state.pageIndex
      }
    },
    methods: {
      handleSlideTo (index) {
        store.commit('pageIndex', index)
      }
    }
  }
</script>

<style lang="less">
  @import '~@/lib/edit.less';

  @scale: 0.3;
  @width: 414px;
  @height: 736px;
  #list{
    position: absolute;height: 100%; width: @width*@scale+40; left: 0; top: 0;
    overflow: auto;
    background-color: @pc;
    .slide{
      margin: 5px;
      overflow:hidden;
      &:hover, &.active{
        background: @pch;
        cursor: pointer;
      }
      .slide-box{
        width: @width*@scale; height: @height*@scale;
        position: relative;overflow:hidden;
        margin: 10px auto; background-color: #fafafa;
      }
      .page{
        transform: scale(@scale); transform-origin: 0px 0px 0px;
      }
    }
  }
</style>