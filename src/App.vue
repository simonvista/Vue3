<template>
  <div>
    <h1>Post API</h1>
    <input type="email" placeholder="email" v-model="email" /><br /><br />
    <input
      type="password"
      placeholder="password"
      v-model="password"
    /><br /><br />
    <button @click="onSubmit">submit</button>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      // console.warn(`${this.email}, ${this.password}`);
      const res = await axios.post("http://localhost:3000/user", {
        email: this.email,
        password: this.password,
      });
      console.warn(res);
    },
  },
};
</script>

<style></style>
