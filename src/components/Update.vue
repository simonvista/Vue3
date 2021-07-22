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
    <button type="submit" v-on:click="addRestaurant">
      update restaurant
    </button>
  </form>
</template>
<script>
import Header from "./Header.vue";
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
    updateRestaurant() {},
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
