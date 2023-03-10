import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '../views/SignInPage.vue'
import NotFound from '../components/NotFound.vue'
import HomePage from '../components/HomePage.vue'
import ImageGallery from '../components/ImageGallery.vue'
import UserRegister from '../components/UserRegister.vue'
import JobPage from '../views/jobs/JobPage'
import JobDetails from '../views/jobs/JobDetails'
import TestPage from '../components/TestPage.vue'

const routes = [
  {
    path: '/',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/gallery',
    name: 'ImageGallery',
    component: ImageGallery
  },
  {
    path: '/jobs',
    name: 'JobPage',
    component: JobPage
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  },
  // redirect
  {
    path: '/home2',
    redirect: '/'
  },
  // 404 catchall
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
