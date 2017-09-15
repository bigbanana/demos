<template>
  <div class="swiper-container">
    <pages></pages>
  </div>
</template>

<script>
  import swiperCss from 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper/dist/js/swiper'
  var pages = []
  var context = require.context("@/pages", true, /\.vue$/)
  context.keys().forEach(key => {
    pages.push(context(key))
  })
  export default {
    data () {
      return {
        current: null
      }
    },
    components: {
      pages: {
        render (createElement) {
          return createElement('div', {'class': 'swiper-wrapper'}, pages.map(page => createElement(page)))
        }
      }
    },
    mounted () {
      this.current = 0
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical'
      })
      swiper.on('slideChangeEnd', () => {
        this.current = swiper.realIndex
      })
    },
    watch: {
      current () {
        window.app.$emit('current', this.current)
      }
    }
  }
</script>

<style lang="less">
  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
    .swiper-slide{
      width: 100%;
      height: 100%;
      position: relative;
      background-color: #fafafa;
      position: relative;
    }
    .item{
      position: absolute;
    }
    .text{
      position: absolute; z-index: 10; top: 0; left: 0; width: 100%; text-align: center;
      color: #fff; font-size: 100px; line-height: 300px;
    }
  }
</style>