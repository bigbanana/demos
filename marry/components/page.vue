<template>
  <div class="page">
    <div class="item" :style="outStyle(item)" v-for="item in data.elements">
      <img v-if="item.type == 4" class="content" :style="inStyle(item)" :src="item.src | img">
      <pre v-if="item.type == 2" class="content" :style="inStyle(item)" v-html="item.content"></pre>
      <input v-if="item.type == 'i'" class="content" :style="inStyle(item)" :placeholder="item.in.properties.placeholder" >
      <button v-if="item.type == 's'" class="content" :style="inStyle(item)">{{ item.in.properties.str }}</button>
      <a v-if="item.type == 'phoneCallButton'" class="content" :style="inStyle(item)" :href="'tel://'+item.in.properties.tel">{{ item.content }}</a>
      <xsvg v-if="item.type == 'h'" class="content" :style="inStyle(item)" :src="item.src | img"></xsvg>
      <img v-if="item.type == 'm'" class="content" :style="inStyle(item)" :src="'http://api.map.baidu.com/staticimage/v2?ak=WtfAdHwd1tMOCf2dzdRIhNZkSq8V7o5W&width='+item.out.css.width*Xpro+'&height='+(item.out.css.height*Ypro)+'&dpiType=ph&markers='+item.in.properties.lng+','+item.in.properties.lat+'&markerStyles=l,,0xff0000&center='+item.in.properties.lng+','+item.in.properties.lat+'&labels='+item.in.properties.lng+','+item.in.properties.lat+'&zoom=17&labelStyles=我在这,1,'+(28*Xpro)+',0xffffff,0x1abd9b,1'" />

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
      index: Number
    },
    data () {
      return {
      }
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
        return value.replace(/^.*res\.yaoyue365\.com/, '/assets')
      }
    },
    methods: {
      style (item) {
        var animation = item.anim.reduce((res, it, index) => {
          res.push([
            it.type,
            it.duration+'s',
            it.delay+'s',
            it.count==-1?'infinite':it.count,
            index==0?'ease both':'normal'
          ].join(' '))
          return res
        }, []).join(',')
        var css = Object.assign({
          animation: animation
        }, item.in.css, item.out.css)
        var res = Object.keys(css).reduce((res, it) => {
          if(/(borderRadius|width|left|fontSize|borderWidth|padding)/.test(it)){
            res[it] = parseInt(css[it])*this.Xpro+'px'
          }else if(/(height|top)/.test(it)){
            res[it] = parseInt(css[it])*this.Ypro+'px'
          }else{
            res[it] = css[it]
          }
          return res
        }, {})
        return res
      },
      outStyle (item) {
        var style = this.style(item)
        return Object.keys(style)
          .filter(it => /(top|left|height|width|transform|opacity)/.test(it))
          .reduce((res,it) => {
            res[it] = style[it]
            return res
          }, {})
      },
      inStyle (item) {
        var style = this.style(item)
        return Object.keys(style)
          .filter(item => !/(top|left|height|width|transform|opacity)/.test(item))
          .reduce((res,it) => {
            res[it] = style[it]
            return res
          }, {})
      }
    }
  }
</script>

<style lang="less">
</style>