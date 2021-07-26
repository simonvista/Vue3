<template>
  <h1>simple form</h1>
  <!-- {{ form }} -->
  <ul>
    <li v-for="err in errs" :key="err.id" style="color:red">
      {{ err }} is not valid
    </li>
  </ul>
  <form @submit="login">
    <!-- input field -->
    <label>email</label>
    <input type="email" placeholder="email" v-model="form.email" /><br /><br />
    <label>password</label>
    <input
      type="password"
      placeholder="password"
      v-model="form.password"
    /><br /><br />

    <!-- select box -->
    <h1>country</h1>
    <select v-model="form.country">
      <option value="india">india</option>
      <option value="usa">usa</option>
    </select>
    <br /><br />

    <!-- radio box -->
    <h1>gender</h1>
    <label>male</label>
    <input
      type="radio"
      name="gender"
      value="male"
      v-model="form.gender"
    /><br /><br />
    <label>female</label>
    <input
      type="radio"
      name="gender"
      value="female"
      v-model="form.gender"
    /><br /><br />

    <!-- checkbox -->
    <h1>tech</h1>
    <label>java</label>
    <input type="checkbox" value="java" v-model="form.tech" /><br /><br />
    <label>python</label>
    <input type="checkbox" value="python" v-model="form.tech" /><br /><br />

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
        country: "",
        gender: "",
        tech: [],
      },
      errs: [],
    };
  },
  computed: {},
  methods: {
    login(e) {
      e.preventDefault();
      console.warn(this.form);
      this.errs = [];
      for (const item in this.form) {
        if (this.form.item === "" || this.form[item].length === 0) {
          this.errs.push(item);
        }
      }
      if (this.errs.length === 0) {
        alert("data was submitted as expected");
      } else {
        console.warn(this.errs);
      }
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
