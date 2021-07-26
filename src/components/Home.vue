<template>
  <h1>beforeUnmounted & Unmounted LCMs</h1>
  <User v-if="show" />
  <button @click="show = !show">toggle user</button>
</template>

<script>
import User from "./User.vue";

export default {
  components: {
    User,
  },
  name: "Home",
  data() {
    return {
      show: true,
    };
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
