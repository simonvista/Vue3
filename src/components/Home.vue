<template>
  <h1>2-way binding (bind value from view and model sides)</h1>
  <input type="text" v-model="data" />
  <h2>{{ data }}</h2>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      data: 10,
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
