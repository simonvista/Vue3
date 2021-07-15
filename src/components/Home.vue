<template>
  <Header />
  <h1>home page</h1>
  <h2>Hi {{ name }}</h2>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: { Header },
  name: "Home",
  data() {
    return {
      name: "",
    };
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    // console.warn(user);  //{name: "test", email: "test@test.com", password: "test@123", id: 4}
    // console.warn(typeof user);  //string
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
