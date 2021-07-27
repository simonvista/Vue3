<template>
  <div>
    <h1>App component</h1>
    <ul class="item" v-for="item in list" :key="item.id">
      <li>{{ item.id }}</li>
      <li>{{ item.email }}</li>
      <li>{{ item.first_name }}</li>
      <li><img :src="item.avatar" alt="" /></li>
    </ul>
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
      list: [],
    };
  },
  async mounted() {
    const res = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(res.data.data);
    this.list = res.data.data;
  },
};
</script>

<style></style>
