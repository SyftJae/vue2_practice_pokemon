<template>
  <v-container fluid class="fill-height">
    <v-row class="dashboard" justify="center">
      <v-col cols="8">
        <v-card class="dashboardCard">
          <SearchCard v-on:add-pokemon-to-team="(pokemon) => addPokemonToTeam(pokemon)"/>
          <ListCard v-on:remove-pokemon-from-team="(pokemon) => removePokemonFromTeam(pokemon)" :team="team"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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