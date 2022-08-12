<template>
  <div>
    <h1>My team:</h1>
    <ul>
      <li v-for="pokemon in team" v-bind:key="pokemon.docId">
        {{ pokemon.id }}
        {{ pokemon.name }}
        {{ pokemon.nickname }}
        <ul>
          <li v-for="type in pokemon.types" v-bind:key="type.type.name">
            {{ type.type.name }}
          </li>
        </ul>
        <button @click="$emit('remove-pokemon-from-team', pokemon)">X</button>
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