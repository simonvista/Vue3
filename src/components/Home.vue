<template>
  <h1>Conditon</h1>
  <h4 v-if="show">Show is true</h4>
  <h4 v-else>Show is off</h4>
  <button v-on:click="show = !show">toggle show</button>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false,
    };
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
