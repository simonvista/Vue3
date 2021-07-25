<template>
  <div>
    <li>{{ user.name }}</li>
    <li>{{ user.email }}</li>
    <button v-on:click="getData">alert user name</button>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    //   data type must be claimed below
    user: Object,
  },
  methods: {
    getData() {
      // console.warn(this.user);
      console.warn(`Hi ${this.user.name}, ${this.user.email}`);
    },
  },
};
</script>
