<template>
<v-row justify="center">
  <v-card class="loginCard" outlined elevation="2">
    <v-card-title>Login</v-card-title>
    <form @submit.prevent ="login">
      <v-text-field v-model="usernameInput" placeholder="Username"/>
      <v-btn
        class="ma-2"
        :loading="loading"
        :disable="loading"
        color="secondary"
        @click="login()"
      >Login</v-btn>
    </form>
  </v-card>
</v-row>

</template>

<script>
import router from '@/router';

export default {
  name: "LoginView",
  data: () => ({
    usernameInput: "",
    loader: null,
    loading: false
  }),
  methods: {
    login() {
      this.loader="loading"
      console.log("login!")
      router.push('dashboard')
    },
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
  },
}

</script>

<style lang="scss" scoped>
  @import './LoginView.scss';
</style>

