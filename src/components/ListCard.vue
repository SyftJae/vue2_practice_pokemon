<template>
  <div>
    <h1>My team:</h1>
    <ul>
      <li v-for="pokemon in team" :key="pokemon.documentId">
        {{ pokemon.id }}
        {{ pokemon.name }}
        {{ pokemon.nickname }}
        <ul>
          <li v-for="type in pokemon.types" :key="type.type.name">
            {{ type.type.name }}
          </li>
        </ul>
        <button @click="$emit('removePokemonFromTeam', pokemon)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ListCard',
  props: {
    team: Array
  },
  data: () => ({})
}

</script>