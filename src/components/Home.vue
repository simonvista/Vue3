<template>
  <h1>Home Component</h1>
  <!-- interpolation -->
  <h1>{{ 3 / 2 }}</h1>
  <h1>{{ "hello".length }}</h1>
  <h1>{{ email }}, {{ mobile }}</h1>
  <h1>{{ getName("anil sidhu") }}</h1>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      email: "anil@test.com",
      mobile: 12345,
      getName(val) {
        return val;
      },
    };
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
