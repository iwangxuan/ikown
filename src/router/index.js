import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main.vue'
import login from '../components/login.vue'
import register from '@/components/register.vue'
import userhome from '@/components/userhome.vue'
import userinfo from '@/components/userinfo.vue'
import userfous from '@/components/userfous.vue'
import userfans from '@/components/userfans.vue'
import recent from '@/components/recent.vue'
import mypage from '@/components/mypage.vue'
import likes from '@/components/likes.vue'
import sub from '@/components/sub.vue'
import collect from '@/components/collect.vue'
import userinfo1 from '@/components/userinfo1.vue'
import userinfo2 from '@/components/userinfo2.vue'
import userinfo3 from '@/components/userinfo3.vue'
import write from '@/components/write.vue'
import read from '@/components/read.vue'
import Page from '@/components/Page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {title:"登录"}
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {title:"注册"}
    },
    {
      path: '/userhome',
      children:[
        {path:'userfans',component:userfans},
        {path:'userfous',component:userfous},
        {path:'recent',component:recent},
        {path:'mypage',component:mypage},
        {path:'sub',component:sub},
        {path:'likes',component:likes},
        {path:'collect',component:collect}
      ],  
      name: 'userhome',
      component: userhome,
      meta: {title:"用户主页"}
    },
    {
      path: '/userinfo',
      children:[
        {path:'userinfo1',component:userinfo1},
        {path:'userinfo2',component:userinfo2},
        {path:'userinfo3',component:userinfo3},
      ],
      name: 'userinfo',
      component: userinfo,
      meta: {title:"用户信息页"}
    },
    {
      path:'/write',
      name:'write',
      component:write,
      meta:{title:"创作页"}
    },
    {
      path:'/read',
      name:'read',
      component:read,
      meta:{title:"看文章"},
      
    },
        {path:'/Page',
        name:'Page',
        component:Page,
        meta:{title:"看文章"},
      }
  ]
})
