<script>
import { onMounted } from 'vue'
import store from '../store'

import { SearchCard, ListCard } from '../components'

export default {
    name: "DashboardView",
    data: () => ({}),
    components: { SearchCard, ListCard }
}

function debug(log) {
  console.log(log)
}

onMounted(() => {
  store.team.getTeam()
})
</script>

<template>
  <div>
    <h1>Pokemon</h1>
    <SearchCard @addPokemonToTeam="(pokemon) => store.team.addPokemonToTeam(pokemon)"/>
    <ListCard @removePokemonFromTeam="(pokemon) => store.team.removePokemonFromTeam(pokemon)" :team="store.team.value"/>
  </div>
</template>

