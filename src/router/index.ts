import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'
// 创建路由器
let router = createRouter({
    //路由模式hash
    history: createWebHashHistory(),
    routes: constantRoute,
    // 滚动行为，可以在vue-router中使用
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
        }
    },
})
export default router
