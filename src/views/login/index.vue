<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form
                    class="login_form"
                    ref="loginFormRef"
                    :model="loginForm"
                    :rules="rules"
                >
                    <h1>Hello</h1>
                    <h2>欢迎来到商城后台管理系统</h2>
                    <el-form-item prop="username">
                        <el-input
                            :prefix-icon="User"
                            v-model="loginForm.username"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            type="password"
                            :prefix-icon="Lock"
                            :show-password="true"
                            v-model="loginForm.password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            class="login_btn"
                            type="primary"
                            size="default"
                            :loading="loading"
                            @click="login"
                        >
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
const useStore = useUserStore()
// 收集账号和密码的数据
const loginForm = reactive({
    username: 'admin',
    password: '111111',
})
const rules = reactive({
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
        },
        { min: 5, max: 10, message: '账号长度最少为5位', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: '请输出密码',
            trigger: 'blur',
        },
        { min: 6, max: 15, message: '密码长度最少为6位', trigger: 'blur' },
    ],
})
const $router = useRouter()
const loading = ref(false)
const loginFormRef = ref()
const login = async () => {
    // 保证表单项校验成功再发请求
    await loginFormRef.value.validate()
    // 1.通知仓库发登录请求
    // 请求成功->首页
    // 请求失败->弹出登录失败信息

    try {
        loading.value = true

        // 保证登录成功
        await useStore.userLogin(loginForm)
        // 编程式导航跳转到首页
        $router.push('/')
        ElNotification({
            type: 'success',
            message: '登录成功',
            title: `Hi,${getTime()}好！`,
        })
        loading.value = false
    } catch (error) {
        loading.value = false
        ElNotification({
            type: 'error',
            message: (error as Error).message,
        })
    }
}
</script>

<style lang="scss" scoped>
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;
        h1 {
            color: white;
            font-size: 40px;
        }
        h2 {
            color: white;
            font-size: 20px;
            margin: 20px 0;
        }
        .login_btn {
            width: 100%;
        }
    }
}
</style>
