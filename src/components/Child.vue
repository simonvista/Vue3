<template>
  <div>
    <h1>Slos (type of component)</h1>
    <h2>Child component</h2>
    <h3>{{ name }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    name: String,
  },
  data() {
    return {};
  },
  watch: {
    // method name must be the same as data name
  },
  methods: {},
  // computed property is cached
  computed: {},
};
</script>
