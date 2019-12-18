import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/views/index'
import login from "../components/views/login"
import searchPaperResult from "../components/views/searchPaperResult"
import register from "../components/views/register";
import test from "../components/views/test";
import paper from "../components/views/paper";
import admin from "../components/views/admin";
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/searchPaperResult',
      name: 'searchPaperResult',
      component: searchPaperResult
    },
    {
      path: '/paper',
      name: 'paper',
      component: paper,
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/highsearch',
      name: 'highsearch',
      component: test
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
