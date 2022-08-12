import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultState = () => {
  return {
    team: [],
  }
}

export default new Vuex.Store({
  state: defaultState(),
  getters: {
  },
  mutations: {
    addPokemonToTeam(state, pokemon) {
      if(state.team.length < 6) {
        let relevantData = {
          docId: pokemon.docId,
          id: pokemon.id,
          name: pokemon.name,
          nickname: "",
          types: pokemon.types,
        }
        let temp = [...state.team]
        temp.push({
          ...relevantData
        })
        state.team = [...temp]
      }
    },
    removePokemonFromTeam(state, pokemon) {
      state.team = state.team.filter((p) => {
        return p.documentId != pokemon.documentId
      })
    },     
    setTeam(state, newTeam) {
      state.team = [...newTeam]
    }
  },
  actions: {
  },
  modules: {
  }
})
