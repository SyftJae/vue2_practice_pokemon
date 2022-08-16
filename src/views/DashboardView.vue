<template>
  <v-container fluid class="fill-height">
    <v-row class="dashboard" justify="center">
      <v-col cols="8">
        <v-card class="dashboardCard">
          <SearchCard @add-pokemon-to-team="(pokemon) => addToTeam(pokemon)"/>
          <ListCard 
            @remove-pokemon-from-team="(pokemon) => removeFromTeam(pokemon)" 
            @undo-team-history="() => undoTeamHistory()"
            @redo-team-history="() => redoTeamHistory()"
            :team="team" 
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { SearchCard, ListCard } from '@/components'
import { mapActions, mapState } from 'vuex'
import { UndoRedo } from '@/components/mixins'

export default {
  name: "DashboardView",
  mixins: [UndoRedo],
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
    ]),

    addToTeam: async function(pokemon) {
      let self = this

      if (self.team.length < 6) {
        let newPokemon = await self.addPokemonToTeam(pokemon)

        self.addToHistory({
          action: "ADD",
          doc: newPokemon
        })
      }
    },

    removeFromTeam: function(pokemon) {
      let self = this

      self.removePokemonFromTeam(pokemon)

      self.addToHistory({
        action: "REMOVE",
        doc: pokemon
      })
    },

    updatePokemon: function(pokemon) {
      let self = this

      let newDoc = {}

      self.addToHistory({
        action: "UPDATE",
        prevDoc: pokemon,
        newDoc: newDoc
      })
    },

    undoTeamHistory: function() {
      let self = this
      let prevHistory = self.undoHistory()
      console.log(prevHistory)
      if (prevHistory) {
        if (prevHistory.action === "ADD") {
          self.removePokemonFromTeam(prevHistory.doc)
        } else if (prevHistory.action === "REMOVE") {
          self.addPokemonToTeam(prevHistory.doc)
        } else if (prevHistory.action === "UPDATE") {
          // self.updatePokemon(prevHistory.oldDoc)
        }
      }
    },

    redoTeamHistory: function() {
      let self = this

      let redoHistory = self.redoHistory()
      console.log(self.history)
      console.log(redoHistory)
      console.log(self.position)
      if (redoHistory) {
        if (redoHistory.action === "ADD") {
          self.addPokemonToTeam(redoHistory.doc)
        } else if (redoHistory.action === "REMOVE") {
          self.removePokemonFromTeam(redoHistory.doc)
        } else if (redoHistory.action === "UPDATE") {
          // self.updatePokemon(prevHistory.newDoc)
        }
      }
    }
  },
  mounted() {
    this.getTeam()
  }
}

</script>