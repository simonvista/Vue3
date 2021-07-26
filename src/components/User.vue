<template>
  <h1 ref="unmount">user component</h1>
</template>

<script>
export default {
  name: "User",
  beforeUnmount() {
    console.warn("beforeUnmount", this.$refs["unmount"]); // beforeUnmount <h1...>user component</h1>
  },
  unmounted() {
    console.warn("unmounted", this.$refs["unmount"]); // unmounted null
  },
};
</script>
