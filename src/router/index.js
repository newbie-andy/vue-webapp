import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/find/find'
import Message from '@/components/message/message'
import Mine from '@/components/mine/mine'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'channel/:type',
        },
      ]
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
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
