import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import FindMusic from "../views/findmusic/FindMusic";
import MyMusic from "../views/mymusic/MyMusic";

const routes = [
  {
    path:'',
    redirect:'/findmusic'
  },
  {
    path: '/findmusic',
    component:FindMusic,
    meta:{
      title:'发现音乐'
    }
  },
  {
    path: '/mymusic',
    component: MyMusic,
    meta: {
      title: '我的音乐'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//修改标题
router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title
  next()
})
export default router
