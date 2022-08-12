import Vue from 'vue'
import Vuex from 'vuex'

import { teamFirestore } from '@/firebase/functions'
import { teamMutations } from './mutationTypes'

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
    [teamMutations.ADD_POKEMON_TO_TEAM](state, pokemon) {
      let temp = [...state.team]
      temp.push({
        ...pokemon
      })
      state.team = [...temp]
    },

    [teamMutations.REMOVE_POKEMON_FROM_TEAM](state, pokemon) {
      console.log(state.team)
      state.team = state.team.filter((p) => {
        return p.docId != pokemon.docId
      })
      console.log(state.team)
    },     

    [teamMutations.SET_TEAM](state, newTeam) {
      state.team = [...newTeam]
    },
  },
  actions: {
    async addPokemonToTeam({ commit, state }, pokemon) {
      if(state.team.length < 6) {
        let doc = await teamFirestore.addPokemonToTeam(pokemon)
        commit(teamMutations.ADD_POKEMON_TO_TEAM, doc)
      }
    },

    async removePokemonFromTeam({ commit }, pokemon) {
      await teamFirestore.removePokemonFromTeam(pokemon)
      commit(teamMutations.REMOVE_POKEMON_FROM_TEAM, pokemon)
    },
    
    async getTeam({ commit }) {
      let querySnapshot = await teamFirestore.getTeam()
      let team = []
      querySnapshot.forEach((doc) => {
        team.push({
          'docId': doc.id,
          ...doc.data()
        })
      })
      commit(teamMutations.SET_TEAM, team)
    },
  },
  modules: {
  }
})
