<template>
  <div>
    <h1>App component</h1>
    <router-link to="Home">home page</router-link><br /><br />
    <router-link to="Profile">profile page</router-link><br /><br />
    <router-link to="Login">login page</router-link><br /><br />

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
