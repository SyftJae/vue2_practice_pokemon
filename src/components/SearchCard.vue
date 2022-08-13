<template>
  <v-row>
    <v-col>
      <h2>Search Pokemon:</h2>
      <form @submit.prevent="searchPokemon(searchPokemonInput)">
          <input v-model="searchPokemonInput" placeholder="Pokemon"/>
          <button>Search</button>
      </form>
      <form v-if="Object.keys(pokemon).length !== 0">
        <v-row justify="center">
          <v-col cols="auto">
            <v-img 
              alt="Pokemon Sprite Front Default"
              contain
              :src="pokemon.sprites.front_default"
              class="shrink mr-2"
              width="300"
              transition="scale-transition"
            />
            {{ pokemon.id }}
            {{ pokemon.name }}
            <v-btn @click="$emit('add-pokemon-to-team', pokemon)">Add to Team</v-btn> 
          </v-col>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: "SearchCard",
  data: () => ({
      pokemon: {},
      searchPokemonInput: "",
      pokeUrl: 'https://pokeapi.co/api/v2/pokemon/',
  }),
  methods: {
    async searchPokemon(query) {
      if (query) {
        const res = await fetch(this.pokeUrl + query)
        this.pokemon = await res.json()
      }
    },
    debug(x) {
      console.log(x)
    },
  },

  mounted() {
    this.searchPokemon(1)
  }
} 
</script>