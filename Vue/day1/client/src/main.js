// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

var url = 'http://localhost:3000'

axios.get(url+'/product')
 
.then(function (response) {
 
console.log(response);
 
})
 
.catch(function (error) {
 
console.log(error);
 
});
 