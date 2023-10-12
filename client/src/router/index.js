import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name:'register',
      
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/places/:types',
      name: 'PlacesList',

      component: () => import('../views/PlaceListView.vue')
    },
    {
      path: '/places/review/:id',
      name : 'review',

      component: () => import('../views/PlaceReview.vue')
    },
    {

      path: '/places/:types/:id',
      name: 'PlacePage',

      component: () => import('../views/PlacesPage.vue')

    },
    {
      path: '/places/add',
      name: 'AddPlace',

      component: () => import('../views/AddPageView.vue')
    }
  ]
})

export default router
