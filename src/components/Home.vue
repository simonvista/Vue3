<template>
  <h1>Method w/ parameters</h1>
  <!-- interpolation -->
  <h1>{{ email }}, {{ mobile }}</h1>
  <h1>{{ getName("Anil Sidhu") }}</h1>
  <h1>{{ getData() }}</h1>
  <h1>{{ getData().name }}, {{ getData().email }}</h1>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      email: "anil@test.com",
    };
  },
  methods: {
    getName(val) {
      return val;
    },
    getData() {
      return {
        name: "anil",
        email: this.email,
      };
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
