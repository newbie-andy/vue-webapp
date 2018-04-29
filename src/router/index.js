import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/find/find'
import Message from '@/components/message/message'
import Mine from '@/components/mine/mine'
import Home from '@/components/home/home'
import Lists from '@/components/base/lists/lists'
import Examples from '@/components/examples/examples'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: './channel'
    },
    {
      path: '/channel/',
      component: Home,
      children: [
        {
          name: 'channel',
          path: ':type',
          component: Lists,
        },
      ]
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/examples',
      name: 'Examples',
      component: Examples
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
