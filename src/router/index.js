import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/find/find'
import Message from '@/components/message/message'
import Mine from '@/components/mine/mine'
import Home from '@/components/home/home'
import Lists from '@/components/base/lists/lists'

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
