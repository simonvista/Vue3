<template>
  <img class="logo" src="../assets/resto-logo.jpg" alt="" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="name" />
    <input type="email" placeholder="email" />
    <input type="password" placeholder="password" />
    <button>sign up</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  border: 1px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>
