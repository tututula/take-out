<template>
<div>
    <header>
        <el-row>
            <el-col >
                <span style="color:white ">我的</span>
            </el-col>
        </el-row>
    </header>
    <div class="login">
            <el-row style="color: white">
                <el-col :span="4">
                    <img src="./头像.png" alt="" style="width: 32px;height: 32px;margin-left: 10px">
                </el-col>
                <el-col :span="10">
                    <el-row style="margin-bottom: 10px ">
                        <span><strong>登录/注册</strong></span>
                    </el-row>
                    <el-row>
                        <span><i class="el-icon-mobile-phone"></i>暂无绑定手机号</span>
                    </el-row>
                </el-col>
                <el-col :span="10">
                    <i class="el-icon-arrow-right" style="line-height:42px;float: right;margin-right: 5px"></i>
                </el-col>
            </el-row>
    </div>
    <div class="mine-number" style="text-align: center">
        <el-row>
            <el-col :span="8" style="border-right:1px solid gray">
                <span>0.00</span>
                <div>
                    我的余额
                </div>
            </el-col>
            <el-col :span="8">
                <span>0</span>
                <div>
                    我的优惠
                </div>
            </el-col>
            <el-col :span="8" style="border-left:1px solid gray">
                <span>0</span>
                <div>
                    我的积分
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="module">
        <ul>
            <li>我的订单</li>
            <li>积分商城</li>
            <li>我的会员</li>
            <li>服务中心</li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    header{
        height: 50px;
        background: red;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content:center ;
    }
    .login{
        background:  red
        height 60px
        width 100%
        border-top 1px solid white
    }
    .login>.el-row{
        position relative
        top 50%
        transform: translateY(-50%);

    }
    .mine-number{
        height 80px
        background white
    }
    .mine-number>.el-row{
        position relative
        top 50%
        transform: translateY(-50%);
    }
</style>