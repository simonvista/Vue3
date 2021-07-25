<template>
  <div>
    <h1>Child component</h1>
    <p>{{ name }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    name,
  },
};
</script>
