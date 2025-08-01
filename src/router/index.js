import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/apps'
  },
  {
    path: '/apps',
    name: 'AppList',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import('../views/WeijuConfig.vue')
  },
  {
    path: '/ads',
    name: 'AdManagement',
    component: () => import('../views/AdManagement.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Payment.vue')
  },
  {
    path: '/general-config',
    name: 'GeneralConfig',
    component: () => import('../views/GeneralConfig.vue')
  },
  {
    path: '/ai-plus',
    name: 'AiPlus',
    component: () => import('../views/AiPlus.vue'),
    meta: { title: 'AI+' }
  },
  {
    path: '/ai-build',
    name: 'AiBuild',
    component: () => import('../views/AiBuild.vue'),
    meta: { title: '智能构建小程序' }
  },
  {
    path: '/ai-publish',
    name: 'AiPublish',
    component: () => import('../views/AiPublish.vue'),
    meta: { title: '全平台自动发布中心' }
  },
  {
    path: '/ai-create',
    name: 'AiCreate',
    component: () => import('../views/AiCreate.vue'),
    meta: { title: '创意小程序孵化器' }
  },
  {
    path: '/generate-app',
    name: 'generate-app',
    component: () => import('../components/aiCreate/AiCreateGenerateApp.vue'),
    meta: {
      title: '小程序生成'
    }
  },
  {
    path: '/pay-style/pay',
    name: 'PayTheme',
    component: () => import('../views/theme/edit/index.vue'),
    meta: { title: '支付样式' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 