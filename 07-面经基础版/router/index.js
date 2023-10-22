import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import ArticleDetail from "@/views/ArticleDetail"
import Article from '@/views/Article';
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // 一级路由
    {
      path: '/',
      redirect: '/article',
      component: Layout,
      // 二级路由
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/detail/:id?',
      component: ArticleDetail
    }
  ]
})

export default router