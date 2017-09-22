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
    render (c) {
      var opt = {
        class: 'content',
        style: this.xstyle,
        attrs: {},
        domProps: {}
      }
      if(this.data.attributes.name){
        opt.attrs.name = this.data.attributes.name
      }
      if(this.data.nodeName == 'img'){
        opt.attrs.src = this.data.attributes.src
      }
      if(this.data.nodeName == 'input'){
        opt.attrs.placeholder = this.data.attributes.placeholder
      }
      if(/pre|button/.test(this.data.nodeName)){
        opt.domProps.innerText = this.data.innerText
      }
      return c(this.data.nodeName, opt)
    },
    data () {
      return {}
    },
    computed: {
      xstyle () {
        return _.reduce(this.data.attributes.style, (res, value, key) => {
          if(/borderRadius|fontSize|borderWidth|padding/.test(key)){
            res[key] = parseInt(value)*store.state.xpro+'px'
          }else if(/height|width|top|left|transform/.test(key)){
            // res[key] = parseInt(value)*store.state.ypro+'px'
          }else{
            res[key] = value
          }
          return res
        }, {})
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
  .content{
    margin: 0; display: inline-block; vertical-align: top;
    width: 100%; height: 100%;
    box-sizing: border-box;
  }
</style>