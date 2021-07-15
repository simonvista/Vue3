<template>
  <img class="logo" src="../assets/resto-logo.jpg" alt="" />
  <h1>Login</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="password" />
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      //   console.warn(this.email, this.password);
      let res = await axios.get(
        `http://localhost:3000/users/?email=${this.email}&password=${this.password}`
      );
      console.warn(res.data[0]);
      if (res.data.length > 0 && res.status === 200) {
        localStorage.setItem("user-info", JSON.stringify(res.data[0]));
        // console.warn(localStorage.getItem("user-info"));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    if (localStorage.getItem("user-info")) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
