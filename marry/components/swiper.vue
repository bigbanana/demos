<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <page :data="page" v-for="page in pages"></page> -->
    </div>
  </div>
</template>

<script>
  import swiperCss from 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper/dist/js/swiper'
  export default {
    data () {
      return {
      }
    },
    computed: {
      pages () {
        debugger
        return this.$store.state.pages
      }
    },
    mounted () {
      this.current = 0
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical'
      })
      swiper.on('slideChangeEnd', () => {
        this.$store.commit('pageIndex', swiper.realIndex)
      })
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