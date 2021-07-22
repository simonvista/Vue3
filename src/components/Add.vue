<template>
  <Header />
  <h1>Add restaurant page</h1>
  <form class="add">
    <input
      type="text"
      v-model="restaurant.name"
      name="name"
      placeholder="name"
    />
    <input
      type="text"
      v-model="restaurant.address"
      name="address"
      placeholder="address"
    />
    <input
      type="text"
      v-model="restaurant.contact"
      name="contact"
      placeholder="contact"
    />
    <button type="submit" v-on:click="addRestaurant">add restaurant</button>
  </form>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  components: { Header },
  name: "Add",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant(e) {
      // current page will refresh after form is submitted by default
      e.preventDefault();
      console.warn(this.restaurant);
      const res = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      console.warn("res", res);
      if (res.status === 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
