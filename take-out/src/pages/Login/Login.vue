<template>
    <div>
        <div class="back-btn">
            <i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
        </div>
        <div>
            <h1>张氏外卖</h1>
        </div>
        <div>
            <span @click="mima=true">短信登录</span>
            <span @click="mima=false">密码登录</span>
        </div>
        <div v-if="mima">
            密码
        </div>
        <div v-else>
            短信
        </div>
        <div>温馨提示balabal</div>
        <el-button type="primary">登录</el-button>
        <div>
            关于我们
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                mima:true
            }
        }
    }
</script>

<style scoped>

</style>
