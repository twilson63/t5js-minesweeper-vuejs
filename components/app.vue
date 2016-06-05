// app.vue
<style>
  .blue {
    color: midnightblue;
  }
</style>

<template>
  <div class="container">
    <nav-component :state="state"></nav-component>
    <board-component :grid="grid"></board-component>
  </div>
</template>

<script>
var minesweeper = require('minesweeper')
var _ = require('underscore')

// components
var NavComponent = require('./nav.vue')
var BoardComponent = require('./board.vue')

var ma = minesweeper.generateMineArray({
  rows: 10,
  cols: 10,
  mines: 15
})
var board = new minesweeper.Board(ma)
var grid = board.grid()
var state = board.state()

export default {
  data() {
    return {
      grid: {
        data: grid
      },
      state: {
        data: state
      }
    }
  },
  components: {
    NavComponent,
    BoardComponent
  },
  events: {
    'updated': function (x, y) {
      board.openCell(x,y)
      this.$set('grid', { data: [] })
      var self = this
      setTimeout(function () {
        self.$set('grid', { data: board.grid() })
        self.$set('state', { data: board.state() } )
      }, 0)
    }
  }
}
</script>
