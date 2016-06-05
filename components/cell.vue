// nav.vue
<style>
</style>

<template>
  <div class="col-xs-1" v-on:click="handleClick">
    {{state}}
  </div>
</template>

<script>
var { CellStateEnum, CellFlagEnum } = require('minesweeper')

function cellState(cell) {
  if (cell.state === CellStateEnum.CLOSED) {
    if (cell.flag === CellFlagEnum.NONE) {
        return 'X'
    } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
        return '!'
    } else if (cell.flag === CellFlagEnum.QUESTION) {
        return '?'
    }
  } else if (cell.state === CellStateEnum.OPEN) {
     if (cell.isMine) {
       return '*'
     } else {
       return cell.numAdjacentMines === 0 ?
         ' ' :
         cell.numAdjacentMines.toString()
     }
  }
}


export default {
  props: ["cell"],
  data() {
    return {
      state: cellState(this.cell)
    }
  },
  methods: {
    handleClick: function (e) {
      this.$dispatch('updated', this.cell.x, this.cell.y)
    }
  }
}
</script>
