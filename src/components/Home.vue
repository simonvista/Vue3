<template>
  <h1>Pass dat from parent to child component</h1>
  <Child name="bruce" />
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
