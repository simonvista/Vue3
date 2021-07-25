<template>
  <h1>Pass dat from parent to child component</h1>
  <!-- pass String, Object, and Function to child from parent -->
  <Child :name="name" :data="user" :getData="getData" />
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },
  name: "Home",
  data() {
    return {
      name: "bruce",
      user: {
        name: "bob",
        email: "bob@test.com",
      },
    };
  },
  methods: {
    getData() {
      alert("getData() was triggered");
    },
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
