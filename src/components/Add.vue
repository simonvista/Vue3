<template>
  <Header />
  <h1>Add page</h1>
  <h2></h2>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: { Header },
  name: "Add",

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
