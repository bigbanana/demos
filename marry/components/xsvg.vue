<template>
  <svg width="100%" height="100%" :viewBox="viewBox" preserveAspectRatio="none" v-html="html"></svg>
</template>
<script>
  export default {
    props: {
      src: String
    },
    data () {
      return {
        viewBox: '0 0 0 0',
        html: ''
      }
    },
    mounted () {
      if(this.src.length > 200) return false

      this.load()
    },
    methods: {
      load () {
        $.ajax({
          url: this.src,
          dataType: 'xml'
        }).done(res => {
          var svg = res.getElementsByTagName('svg')[0]
          this.viewBox = svg.getAttribute('viewBox')
          this.html = svg.innerHTML
        })
      }
    }
  }
</script>