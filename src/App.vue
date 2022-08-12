<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Pokemon Logo"
          class="shrink mr-2"
          contain
          src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://pokeapi.co/?ref=public-apis"
        target="_blank"
        text
      >
        <span class="mr-2">Pokemon API</span>
        <v-icon>mdi-alert</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
