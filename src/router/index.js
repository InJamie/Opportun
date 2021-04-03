import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../views/Login";
import News from "../views/News";
import Main from "../views/Main";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: '/Main',
      component: Main,
      children:[
        {
          path: '/News',
          component: News
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
