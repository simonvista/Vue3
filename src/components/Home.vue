<template>
  <h1>Dyanamic components</h1>
  <button @click="tab = 'Java'">loadJava</button>
  <button @click="tab = 'Node'">loadNode</button>
  <button @click="tab = 'Php'">loadPhp</button>
  <component :is="tab" />
</template>

<script>
import Java from "./Java.vue";
import Node from "./Node.vue";
import Php from "./Php.vue";

export default {
  components: {
    Java,
    Node,
    Php,
  },
  name: "Home",
  data() {
    return {
      tab: "Java",
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
