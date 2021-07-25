<template>
  <div>
    <li>{{ user.name }}</li>
    <li>{{ user.email }}</li>
    <button v-on:click="getData(user)">alert user name</button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    //   data type must be claimed below
    user: Object,
    getData: Function,
  },
  methods: {},
};
</script>
