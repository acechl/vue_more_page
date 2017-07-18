// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from "./App"
import Router from "vue-router";
import index1 from "../../components/index1"
import index2 from "../../components/index2"
Vue.use(Router);
Vue.config.productionTip = false;
const router =  new Router({
  routes: [
    {path:"/",name:"index1",component:index1},
    {path:"/index2",name:"index2",component:index2},
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app', //将index.vue的内容挂载到index.html中
  router, //该页面中需要挂载的组件
  template: '<App/>',
  components: { App }
})

