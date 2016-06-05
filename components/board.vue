// nav.vue
<style>
</style>

<template>
  <div class="container">
    <row-component v-for="row in grid.data" :row="row"></row-component>
  </div>
</template>

<script>
var RowComponent = require('./row.vue')

export default {
  props: ["grid"],
  components: {
    RowComponent
  }
}
</script>
