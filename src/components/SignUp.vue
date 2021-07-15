<template>
  <img class="logo" src="../assets/resto-logo.jpg" alt="" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="name" />
    <input type="email" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="password" />
    <button v-on:click="signUp">sign up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      //   console.warn("signup", this.name, this.email, this.password);
      let res = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(res);
      if (res.status === 201) {
        // alert("signup was done");
        // save user data in local storage
        // input data was saves at res.data
        // res.data was saved at ChromeDevtools/Application/Storage/Local Storage/http://localhost:8080
        localStorage.setItem("user-info", JSON.stringify(res.data));
        // redirect to 'Home' route
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
