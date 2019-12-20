import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/views/index'
import login from "../components/views/login"
import searchPaperResult from "../components/views/searchPaperResult"
import register from "../components/views/register";
import highsearch from "../components/views/highsearch";
import paper from "../components/views/paper";
import admin from "../components/views/admin";
import userMainpage from "../components/views/userMainpage";
import userFavorites from "../components/views/userFavorites";
import userFollows from "../components/views/userFollows";
import userMessageBox from "../components/views/userMessageBox";
import expertMainPage from "../components/views/expertMainPage";
import WordCloud from "../components/expertMainPage/WordCloud";
import superSearch from "../components/views/superSearch";
import searchExpert from "../components/views/searchExpert";
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
      component: paper
    },
    {
      path: '/userMainpage',
      name: 'userMainpage',
      component: userMainpage
    },
    {
      path: '/userFavorites',
      name: 'userFavorites',
      component: userFavorites
    },
    {
      path: '/userFollows',
      name: 'userFollows',
      component: userFollows
    },
    {
      path: '/userMessageBox',
      name: 'userMessageBox',
      component: userMessageBox
    },
    {
      path: '/expertMainPage',
      name: 'expertMainPage',
      component: expertMainPage
    },
    {
      path: '/highsearch',
      name: 'highsearch',
      component: highsearch
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/wordCloud',
      name: 'wordCloud',
      component: WordCloud
    },
    {
      path: '/superSearch',
      name: 'superSearch',
      component: superSearch
    }
    ,
    {
      path: '/searchExpert',
      name: 'searchExpert',
      component: searchExpert
    }
  ]
})
