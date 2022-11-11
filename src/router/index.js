import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((from, to, next) => {
  // if (to.path = '/login') {
  //   next();
  // }
  // const tokeStr = window.sessionStorage.getItem('token');
  // if (!tokeStr) {
  //   next('/login');
  // }
  // next()
  next()
})
export default router
