// nav.vue
<style>
</style>

<template>
  <header class="navbar navbar-light bg-faded">
    <a class="navbar-brand" href="#">{{title}}</a>
    <div class="pull-xs-right label label-primary">{{desc}}</div>
  </header>
</template>

<script>
var { BoardStateEnum } = require('minesweeper')

function description (boardState) {
  if (boardState === BoardStateEnum.PRISTINE) {
    return 'Ready'
  } else if (boardState === BoardStateEnum.IN_PROGRESS) {
    return 'In Progress'
  } else if (boardState === BoardStateEnum.LOST) {
    return 'You Lose'
  } else if (boardState === BoardStateEnum.WON) {
    return 'You Won'
  }
}

export default {
  props: ["state"],
  data() {
    return {
      title: 'MineSweeper'
    }
  },
  computed: {
    desc: function () {
      return description(this.state.data)
    }
  }
}
</script>
