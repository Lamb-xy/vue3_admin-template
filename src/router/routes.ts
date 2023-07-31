// 引入类型校验，规范ts开发
import { RouteRecordRaw } from 'vue-router'

// constantRoute: 不需要动态判断权限的路由（静态路由）
export const constantRoute: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login', // 命名路由：用于权限管理
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'home', // 命名路由：用于权限管理
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404', // 命名路由：用于权限管理
    },
    // 任意路由:以上都未匹配到
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404', // 重定向到404
        name: 'Any',
    },
]
