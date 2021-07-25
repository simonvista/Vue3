<template>
  <div>
    <h1>Child component</h1>
    <p>{{ name }}</p>
    <p>{{ data.name }}, {{ data.email }}</p>
    <button v-on:click="getData">getData</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    //   data type must be claimed below
    name: String,
    data: Object,
    getData: Function,
  },
};
</script>
