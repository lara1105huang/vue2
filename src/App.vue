<template>
  <div id="app">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mr-auto">
          <li v-for="(item, index) in navbarList"
          :class="{ 'active': activeIndex === index }"
          :key="index" class="nav-item" @click="changClass(item, index)">{{ item.title }}</li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

      <router-view/>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      navbarList: [
        { title:'Home', path: '/' },
        { title: 'About Us', path: '/aboutus' },
        { title: 'Product', path: '/product' },
        { title: 'Order', path: '/order' },
      ],
      activeClass: 'active',
      errorClass: 'text-danger',
      activeIndex: undefined
    }
  },
  methods: {
    changClass(item,index)
    {
     // console.log(item, index)
      this.$router.push({ path: `${item.path}` })
      this.activeIndex = index

    },
  }
}
</script>

<style lang="scss">
@import './assets/scss/all';
</style>
