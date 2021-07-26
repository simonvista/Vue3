<template>
  <!-- Non-Props data -->
  <h1 >user component</h1>
  <h3 :='$attrs'>Bruce</h3>
  <h3>Peter</h3>
  <h3>Tom</h3>
  <!-- Props data -->
  <!-- <h3>{{ name }}, {{ item }}</h3> -->
</template>

<script>
export default {
  name: "User",
  //   Props data
  props: {
    /* name: String,
    item: String, */
  },
};
</script>
