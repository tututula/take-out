<template>
<footer>
        <el-row :gutter="20" type="flex" justify="space-around" align="middle">

                <el-col :span="6"> <router-link to="/homepage">
                    <span><i  class="iconfont icon-zhuye"></i></span><span style="font-size: 14px">主页</span></router-link></el-col>
                <el-col :span="6"> <router-link to="/search">
                    <span><i class="iconfont icon-sousuo"></i></span><span style="font-size: 14px">搜索</span></router-link></el-col>
                <el-col :span="6"> <router-link to="/order">
                    <span><i class="iconfont icon-dingdan"></i></span><span style="font-size: 14px">订单</span></router-link></el-col>
                <el-col :span="6"> <router-link to="/mine">
                    <span><i class="iconfont icon-ziyuan"></i></span><span style="font-size: 14px">我的</span></router-link></el-col>

         </el-row>
</footer>
</template>

<script>
    import './font_xx60mb8ai3m/iconfont.css'
    export default {
        name: "FooterGuide"
    }
</script>

<style lang="stylus" scoped>
    .el-col{
        text-align:center;
        vertical-align:middle;

    }
    a{
            display:flex;
            flex-direction:column;
        }

    .router-link-active{
        color: red
    }
    footer{
        height:50px;
        border-top: 1px solid #CCD1D1;
        background:white;
        z-index: 100;
        position:fixed;
        bottom:0;
        width:100%;
    }
    .el-row{
        height:50px;

    }


</style>
