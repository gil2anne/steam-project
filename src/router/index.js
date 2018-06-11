import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Product from '@/components/Product'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      //props : true
      props : (route) => ({contentId : route.query.contentId})
    }
/*
    {
      path: '/detail/:id',
      name: 'book',
      component: Book
    },
*/    
  ]
})
