<template>
  <div>
    <h1>Pokemon</h1>
    <SearchCard v-on:add-pokemon-to-team="(pokemon) => addPokemonToTeam(pokemon)"/>
    <ListCard v-on:remove-pokemon-from-team="(pokemon) => removePokemonFromTeam(pokemon)" :team="team"/>
  </div>
</template>

<script>
import { SearchCard, ListCard } from '../components'
import { db } from '../firebase'
import { collection, addDoc, query, getDocs, deleteDoc, doc } from 'firebase/firestore'

export default {
  name: "DashboardView",
  data: () => ({
    team: [],
    teamRef: collection(db, 'team')
  }),
  components: { SearchCard, ListCard },
  methods: {
    async addPokemonToTeam(pokemon) {
      if(this.team.length < 6) {
        let relevantData = {
          id: pokemon.id,
          name: pokemon.name,
          nickname: "",
          types: pokemon.types,
        }
        let doc = await addDoc(this.teamRef, { ...relevantData })
        this.team.push({
          'documentId': doc.id,
          ...relevantData
        })
      }
    },
    async removePokemonFromTeam(pokemon) {
      this.team = this.team.filter((p) => {
        return p.documentId != pokemon.documentId
      })
      const pokeRef = doc(this.teamRef, pokemon.documentId)
      await deleteDoc(pokeRef)
    },     
    async getTeam() {
      let q = query(this.teamRef)
      const querySnapshot = await getDocs(q)
      let temp = []
      querySnapshot.forEach((doc) => {
        temp.push({
          'documentId': doc.id,
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