<template>
  <div class="page">
    <item v-for="item in data.elements" :data="item"></item>
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
    }
  }
</script>

<style lang="less">
.page{
}
</style>