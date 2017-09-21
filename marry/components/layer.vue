<template>
  <div id="layer">
    <div v-for="item in layers" class="layer">
      <div class="layer-img" :style="size">
        <item :data="item" :animation="false"></item>
      </div>
      <div class="layer-text">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
  import store from '@/lib/store'

  export default {
    data () {
      return {}
    },
    computed: {
      size () {
        return {
          width: store.state.width+'px',
          height: store.state.height+'px'
        }
      },
      layers () {
        var page = store.state.pages[store.state.pageIndex]
        if(!page) return []
        return page.elements
      }
    }
  }
</script>

<style lang="less">
  @import '~@/lib/edit.less';
  @layerIh1: 40;
  @layerIh: @layerIh1+0px;
  @sc: @layerIh1/736;

  #layer{
    width: 300px; height: 400px;
    position: absolute; right: 0; bottom: 0;
    background-color: @pc; color: @white;
    overflow: auto;
    .layer{
      height: @layerIh; padding: 3px 6px; position: relative;
      border-top: 1px solid @pcd;
      &:first-child{
        border-top: none;
      }
      &:hover,&.active{
        background-color: @pch;
      }
    }
    .layer-img{
      transform: scale(@sc); transform-origin: 0px 0px 0px;
      background-color: #f0f0f0; position: relative; overflow:hidden;
    }
    .layer-text{
      position: absolute; left: 40px; top: (48px-14)*0.5;
      font-size: 14px; line-height: 1;
    }
  }
</style>