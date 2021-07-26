<template>
  <h1>beforeCreated & created LCMs</h1>
</template>

<script>
export default {
  components: {},
  name: "Home",
  // 2nd call
  data() {
    console.warn("data was created");
    return {
      name: "Anil Sidhu",
    };
  },
  computed: {},
  methods: {},
  // 1st call
  beforeCreate() {
    console.warn("beforeCreate LCM was called");
    console.warn(this.name); // undefined
    this.name = "Peter Johnson";
    console.warn(this.name); // Peter Johnson
  },
  // 3rd call
  created() {
    console.warn("created LCM was called");
    console.warn(this.name); // Anil Sidhu
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
