<template>
  <h1>Teleport components</h1>

  <teleport to="#footer">
    <Footer />
  </teleport>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  components: {
    Footer,
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
