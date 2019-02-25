import Vue from 'vue'
import Vuex from 'vuex'

import app from './_app'
import explorer from './explorer'

import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'moex-persist',
  storage: localStorage
})

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function ( /* { ssrContext } */ ) {
  const Store = new Vuex.Store({
    modules: {
      app,
      explorer
    },
    plugins: [vuexPersist.plugin]
  })
  return Store
}
