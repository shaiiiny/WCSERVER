<template>
  <div id="profile">
    <nav class="navbar">
      <h1>{{ msg }}</h1>
    </nav>
    <nav class="flex-container">
      <div class="flex-item">
        <h4>
          Objective<br /><br />To secure a challenging position in a reputable
          organization to expand my learnings, knowledge, and skills.
        </h4>
      </div>
      <div class="flex-item">
        <h4>
          Course<br />Bachelor of Science in Information Technology<br /><br />
          Specialization<br />Major in Web Development.
        </h4>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      msg: "Hello I am Alberto Villacarlos"
    };
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
h1 {
  font-size: 3em;
}
.navbar {
  display: flex;
  justify-content: center;
  padding: 1em;
  background: #b5fe83;
}
.flex-container {
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
}
.flex-item {
  background: #c0d8c0;
  max-width: 30%;
  text-align: center;
  padding: 1em;
}
</style>