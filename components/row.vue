// row.vue
<style>
</style>

<template>
  <div class="row">
    <cell-component v-for="cell in row" :cell="cell"></cell-component>
  </div>
</template>

<script>
var CellComponent = require('./cell.vue')

export default {
  props: ["row"],
  components: {
    CellComponent
  }
}
</script>
