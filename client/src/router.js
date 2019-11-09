import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Admin from './views/Admin'
import Articlelist from './views/Articlelist'
import Createarticle from './views/Createarticle'
import Editarticle from './views/Editarticle'
import Article from './views/Article'
import Login from './views/Login'
import Swal from 'sweetalert2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/article/:id',
      name: 'article',
      component: Article
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'list-article',
          component: Articlelist
        },
        {
          path: 'create-article',
          component: Createarticle
        },
        {
          path: 'edit-article/:id',
          component: Editarticle
        }
      ]
    }
  ]
})