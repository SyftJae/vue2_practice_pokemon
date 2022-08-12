<template>
<v-row justify="center">
  <v-card class="loginCard" outlined elevation="2">
    <v-card-title>Login</v-card-title>
    <form @submit.prevent ="login">
      <v-text-field v-model="usernameInput" placeholder="Username"/>
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

<style lang="scss" scoped>
  @import './LoginView.scss';
</style>

