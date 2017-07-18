// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import info1 from "../../components/info1";
import info2 from "../../components/info2";
import Router from "vue-router";
Vue.use(Router);

Vue.config.productionTip = false

/* eslint-disable no-new */
const router =  new Router({
  routes: [
    {path:"/",name:"info1",component: info1},
    {path:"/info2",name:"info2",component:info2}
  ]
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
