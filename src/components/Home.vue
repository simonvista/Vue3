<template>
  <Child name="Anil" />
  <Child name="Sam" />
  <Child name="Tom" />
  <hr />
  <!-- slot is the passed between child open & close tags -->
  <Child><h1>Default Value</h1></Child>
  <!-- <h1>code step by step</h1> is the slot passed to child component-->
  <Child><h1>code step by step</h1></Child>
  <!-- pass <h2>Anil Sidhu</h2> as slot to child component -->
  <Child><h2>Anil Sidhu</h2></Child>
  <!-- pass img as slot to child component -->
  <Child><img src="../assets/logo.png" alt=""/></Child>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    Child,
  },
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
