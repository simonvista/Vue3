<template>
  <h1>simple form</h1>
  {{ form }}
  <form @submit="login">
    <label>email</label>
    <input type="email" placeholder="email" v-model="form.email" /><br /><br />
    <label>password</label>
    <input
      type="password"
      placeholder="password"
      v-model="form.password"
    /><br /><br />
    <button type="submit">submit</button>
  </form>
</template>

<script>
export default {
  components: {},
  name: "Home",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    login(e) {
      e.preventDefault();
      console.warn(`login info: ${this.form.email}, ${this.form.password}`);
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
