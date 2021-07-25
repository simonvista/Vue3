<template>
  <h1>Html Binding (v-html)</h1>
  <div v-html="tag1"></div>
  <div v-html="tag2"></div>
  <hr />
  <div v-html="tag1 + tag2 + tag3"></div>
</template>

<script>
export default {
  components: {},
  name: "Home",
  data() {
    return {
      text: "anil sidhu",
      tag1: "<h2>Anil Sidhu</h2>",
      tag2: "<h2>Peter</h2>",
      tag3: "<h2>Bruce</h2>",
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
