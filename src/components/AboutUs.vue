<template>
  <div class="AboutUs">
    <h1>{{ title }}</h1>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'AboutUs'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:#333;
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
</style>
