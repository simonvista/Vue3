<template>
  <img class="logo" src="../assets/resto-logo.jpg" alt="" />
  <h1>Login</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="password" />
    <button>Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
