import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visitors: []
  },

  actions: {
    addVisitor ({commit}, visitor) {
      commit('ADD_VISITOR', visitor)
    },
    fetchVisitors ({commit}) {
      const visitors = JSON.parse(window.localStorage.getItem("visitors"))
      if (visitors && visitors.length > 0) {
        console.log("ici")
        for (let i=0; i < visitors.length; i++) {
          commit("ADD_VISITOR", visitors[i])
        }
      }
    },
    persistVisitors () {
      if (this.state.visitors.length > 0) {
        window.localStorage.setItem("visitors", JSON.stringify(this.state.visitors))
      }
    }
  },

  mutations: {
    ADD_VISITOR (state, visitor) {
      console.log("ADD")
      state.visitors.push(visitor)
      this.dispatch("persistVisitors")
    }
  },
});