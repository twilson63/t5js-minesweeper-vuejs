/* app goes here */
var Vue = require('vue')
var App = require('./components/app.vue')

new Vue({
  el: 'body',
  components: {
    app: App
  }
})
