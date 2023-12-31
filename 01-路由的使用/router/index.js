import VueRouter from 'vue-router'
import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import My from '@/views/My.vue'
import Vue from 'vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/find', component: Find },
        { path: '/friend', component: Friend },
        { path: '/my', component: My }
    ],
    //link自定义高亮类名
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})
export default router