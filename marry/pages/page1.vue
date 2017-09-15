<template>
  <div class="swiper-slide">
    <img class="item" src="~@/assets/images/f2.png">
    <img class="item" src="~@/assets/images/f1.png">
  </div>
</template>

<script>
  import {TweenMax, Power2, TimelineMax} from "gsap"
  export default {
    data () {
      return {
      }
    },
    created () {
      window.app.$on('current', current => {
        if(current == 0){
          this.in()
        }else{
          this.out()
        }
      })
    },
    mounted () {
      window.v = this
      var tl = new TimelineMax({paused: true})
      this.timeline = tl
      tl.add(TweenMax.fromTo(this.$el.children[0], 0.5, {rotation: -60, height: 150, width: 420, top: 20, left: -130, opacity: 0, scale: 0}, {opacity: 1, scale: 1}))
      tl.add(TweenMax.fromTo(this.$el.children[1], 0.5, {rotation: -90, height: 600, width: 233, top: -210, left: 140, opacity: 0, scale: 0}, {opacity: 1, scale: 1}), "-=0.3")
    },
    methods: {
      in () {
        this.timeline.restart()
      },
      out () {

      }
    }
  }
</script>