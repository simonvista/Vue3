<template>
  <h1>beforeUpdated & Updated LCMs</h1>
  <h3 ref="count">{{ counter }}</h3>
  <button @click="counter = counter + 1">+</button>
</template>

<script>
export default {
  components: {},
  name: "Home",
  data() {
    return {
      counter: 0,
    };
  },
  computed: {},
  methods: {},
  beforeUpdate() {
    console.warn("beforeUpdate", this.counter); // 1
    console.warn("beforeUpdate", this.$refs["count"].textContent); // 0
  },
  updated() {
    console.warn("updated", this.counter); //1
    console.warn("updated", this.$refs["count"].textContent); //1
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
