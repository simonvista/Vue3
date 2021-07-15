<template>
  <Header />
  <h1>home page</h1>
  <h2>Hi {{ name }}</h2>
  <table border="1">
    <tr>
      <td>id</td>
      <td>name</td>
      <td>contact</td>
      <td>address</td>
    </tr>
    <!-- <tr v-for="item in restaurants" v-bind:key="item.id"> -->
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  components: { Header },
  name: "Home",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    // console.warn(user);  //{name: "test", email: "test@test.com", password: "test@123", id: 4}
    // console.warn(typeof user);  //string
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let res = await axios.get("http://localhost:3000/restaurants");
    console.warn(res);
    this.restaurants = res.data;
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style>
