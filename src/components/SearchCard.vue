<template>
  <div>
    <h2>Search Pokemon:</h2>
    <form @submit.prevent="searchPokemon(searchPokemonInput)">
        <input v-model="searchPokemonInput" placeholder="Pokemon"/>
        <button>Search</button>
    </form>
    <form v-if="pokemon" @submit.prevent="$emit('add-pokemon-to-team', pokemon)">
      {{ pokemon.id }}
      {{ pokemon.name }}
      <button>Add to Team</button>
    </form>
  </div>
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
    }
  },

  mounted() {
    this.searchPokemon(1)
  }
} 
</script>