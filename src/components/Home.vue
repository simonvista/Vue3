<template>
  <h1>Class Binding (:class="{class1:true,class2:false,class3:true...}")</h1>
  <h2 class="green">Home Component 1</h2>
  <hr />
  <h2 :class="{ green: true }">Home Component 2</h2>
  <h2 :class="{ green: isGreen }">Home Component 3</h2>
  <hr />

  <h2 :class="{ green: false }">Home Component 4</h2>
  <h2 :class="{ green: !isGreen }">Home Component 5</h2>
  <hr />
  <button type="button" v-on:click="isGreen = !isGreen">
    toggle green
  </button>
  <hr />
  <h2 class="staticClass" :class="{ green: true }">
    static class & single class binding
  </h2>
  <h2 class="staticClass" :class="{ green: true, err: true }">
    static class & multiple classes binding
  </h2>
  <h2 class="staticClass" :class="adjustedStyle">
    static class & multiple classes binding w/ computed
  </h2>
</template>

<script>
export default {
  components: {},
  name: "Home",
  data() {
    return {
      isGreen: true,
    };
  },
  computed: {
    adjustedStyle() {
      return {
        green: this.isGreen,
        err: true,
        other: false,
      };
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
.green {
  background-color: green;
  width: 200px;
  padding: 10px;
  color: #fff;
}
.staticClass {
  color: blue;
}
.err {
  color: red;
}
.other {
  font-size: 70px;
}
</style>
