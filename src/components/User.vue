<template>
  <!-- values of item & name still pass through div tag even no settings in Props -->
  <div>
    <!-- Non-Props data -->
    <h1 v-bind="$attrs">user component</h1>
    <h3>Bruce</h3>
    <h3>Peter</h3>
    <h3>Tom</h3>
    <!-- Props data -->
    <!-- <h3>{{ name }}, {{ item }}</h3> -->
  </div>
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
