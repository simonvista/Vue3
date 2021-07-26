<template>
  <!-- values of item & name won't pass through div tag even no settings in Props b/c inheritAttrs:false -->
  <div>
    <!-- Non-Props data -->
    <h1 >user component</h1>
    <!-- values of item & name still pass through h3 tag even no settings in Props -->
    <!-- <h3 v-bind='$attrs'>Bruce</h3> -->
    <h3 :='$attrs'>Bruce</h3>
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
  // values of item & name won't pass through div tag
  inheritAttrs:false
};
</script>
