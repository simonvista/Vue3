<template>
  <h1>{{ name }} profile component</h1>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  components: {},
  name: "Profile",
  data() {
    return {
      name: "",
    };
  },
  computed: {},
  methods: {},
  mounted() {
    const route = useRoute();
    console.warn("route", route.params);
    this.name = route.params.name;
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
