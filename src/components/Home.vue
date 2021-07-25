<template>
  <h1>
    Get input values through 2-way binding (bind value from view and model
    sides)
  </h1>
  <input type="email" placeholder="email" v-model="email" /><br /><br />
  <input
    type="password"
    placeholder="password"
    v-model="password"
  /><br /><br />
  <button type="button" v-on:click="getInputs">getInputs</button>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    getInputs() {
      console.warn(`${this.email}, ${this.password}`);
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
