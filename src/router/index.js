import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home'
import Vip from '@/components/tabbar/Vip'
import Cart from '@/components/tabbar/Cart'
import Search from '@/components/tabbar/Search'
import NewsList from '@/components/news/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/home/newslist',
      name: 'NewsList',
      component: NewsList
    }
  ]
})

