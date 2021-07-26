<template>
  <div>
    <h1>Watchers (Data Observer)</h1>
    <h2>{{ count }}</h2>
    <button v-on:click="count = count + 1">+</button>
    <button v-on:click="count = count - 1">-</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    // count must be the same as data
    count(curVal, preVal) {
      console.warn(curVal, preVal);
      if (curVal > 5 && curVal > preVal) {
        this.count = 0;
        alert("stop increasing count");
      }
    },
  },
  props: {},
  methods: {},
  // computed property is cached
  computed: {},
};
</script>
