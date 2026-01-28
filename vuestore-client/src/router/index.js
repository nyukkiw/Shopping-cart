import Vue from 'vue'
import VueRouter from 'vue-router'
import productIndex from '../views/product/index.vue'
import productDetail from '../views/product/detail.vue'
import cartIndex from '../views/cart/index.vue'
import NotFound from '@/views/errors/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product-Index',
    component: productIndex
  },
  {
    path: '/product/:id',
    name: 'product-Detail',
    component: productDetail
  },
  {
    path: '/cart',
    name: 'cart-Index',
    component: cartIndex
  },

  {
    path: '*',
    component: NotFound
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


