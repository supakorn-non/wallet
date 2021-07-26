import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data:[],
      balance: 0
  },
  getters:{
      wallets:(state) => state.data,
      balance:(state) => state.balance
  },
  mutations: {
      fetch(state, {res}) {
          state.data = res.data
          for (let transaction of res.data) {
                state.balance += transaction.amounts
          }
          console.log(state.balance);
      },
      add(state, {payload}){
          state.data.push(payload)
          state.balance += parseInt(payload.amounts)
      }
  },
  actions: {
    fetchWallet({commit}) {
        let res = {
            data:[]
        }
        commit("fetch", {res})
    },
    addTransacsion({commit}, payload) {
        commit('add', {payload})
    }
  },
  modules: {
  }
})
