<template>
  <div>
    <h1>teacher component</h1>
    <h4>Hi {{ name }}</h4>
    <button v-on:click="sayHi">sayHi</button>
  </div>
</template>

<script>
export default {
  name: "Teacher",
  props: {
    name: String,
    sayHi: Function,
  },
};
</script>
