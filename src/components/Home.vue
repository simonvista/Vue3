<template>
  <Header />
  <h1>home page</h1>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: { Header },
  name: "Home",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
