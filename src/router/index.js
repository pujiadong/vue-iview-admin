import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    meta: { needLogin: true },
    component: () => import('../views/index/Index.vue'),
    children: [
      {
        path: '/statistics',
        name: '统计分析',
        component: () => import('../views/general/General.vue')
      },
      {
        path: '/upload/image',
        name: '图片上传',
        component: () => import('../views/upload/ImageUpload.vue')
      },
      {
        path: '/upload/video',
        name: '视频上传',
        component: () => import('../views/upload/VideoUpload.vue')
      },
      {
        path: '/upload/doc',
        name: '文档上传',
        component: () => import('../views/upload/DocUpload.vue')
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
