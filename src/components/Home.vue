<template>
  <h1>Ref for accessing DOM (Document Object Model)</h1>
  <input type="text" ref="input1" />
  <button v-on:click="changeDom">changeDom</button>
  <input type="text" ref="input2" />
  <button v-on:click="getInput">getInput</button>
</template>

<script>
export default {
  components: {},
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {
    changeDom() {
      this.$refs.input1.focus();
      this.$refs.input1.value = "code step by step";
      this.$refs.input1.style.color = "red";
    },
    getInput() {
      console.warn(this.$refs.input2.value);
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
