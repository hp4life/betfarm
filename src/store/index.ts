import Vue from 'vue'
import Vuex from 'vuex'
import football from './modules/football.store'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    football
  }
})
