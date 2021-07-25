<template>
  <h1>For Loop</h1>
  <ul>
    <li v-for="item in tech" :key="item.id">{{ item }}</li>
  </ul>
  <hr />
  <ul>
    <li v-for="user in users" :key="user.id">
      name: {{ user.name }}, email: {{ user.email }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tech: ["java", "php", "c#", "js"],
      users: [
        { name: "anil", email: "anil@test.com" },
        { name: "sam", email: "sam@test.com" },
        { name: "bob", email: "bob@test.com" },
      ],
    };
  },
  methods: {},
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
