<template>
  <h1>Pass data from child to parent component</h1>
  <h2>name: {{ name }}</h2>
  <User :getNameFromChild="getNameFromChild" />
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
      name: "",
    };
  },
  computed: {},
  methods: {
    getNameFromChild(name) {
      // alert(name);
      this.name = name;
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
