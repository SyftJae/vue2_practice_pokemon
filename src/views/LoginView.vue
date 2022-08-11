<script>
import { ref } from 'vue'
import store from '../store'

export default {
  name: "LoginView",
  data: () => ({})
}

const loginInput = ref("")
</script>

<template>
<div>
  <h2>Login</h2>
  <form @submit.prevent ="store.user.login">
    <input v-model="loginInput" placeholder="Username"/>
    <button>Login</button>
  </form>
</div>
</template>