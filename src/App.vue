<template>
  <div id="app">
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ name: 'AboutUs' }">AboutUs</router-link>
     <router-link :to="{ path: '/product' }">Product</router-link>

    <router-link :to="{ path: '/order' }">order</router-link>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/scss/all';
</style>
