<template>
  <Header />
  <h1>Update page</h1>
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
    <button type="submit" v-on:click="updateRestaurant">
      update restaurant
    </button>
  </form>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  components: { Header },
  name: "Update",
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
    async updateRestaurant(e) {
      /* e.preventDefault();
      console.warn("res", this.restaurant); */
      // current page will refresh after form is submitted by default
      e.preventDefault();
      console.warn(this.restaurant);
      const id = this.$route.params.id;
      const res = await axios.put(`http://localhost:3000/restaurants/${id}`, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      console.warn("res", res);
      if (res.status === 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    // retrieve id from path: "/update/:id"
    const id = this.$route.params.id;
    console.warn(id);
    const res = await axios.get(`http://localhost:3000/restaurants/${id}`);
    console.warn(res.data);
    this.restaurant = res.data;
  },
};
</script>
