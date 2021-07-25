<template>
  <div>
    <h1>student component</h1>
    <h4>Hi {{ name }}</h4>
    <h4>{{ user }}</h4>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    name: String,
    user: Object,
  },
};
</script>
