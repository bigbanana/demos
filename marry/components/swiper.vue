<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(page, index) in pages" class="swiper-slide">
        <page :data="page" :index="index"></page>
      </div>
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
        return this.$store.state.pages
      },
      pageIndex () {
        return this.$store.state.pageIndex
      }
    },
    mounted () {
      this.createSwiper()
    },
    methods: {
      createSwiper () {
        var $slides = $(this.$el).find('.swiper-slide')
        window.swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          // effect: 'flip'
        })
        swiper.on('slideChangeEnd', () => {
          $slides.eq(this.pageIndex).siblings().removeClass('active')
        })
        swiper.on('slideChangeStart', () => {
          this.$store.commit('pageIndex', swiper.realIndex)
          $slides.eq(this.pageIndex).addClass('active')
        })
        swiper.slideTo(this.pageIndex)
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
      &.active,&.swiper-slide-active{
        .item{
          display: block;
        }
      }
    }
    .item{
      position: absolute;
      display: none;
      .content{
        margin: 0; display: inline-block; vertical-align: top;
        width: 100%; height: 100%;
        box-sizing: border-box;
      }
    }
  }
</style>