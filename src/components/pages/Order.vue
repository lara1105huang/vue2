<template>
  <div class="Order">
    <h1>{{ title }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      title: 'Order'
    }
  }
}
</script>
