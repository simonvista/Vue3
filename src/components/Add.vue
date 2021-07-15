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
    addRestaurant(e) {
      // current page will refresh after form is submitted by default
      e.preventDefault();
      console.warn(this.restaurant);
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
