<template>
  <div>
    <h1>Pokemon</h1>
    <SearchCard v-on:add-pokemon-to-team="(pokemon) => addPokemonToTeam(pokemon)"/>
    <ListCard v-on:remove-pokemon-from-team="(pokemon) => removePokemonFromTeam(pokemon)" :team="team"/>
  </div>
</template>

<script>
import { SearchCard, ListCard } from '../components'
import { teamFirestore } from '@/firebase/functions'

export default {
  name: "DashboardView",
  data: () => ({
    team: [],
  }),
  components: { SearchCard, ListCard },
  methods: {
    async addPokemonToTeam(pokemon) {
      if(this.team.length < 6) {
        let doc = await teamFirestore.addPokemonToTeam(pokemon)
        this.team.push({
          ...doc
        })
      }
    },

    async removePokemonFromTeam(pokemon) {
      await teamFirestore.removePokemonFromTeam(pokemon)
      this.team = this.team.filter((p) => {
        return p.docId != pokemon.docId
      })
    },     

    async getTeam() {
      let querySnapshot = await teamFirestore.getTeam()
      let temp = []
      querySnapshot.forEach((doc) => {
        temp.push({
          'docId': doc.id,
          ...doc.data()
        })
      })
      this.team = [...temp]
    }, 
  },
  mounted() {
    this.getTeam()
  }
}

</script>