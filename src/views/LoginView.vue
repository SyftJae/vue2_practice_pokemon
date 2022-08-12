<template>
<div>
  <h2>Login</h2>
  <form @submit.prevent ="login">
    <input v-model="usernameInput" placeholder="Username"/>
    <button>Login</button>
  </form>
</div>
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