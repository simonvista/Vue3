<template>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">Add Restaurant</a>
    <a href="#">Upadte Restaurant</a>
    <a href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: white;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-left: 5px;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>
