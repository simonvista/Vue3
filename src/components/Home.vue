<template>
  <h1>
    Get checkbox & radio button values through 2-way binding (bind value from
    view and model sides)
  </h1>
  <h1>Technologies</h1>
  <input type="checkbox" value="php" id="php" v-model="technologies" />
  <label for="php">php</label>
  <input type="checkbox" value="java" id="java" v-model="technologies" />
  <label for="java">java</label>
  <input type="checkbox" value="python" id="python" v-model="technologies" />
  <label for="python">python</label>
  <!-- <h4>Technology Info: {{ technologies }}</h4> -->
  <br /><br />
  <h1>Profession</h1>
  <label for="student">student</label>
  <input type="radio" value="student" id="student" v-model="profession" />
  <label for="teacher">teacher</label>
  <input type="radio" value="teacher" id="teacher" v-model="profession" />
  <label for="pupil">pupil</label>
  <input type="radio" value="pupil" id="pupil" v-model="profession" />
  <h4>Technology Info: {{ technologies }}, I'm a {{ profession }}</h4>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      technologies: [],
      profession: null,
    };
  },
  methods: {
    getInputs() {},
  },
};
</script>

// scoped make css local
<style scoped>
h1 {
  color: orange;
}
</style>
