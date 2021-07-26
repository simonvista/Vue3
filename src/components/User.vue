<template>
  <div>
    <h1>user component</h1>
    <button v-on:click="getNameFromChild(name)">
      send name from child to parent
    </button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    getNameFromChild: Function,
  },
  data() {
    return {
      name: "peter",
    };
  },
  methods: {},
};
</script>
