<template>
  <div id="edit">
    <div v-for="(node, index) in nodes" :style="xstyle(node)" class="item" @click="handleLayerIndex(index)">
      <item :data="node"></item>
    </div>
    <vdr refs="vdr" @dragging="onDrag" @resizing="onResize"><div class="ph"></div></vdr>
  </div>
</template>

<script>
  import store from '@/lib/estore'
  export default {
    data () {
      return { }
    },
    computed: {
      size () {
        return {
          width: store.state.width+'px',
          height: store.state.height+'px'
        }
      },
      page () {
        return store.state.pages[store.state.pageIndex]
      },
      nodes () {
        return this.page ? this.page.nodes : []
      },
      active () {
        return this.nodes[store.state.layerIndex]
      }
    },
    methods: {
      xstyle (item) {
        if(!item) return {}
        return _.reduce(item.attributes.style, (res, value, key) => {
          if(/width|left/.test(key)){
            res[key] = parseInt(value)*store.state.xpro+'px'
          }else if(/height|top/.test(key)){
            res[key] = parseInt(value)*store.state.ypro+'px'
          }else if(/transform/.test(key)){
            res[key] = value
          }
          return res
        }, {})
      },
      handleLayerIndex (index) {
        store.commit('layerIndex', index)
      },
      onResize: function (x, y, width, height) {
        store.commit('vdr', {
          left: x+'px',
          top: y+'px',
          width: width+'px',
          height: height+'px'
        })
      },
      onDrag: function (x, y) {
        store.commit('vdr', {
          left: x+'px',
          top: y+'px'
        })
      }
    }
  }
</script>

<style lang="less">
  @import '~@/lib/edit.less';

  #edit{
    width: 414px;
    height: 736px;
    position: absolute; left: 50%; top: 50%; margin: -368px 0 0 -212px;
    background-color: @white;
    .item{
      position:absolute;
    }
    .ph{
      margin: 0;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
</style>
