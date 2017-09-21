<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(page, index) in pages" class="swiper-slide">
        <page :data="page"></page>
      </div>
    </div>
  </div>
</template>

<script>
  import swiperCss from 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper/dist/js/swiper'
  import store from '@/lib/store'
  export default {
    data () {
      return {
      }
    },
    computed: {
      pages () {
        return store.state.pages
      },
      pageIndex () {
        return store.state.pageIndex
      }
    },
    mounted () {
      this.createSwiper()
    },
    watch: {
      pageIndex () {
        if(!this.swiper) return
        if(this.pageIndex != this.swiper.realIndex){
          this.swiper.slideTo(this.pageIndex)
        }
      }
    },
    methods: {
      createSwiper () {
        var $slides = $(this.$el).find('.swiper-slide')
        var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          // effect: 'flip'
        })
        this.swiper = swiper
        swiper.on('slideChangeEnd', () => {
          $slides.eq(this.pageIndex).siblings().removeClass('active')
        })
        swiper.on('slideChangeStart', () => {
          store.commit('pageIndex', swiper.realIndex)
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
      display: none;
    }
  }
</style>