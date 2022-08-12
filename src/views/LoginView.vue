<template>
<v-row justify="center">
  <v-card outlined elevation="2" max-height="35%" max-width="30%">
    <v-card-title>Login</v-card-title>
    <form @submit.prevent ="login">
      <input v-model="usernameInput" placeholder="Username"/>
      <v-card-actions>Login</v-card-actions>
    </form>
  </v-card>
</v-row>

</template>

<script>
import router from '@/router';

export default {
  name: "LoginView",
  data: () => ({
    usernameInput: ""
  }),
  methods: {
    login() {
      console.log("login!")
      router.push('dashboard')
    },
  },
}

</script>