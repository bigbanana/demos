<template>
  <div class="page">
    <template v-for="item in data.elements">
      <img class="item" :style="style(item)" v-if="item.type == 4" :src="item.src | img">
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object
    },
    computed: {
      Xpro () {
        return this.$store.state.Xpro
      },
      Ypro () {
        return this.$store.state.Ypro
      }
    },
    filters: {
      img (value) {
        return value.replace('res.yaoyue365.com', 'localhost/qinjian/assets')
      }
    },
    mounted () {
      console.log(this.data)
    },
    methods: {
      style (item) {
        var res = Object.keys(item.out.css).reduce((res, it) => {
          if(/(borderRadius|width|left)/.test(it)){
            res[it] = parseInt(item.out.css[it])*this.Xpro+'px'
          }else if(/(height|top)/.test(it)){
            res[it] = parseInt(item.out.css[it])*this.Ypro+'px'
          }else{
            res[it] = item.out.css[it]
          }
          return res
        }, {})
        return res
      }
    }
  }
</script>

<style lang="less">
</style>