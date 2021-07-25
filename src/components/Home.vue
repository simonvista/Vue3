<template>
  <h1>Pass data through props</h1>
  <student name="anil" :user="user" />
  <teacher :name="name" :sayHi="sayHi" />
</template>

<script>
import Student from "./Student.vue";
import Teacher from "./Teacher.vue";

export default {
  components: {
    Student,
    Teacher,
  },
  name: "Home",
  data() {
    return {
      name: "peter",
      user: { name: "jane", email: "jane@test.com" },
      sayHi() {
        alert("Hi");
      },
    };
  },
  computed: {
    adjustedStyle() {
      return {};
    },
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
