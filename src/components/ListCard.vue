<template>
  <div>
    <h1>My team:</h1>
    <button @click="$emit('undo-team-history')">
      <v-icon>mdi-undo</v-icon>
    </button>
    <button @click="$emit('redo-team-history')">
      <v-icon>mdi-redo</v-icon>
    </button>
    <ul>
      <v-list v-for="pokemon in team" v-bind:key="pokemon.docId">
        <v-row>
          <v-img 
            alt="Pokemon Sprite Front Default"
            contain
            :src="pokemon.sprites.front_default"
            class="shrink mr-2"
            width="100"
            transition="scale-transition"
          />
          {{ pokemon.id }}
          {{ pokemon.name }}
          {{ pokemon.nickname }}
          <ul>
            <li v-for="type in pokemon.types" v-bind:key="type.type.name">
              {{ type.type.name }}
            </li>
          </ul>
          <button @click="$emit('remove-pokemon-from-team', pokemon)">
            <v-icon>mdi-close-thick</v-icon>
          </button>
        </v-row>
      </v-list>
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