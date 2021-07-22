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
      <td>actions</td>
    </tr>
    <!-- <tr v-for="item in restaurants" v-bind:key="item.id"> -->
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <!-- <router-link v-bind:to="'/update/' + item.id">update</router-link> -->
        <router-link :to="'/update/' + item.id">update</router-link>
        <button v-on:click="deleteResto(item.id)">delete</button>
      </td>
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
  methods: {
    async deleteResto(id) {
      console.warn("delete resto", id);
      const res = await axios.delete(`http://localhost:3000/restaurants/${id}`);
      console.warn(res);
      if (res.status === 200) {
        this.loadData();
      }
    },
    async loadData() {
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
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style>
