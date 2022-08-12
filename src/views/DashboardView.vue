<template>
  <div>
    <h1>Pokemon</h1>
    <SearchCard v-on:add-pokemon-to-team="(pokemon) => addPokemonToTeam(pokemon)"/>
    <ListCard v-on:remove-pokemon-from-team="(pokemon) => removePokemonFromTeam(pokemon)" :team="team"/>
  </div>
</template>

<script>
import { SearchCard, ListCard } from '../components'
import { mapActions, mapState } from 'vuex'

export default {
  name: "DashboardView",
  data: () => ({}),
  components: { SearchCard, ListCard },
  computed: mapState({
    team: (state) => state.team,
  }),
  methods: {
    ...mapActions([
      'addPokemonToTeam',
      'removePokemonFromTeam',
      'getTeam'
    ])
  },
  mounted() {
    this.getTeam()
  }
}

</script>