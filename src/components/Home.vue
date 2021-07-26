<template>
  <h1>Dyanamic components</h1>
  <button v-on:click="loadJava">loadJava</button>
  <button v-on:click="loadNode">loadNode</button>
  <button v-on:click="loadPhp">loadPhp</button>
  <Java v-if="load_Java" />
  <Node v-if="load_Node" />
  <Php v-if="load_Php" />
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
      load_Java: false,
      load_Node: false,
      load_Php: false,
    };
  },
  computed: {},
  methods: {
    loadJava() {
      this.load_Java = true;
      this.load_Node = false;
      this.load_Php = false;
    },
    loadNode() {
      this.load_Java = false;
      this.load_Node = true;
      this.load_Php = false;
    },
    loadPhp() {
      this.load_Java = false;
      this.load_Node = false;
      this.load_Php = true;
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
