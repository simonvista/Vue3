<template>
  <div class="cart">
    <h1>Multiple Slots w/ Names (type of component)</h1>
    <h2>Child component</h2>
    <header>
      <slot name="header">default header</slot>
    </header>
    <body>
      <slot name="body">default body</slot>
    </body>
    <footer>
      <slot name="footer">default footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {},
  data() {
    return {};
  },
  watch: {
    // method name must be the same as data name
  },
  methods: {},
  // computed property is cached
  computed: {},
};
</script>

<style>
.cart {
  border: black 1px solid;
  width: 218px;
  padding: 5px;
  margin: 5px;
  text-align: center;
}
</style>
