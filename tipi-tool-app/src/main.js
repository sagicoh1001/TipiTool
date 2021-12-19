import Vue from 'vue'
import App from './App.vue'
// import writeNewQuestion from './services/addQuestion.js'
// import { writeSomehing } from './services/dbInit'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// writeNewQuestion('', 'hello?', 'hi!')
