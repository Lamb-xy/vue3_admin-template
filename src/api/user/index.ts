//统一管理项目用户相关的接口
import request from '@/utils/request'
// import type:ts的引入方法
import type { loginForm, loginResponseData } from './type'
// 统一管理接口
enum API {
    LOGIN_URL = '/user/login',
    USERIFO_URL = '/user/info',
}
// 对外暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) =>
    request.post<any, loginResponseData>(API.LOGIN_URL, data)
// 获取用户信息
export const reqUserInfo = () =>
    request.post<any, loginResponseData>(API.USERIFO_URL)
