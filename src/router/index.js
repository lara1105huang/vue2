import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
 // mode: 'history', //加入這行會讓# 消失
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: () => import('../components/AboutUs.vue')
    },
     {
      path: '/product/:id',// params 參數 id,動態路由
      name: 'Product',
       component: () => import('../components/Product.vue'),
       //巢狀路由(嵌套)
       children: [
          {
            path: 'shop', // 不可加上 /，否則將回根目錄
            component: () => import('../components/Shop.vue'),
          },
       ]
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('../components/Order.vue'),
      redirect: '/order/one',//重新導向(redirect)
      //巢狀路由(嵌套)
      children: [
        {
          path: 'one',
          component: () => import('../components/OrderOne.vue'),
        },
        {
          path: 'two',
          component: () => import('../components/OrderTwo.vue'),
        }
      ]
    }
  ]
})
