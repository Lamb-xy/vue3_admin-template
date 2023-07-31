//创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user/index'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
//创建用户小仓库
const useUserStore = defineStore('User', {
    // 小仓库存储数据的地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
        }
    },
    actions: {
        // 用户登录的方法
        async userLogin(data: loginForm) {
            const res: loginResponseData = await reqLogin(data)
            // 登陆成功200->token
            // 登录失败201->错误信息
            if (res.code === 200) {
                // pinia存储数据并非持久化
                this.token = res.data.token as string
                SET_TOKEN(res.data.token as string)
                return 'ok'
            } else {
                return Promise.reject(new Error(res.data.message))
            }
        },
    },
    getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
