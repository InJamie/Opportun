import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from "../views/home";
import Login from "../views/Login";
import News from "../views/News";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
  ]
})
