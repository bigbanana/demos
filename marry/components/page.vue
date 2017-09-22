<template>
  <div class="page">
    <div class="item" v-for="item in data.nodes" :style="xstyle(item)">
      <item :data="item"></item>
    </div>
  </div>
</template>

<script>
  import store from '@/lib/store'
  export default {
    props: {
      data: Object
    },
    data () {
      return {
      }
    },
    methods: {
      xstyle (item) {
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
      }
    }
  }
</script>

<style lang="less">
.page{
  .item{
    position: absolute;
  }
}
</style>