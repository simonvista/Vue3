<template>
  <div>
    <h1>Computed Property rather than template expression in data</h1>
    <!-- not cached -->
    <h2>{{ dollars * rupeeVal - discount }}</h2>
    <!-- computed property is cached -->
    <h2>{{ getRes }}</h2>
    <!-- method isn't cached -->
    <h2>{{ getData() }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      dollars: 100,
      rupeeVal: 70,
      discount: 10,
    };
  },
  props: {},
  methods: {
    getData() {
      return this.dollars * this.rupeeVal - this.discount;
    },
  },
  // computed property is cached
  computed: {
    getRes() {
      return this.dollars * this.rupeeVal - this.discount;
    },
  },
};
</script>
