if(process.env.NODE_ENV == 'development'){
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  state: {
    inited: false,
    pageIndex: 10,
    layerIndex: 0,
    pages: [],
    xpro: 1,
    ypro: 1,
    width: 414,
    height: 736
  },
  mutations: {
    init (state, payload) {
      state.Xpro = payload.width/state.width
      state.Ypro = payload.height/state.height
      state.inited = true
      Object.assign(state, payload)
    },
    pageIndex (state, payload) {
      state.pageIndex = payload
    },
    layerIndex (state, payload) {
      state.layerIndex = payload
    },
    vdr (state, payload) {
      var node = state.pages[state.pageIndex].nodes[state.layerIndex]
      Object.assign(node.attributes.style, payload)
    }
  }
})

$.getJSON('./api/data.php').done(res => {
  var data
  data = res.result.content.match(/pagelists:\s*.*?(?=,\n)/)[0].replace(/pagelists:\s*/, '')
  data = $.parseJSON(data)
  data = data.map(page => {
    return {
      nodes: page.elements.map(item => {
        var innerText = item.content
        if(item.type == 's'){
          innerText = item.in.properties.str
        }
        return {
          nodeName: getNodeName(item),
          attributes: getAttributes(item),
          innerText: innerText,
        }
      })
    }
  })
  store.commit('init', {
    id: res.result.pid,
    width: 414,
    height: 736,
    pages: data
  })
})

function getStyle(item) {
  var xpro = 414/640
  var ypro = 736/1008
  var animation = item.anim.reduce((res, it, index) => {
    res.push([ it.type,
      it.duration+'s',
      it.delay+'s',
      it.count==-1?'infinite':it.count,
      index==0?'ease both':'normal'
    ].join(' '))
    return res
  }, []).join(',')
  var css = Object.assign({ animation: animation }, item.in.css, item.out.css)
  var res = Object.keys(css).reduce((res, it) => {
    if(!css[it]) return res
    if(/borderRadius|width|left|fontSize|borderWidth|padding/.test(it)){
      res[it] = parseInt(css[it])*xpro+'px'
    }else if(/(height|top)/.test(it)){
      res[it] = parseInt(css[it])*ypro+'px'
    }else{
      res[it] = css[it]
    }
    return res
  }, {})
  return res
}

function getNodeName(item) {
  var dict = {
    '4': 'img',
    '2': 'pre',
    'i': 'input',
    's': 'button',
    'phoneCallButton': 'a',
    'h': 'svg',
    'm': 'img'
  }
  return dict[item.type]
}

function getAttributes(item){
  var res = {
    name: '',
    style: getStyle(item),
    src: item.src.length < 200 ? item.src : ''
  }
  if(item.in.properties.colors && item.in.properties.colors.length>0){
    res.colors = Object.values(item.in.properties.colors).join(',')
  }
  if(item.in.properties.placeholder){
    res.placeholder =item.in.properties.placeholder
  }
  return res
}

if(process.env.NODE_ENV == 'development'){
  window.store = store
}
export default store
