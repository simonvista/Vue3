<template>
  <div>
    <h1>App component</h1>
    <router-link to="/">home page</router-link><br /><br />
    <router-link to="/login">login page</router-link><br /><br />
    <router-link to="/profile/peter">peter's profile page</router-link
    ><br /><br />
    <router-link to="/profile/bruce">bruce's profile page</router-link
    ><br /><br />
    <router-link to="/profile/anil">anil's profile page</router-link
    ><br /><br />

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
