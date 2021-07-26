<template>
  <h1 id="header">beforeMounted & Mounted LCMs</h1>
</template>

<script>
export default {
  components: {},
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  beforeMount() {
    console.warn("beforeMount", this.$el); // null
    console.warn(document.getElementById("header")); // null
  },
  // earliest time to access template
  mounted() {
    console.warn("mounted", this.$el); // <h1...>beforeMounted & Mounted LCMs</h1>
    console.warn(document.getElementById("header")); // <h1...>beforeMounted & Mounted LCMs</h1>
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
