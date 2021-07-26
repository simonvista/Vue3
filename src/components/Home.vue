<template>
  <h1>Non-Props Data</h1>
  <user item="my data" name="my name" />
</template>

<script>
import User from "./User.vue";

export default {
  components: {
    User,
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
