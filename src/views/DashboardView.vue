<script>
import { SearchCard, ListCard } from '../components'
// import { db } from '../firebase'
// import { collection, addDoc, doc, deleteDoc, query, getDocs } from 'firebase/firestore'

export default {
  name: "DashboardView",
  data: () => ({
    team: [],
  }),
  components: { SearchCard, ListCard },
  methods: {
    async addPokemonToTeam(pokemon) {
      console.log(pokemon)
      if(this.team.length < 6) {
        let relevantData = {
          id: pokemon.id,
          name: pokemon.name,
          nickname: "",
          types: pokemon.types,
        }
        // let doc = await addDoc(teamRef, { ...relevantData })
        this.team.push({
          // 'documentId': doc.id,
          ...relevantData
        })
      }
    },
    async removePokemonFromTeam(pokemon) {
      this.team = this.team.filter((p) => {
        return p.documentId != pokemon.documentId
      })
      // const pokeRef = doc(db, "team", pokemon.documentId)
      // await deleteDoc(pokeRef)
    }
    
  }
}
// function debug(log) {
//   console.log(log)
// }

// onMounted(() => {
//   store.team.getTeam()
// })
</script>

<template>
  <div>
    <h1>Pokemon</h1>
    <SearchCard v-on:add-pokemon-to-team="(pokemon) => addPokemonToTeam(pokemon)"/>
    <ListCard v-on:remove-pokemon-from-team="(pokemon) => removePokemonFromTeam(pokemon)" :team="team"/>
  </div>
</template>

