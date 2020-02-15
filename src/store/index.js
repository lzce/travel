import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let localCity = ''
try {
  localCity = localStorage.getItem('city') || '上海'
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: localCity
  },
  mutations: {
    changeCity (state, payload) {
      state.city = payload.city
      localStorage.setItem('city', payload.city)
    }
  },
  actions: {
  },
  modules: {
  }
})
