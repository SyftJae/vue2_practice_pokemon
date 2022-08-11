<template>
  <div>
    <h2>Search Pokemon:</h2>
    <form @submit.prevent ="searchPokemonInput">
        <input v-model="searchPokemon" placeholder="Pokemon"/>
        <button>Search</button>
    </form>
    <form v-if="pokemon" @submit.prevent ="$emit('addPokemonToTeam', pokemon)">
      {{ pokemon.id }}
      {{ pokemon.name }}
      <button>Add to Team</button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: "SearchCard",
  data: () => ({})
}

const emits = defineEmits(['addPokemonToTeam'])

const url = 'https://pokeapi.co/api/v2/pokemon/'

const searchPokemon = ref('')
const pokemon = ref({})

async function fetchPokemon(search) {
  const res = await fetch(url + search)
  pokemon.value = await res.json()
}

async function searchPokemonInput() {
  if (searchPokemon.value) {
    await fetchPokemon(searchPokemon.value)
  }
}

onMounted(async () => {
  await fetchPokemon('1')
})
</script>