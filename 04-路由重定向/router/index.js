import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import NotFind from '@/views/NotFind'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  // history路由模式
  mode: 'history',
  routes: [
    // 重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search/:word?', component: Search },
    { path: '*', component: NotFind }
  ]
})

export default router