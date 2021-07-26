<template>
  <Child>
    <template v-slot:header>
      <h1>Peter</h1>
    </template>
    <template v-slot:body>
      <p>code step by step</p>
    </template>
    <template v-slot:footer>
      <button>order</button>
    </template>
  </Child>
  <Child>
    <template v-slot:header>
      <h1>Anil</h1>
    </template>
    <template v-slot:body>
      <p>code step by step</p>
    </template>
    <template v-slot:footer>
      <button>order</button>
    </template>
  </Child>
  <Child>
    <template v-slot:header>
      <h1>Tom</h1>
    </template>
    <template v-slot:body>
      <p>code step by step</p>
    </template>
    <template v-slot:footer>
      <button>order</button>
    </template>
  </Child>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    Child,
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
