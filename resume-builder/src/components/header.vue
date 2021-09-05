<template>
  <div class="Header">
    <font-awesome-icon :icon="fa-address-card" />
    <h1>Resume Builder</h1>
  </div>
</template>


<script>

export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
    background-color: #111d4a;
    color: #fff8f0;
    padding:  2%
}
</style>
