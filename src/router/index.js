import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
 // mode: 'history', //加入這行會讓# 消失
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/pages/Home.vue')
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: () => import('../components/pages/AboutUs.vue')
    },
     {
      path: '/product/:id',// params 參數 id,動態路由
      name: 'Product',
       component: () => import('../components/pages/Product.vue'),
       //巢狀路由(嵌套)
       children: [
          {
            path: 'shop', // 不可加上 /，否則將回根目錄
            component: () => import('../components/pages/Shop.vue'),
          },
       ]
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('../components/pages/Order.vue'),
      redirect: '/order/one',//重新導向(redirect)
      //巢狀路由(嵌套)
      children: [
        {
          path: 'one',
          component: () => import('../components/pages/OrderOne.vue'),
        },
        {
          path: 'two',
          component: () => import('../components/pages/OrderTwo.vue'),
        }
      ]
    }
  ]
})
