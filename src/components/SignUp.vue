<template>
  <img class="logo" src="../assets/resto-logo.jpg" alt="" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="name" />
    <input type="email" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="password" />
    <button v-on:click="signUp">sign up</button>
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
};
</script>

<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  border: 1px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>
