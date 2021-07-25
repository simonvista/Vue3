<template>
  <h1>Click Events</h1>
  <h1 v-on:mousemove="getConsole">mousemove event</h1>
  <button v-on:click="getData('You clicked me!')">click me</button>
  <button v-on:dblclick="getData('You double clicked me!')">
    double click me
  </button>
  <br /><br />
  <button v-on:click="incCnt">increase counter</button>
  <button v-on:click="decCnt">decrease counter</button>
  <h2>count: {{ count }}</h2>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getData(val) {
      alert(val);
    },
    getConsole() {
      console.log("mouse is moving");
    },
    incCnt() {
      this.count = this.count + 1;
    },
    decCnt() {
      this.count = this.count - 1;
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
