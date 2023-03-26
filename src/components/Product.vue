<template>
  <div class="Product">
    <h1>{{ title }}</h1>

  <h1>{{ id }}</h1>
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      title: 'Product',

    }
  },
  computed: {
    id()
    {
      return this.$route.params.id;
    }
  },
  watch: {
    $route(to, from)
    {
      console.log('to', to) // 目的地
      console.log('to.params.id', to.params.id,'path', to.path) // 目的地
      console.log(from) // 原地
    }
  },
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
