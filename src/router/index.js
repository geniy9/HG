import Vue from 'vue'
import Router from 'vue-router'

// Page routes
import Home from '@/pages/Home'
import About from '@/pages/About'
import Portfolio from '@/pages/Portfolio'
import News from '@/pages/News'
import Contact from '@/pages/Contact'

// Brand routes
import categories from './categories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    ...categories,
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/404.vue')
    }
  ]
})