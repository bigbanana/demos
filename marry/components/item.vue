<template>
  <div class="item" :style="outStyle(data)">
    <img v-if="data.type == 4" class="content" :style="inStyle(data)" :src="data.src | img">
    <pre v-if="data.type == 2" class="content" :style="inStyle(data)" v-html="data.content"></pre>
    <input v-if="data.type == 'i'" class="content" :style="inStyle(data)" :placeholder="data.in.properties.placeholder" >
    <button v-if="data.type == 's'" class="content" :style="inStyle(data)">{{ data.in.properties.str }}</button>
    <a v-if="data.type == 'phoneCallButton'" class="content" :style="inStyle(data)" :href="'tel://'+data.in.properties.tel">{{ data.content }}</a>
    <xsvg v-if="data.type == 'h'" class="content" :style="inStyle(data)" :src="data.src | img"></xsvg>
    <img v-if="data.type == 'm'" class="content" :style="inStyle(data)" :src="'http://api.map.baidu.com/staticimage/v2?ak=WtfAdHwd1tMOCf2dzdRIhNZkSq8V7o5W&width='+data.out.css.width*xpro+'&height='+(data.out.css.height*ypro)+'&dpiType=ph&markers='+data.in.properties.lng+','+data.in.properties.lat+'&markerStyles=l,,0xff0000&center='+data.in.properties.lng+','+data.in.properties.lat+'&labels='+data.in.properties.lng+','+data.in.properties.lat+'&zoom=17&labelStyles=我在这,1,'+(28*xpro)+',0xffffff,0x1abd9b,1'" />
  </div>
</template>
<script>
  import store from '@/lib/store'

  export default {
    props: {
      data: Object,
      animation: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {}
    },
    computed: {
      xpro () {
        return store.state.Xpro
      },
      ypro () {
        return store.state.Ypro
      }
    },
    filters: {
      img (value) {
        return value.replace(/^.*res\.yaoyue365\.com/, '/assets')
      }
    },
    methods: {
      style (item) {
        var css = Object.assign({}, item.in.css, item.out.css)
        var res = Object.keys(css).reduce((res, it) => {
          if(/(borderRadius|width|left|fontSize|borderWidth|padding)/.test(it)){
            res[it] = parseInt(css[it])*this.xpro+'px'
          }else if(/(height|top)/.test(it)){
            res[it] = parseInt(css[it])*this.ypro+'px'
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
        if(this.animation){
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
          Object.assign(style, { animation: animation })
        }
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

<style lang="less" scoped>
  .item{
    position: absolute;
    .content{
      margin: 0; display: inline-block; vertical-align: top;
      width: 100%; height: 100%;
      box-sizing: border-box;
    }
  }
</style>