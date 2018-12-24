<template>
    <div class="order">
       <header>
           <el-row>
               <el-col >
                   <span style="color: white">我的订单</span>
               </el-col>
           </el-row>
       </header>

        <div class="order-wdl">
            <img src="./person.png" alt="">
                <p>
                    登录后查看外卖订单
                </p>
            <el-button type="success">
                立即登录
            </el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Order"
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
    .order-wdl{
        display table-cell
        text-align center
        vertical-align middle
        position absolute
        left:0
        right:0
    }
    .order-wdl p{
        margin-bottom 20px
        color #969896
    }
</style>