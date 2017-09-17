<template>
  <div class="swiper-slide">
    <div class="animate" ref="a1">
      <img src="~@/assets/f1.png" class="p1-img-1mtd p1-gen-40j0gwdanimation" id="f1">
      <img src="~@/assets/f2.png" class="p1-img-myq8 p1-gen-1rq6gwdanimation" id="f2">
      <img src="~@/assets/f3.png" class="p1-img-i36s p1-gen-9ja4gwdanimation" id="f3">
      <img src="~@/assets/f3.png" class="p1-img-1ift p1-gen-f654gwdanimation" id="f3_2">
      <img src="~@/assets/f3.png" class="p1-img-m1oa p1-gen-9zbygwdanimation" id="f3_3">
      <img src="~@/assets/f6.png" class="p1-img-4k5e p1-gen-1yp7gwdanimation" id="f6">
    </div>
  </div>
</template>

<script>
  import {TweenMax, Power2, TimelineMax} from "gsap"
  export default {
    data () {
      return {
      }
    },
    mounted () {
      window.v = this
      var tl = new TimelineMax({paused: true})
      this.timeline = tl
      // tl.add(TweenMax.fromTo(this.$el.children[0], 0.5, {rotation: -60, height: 150, width: 420, top: 20, left: -130, opacity: 0, scale: 0}, {opacity: 1, scale: 1}))
      // tl.add(TweenMax.fromTo(this.$el.children[1], 0.5, {rotation: -90, height: 600, width: 233, top: -340, left: 140, opacity: 0, scale: 0}, {opacity: 1, scale: 1, top: -210}), "-=0.3")
    },
    computed: {
      active () {
        return this.$store.state.pageIndex == 0
      }
    },
    watch: {
      active () {
        if(this.active){
          this.in()
        }else{
          this.out()
        }
      }
    },
    methods: {
      in () {
        this.$refs.a1.style.display = 'block'
        this.timeline.play()
      },
      out () {
        this.$refs.a1.style.display = 'none'
        this.timeline.progress(0).pause()
      }
    }
  }
</script>

<style lang="less" scoped>
.p1-img-myq8 {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-style: preserve-3d;
    width: 183px;
    height: 65.36px;
    pointer-events: auto;
    transform: translate3d(-88px, -37px, 0px) rotateZ(-47deg) scale3d(0.615612, 0.615612, 1);
    opacity: 0;
}
.p1-img-1mtd {
    position: absolute;
    left: 0px;
    transform-style: preserve-3d;
    transform: translate3d(154px, 0px, 0px) rotateZ(-90deg);
    top: -147px;
    opacity: 0;
    width: 89px;
    height: 229.36px;
}
@keyframes p1-gen-40j0gwdanimation_p1-keyframes {
    0% {
        transform: translate3d(154px, 0px, 0px) rotateZ(-90deg);
        top: -147px;
        width: 89px;
        height: 229.36px;
        opacity: 0;
        animation-timing-function: ease-out;
    }
    100% {
        transform: translate3d(119px, 57px, 0px) rotateZ(-90deg);
        top: -244px;
        width: 177px;
        height: 456.14px;
        opacity: 1;
        animation-timing-function: linear;
    }
}
.p1-gen-40j0gwdanimation {
    animation: p1-gen-40j0gwdanimation_p1-keyframes 0.498s linear 0s 1 normal forwards;
}
.p1-img-i36s {
    position: absolute;
    pointer-events: auto;
    left: 44px;
    top: -16px;
    width: 40px;
    height: 47px;
    transform-origin: 20.2437px 23.9651px 0px;
    opacity: 0;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
}
@keyframes p1-gen-1rq6gwdanimation_p1-keyframes {
    0% {
        transform: translate3d(-88px, -37px, 0px) rotateZ(-47deg) scale3d(0.615612, 0.615612, 1);
        opacity: 0;
        animation-timing-function: ease-out;
    }
    100% {
        transform: translate3d(-64px, 13px, 0px) rotateZ(-47deg) scale3d(1.77071, 1.77071, 1);
        opacity: 1;
        animation-timing-function: linear;
    }
}
.p1-gen-1rq6gwdanimation {
    animation: p1-gen-1rq6gwdanimation_p1-keyframes 0.773s linear 0.056s 1 normal forwards;
}
@keyframes p1-gen-9ja4gwdanimation_p1-keyframes {
    0% {
        opacity: 0;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
        animation-timing-function: cubic-bezier(0.25, 0.25, 0.395, 1.755);
    }
    100% {
        opacity: 0.99;
        transform: translate3d(34px, 40px, 0px) scale3d(2.6574, 2.6574, 1);
        animation-timing-function: linear;
    }
}
.p1-gen-9ja4gwdanimation {
    animation: p1-gen-9ja4gwdanimation_p1-keyframes 0.789s linear 0.118s 1 normal forwards;
}
.p1-img-4k5e {
    position: absolute;
    left: 127px;
    top: 650px;
    width: 158px;
    height: 95px;
    transform-origin: 78.897px 47.8174px 0px;
    opacity: 0;
    transform: scale3d(1, 1, 1);
    pointer-events: auto;
    transform-style: preserve-3d;
}
@keyframes p1-gen-1yp7gwdanimation_p1-keyframes {
    0% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
        opacity: 0;
        animation-timing-function: linear;
    }
    100% {
        transform: translate3d(16px, -35px, 0px) scale3d(2.77729, 2.77729, 1);
        opacity: 1;
        animation-timing-function: linear;
    }
}
.p1-gen-1yp7gwdanimation {
    animation: p1-gen-1yp7gwdanimation_p1-keyframes 0.88s linear 0s 1 normal forwards;
}
.p1-img-1ift {
    position: absolute;
    left: 34px;
    top: 209px;
    transform-style: preserve-3d;
    width: 115px;
    height: 136px;
    transform-origin: 57.5839px 68.1843px 0px;
    opacity: 0;
    transform: translate3d(69px, 343px, 0px) rotateZ(-195deg) scale3d(1, 1, 1);
}
@keyframes p1-gen-f654gwdanimation_p1-keyframes {
    0% {
        transform: translate3d(69px, 343px, 0px) rotateZ(-195deg) scale3d(1, 1, 1);
        opacity: 0;
        animation-timing-function: linear;
    }
    100% {
        transform: translate3d(-3.83551px, 333.059px, 0px) rotateZ(-195deg) scale3d(1.7761, 1.7761, 1);
        opacity: 1;
        animation-timing-function: linear;
    }
}
.p1-gen-f654gwdanimation {
    animation: p1-gen-f654gwdanimation_p1-keyframes 0.878s linear 0.116s 1 normal forwards;
}
.p1-img-m1oa {
    position: absolute;
    top: 483px;
    left: 293px;
    transform-style: preserve-3d;
    width: 66px;
    height: 78px;
    transform-origin: 32.7577px 38.8529px 0px;
    opacity: 0;
    transform: translate3d(-17px, 166px, 0px) rotateZ(-113deg) scale3d(1, 1, 1);
}
@keyframes p1-gen-9zbygwdanimation_p1-keyframes {
    0% {
        opacity: 0;
        transform: translate3d(-17px, 166px, 0px) rotateZ(-113deg) scale3d(1, 1, 1);
        animation-timing-function: linear;
    }
    100% {
        opacity: 1;
        transform: translate3d(15px, 69px, 0px) rotateZ(-113deg) scale3d(2.11125, 2.11125, 1);
        animation-timing-function: linear;
    }
}
.p1-gen-9zbygwdanimation {
    animation: p1-gen-9zbygwdanimation_p1-keyframes 0.902s linear 0.144s 1 normal forwards;
}
</style>