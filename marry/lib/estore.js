import store from '@/lib/store'

store.registerModule('E', {
  state: {
    layerIndex: 0,
  },
  mutations: {
    layerIndex (state, payload) {
      state.layerIndex = payload
    }
  }
})

export default store
