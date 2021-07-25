<template>
  <h1>Reuse Component</h1>

  <ul v-for="user in users" :key="user.id">
    <User :user="user" :getData="getData" />
  </ul>
</template>

<script>
import User from "./User.vue";

export default {
  components: { User },
  name: "Home",
  data() {
    return {
      users: [
        {
          name: "anil",
          email: "anil@test.com",
        },
        {
          name: "bob",
          email: "bob@test.com",
        },
        {
          name: "jack",
          email: "jack@test.com",
        },
      ],
    };
  },
  methods: {
    getData(user) {
      console.warn(`Hi ${user.name}, ${user.email}`);
    },
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
