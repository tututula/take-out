<template>
    <section class="shop-list">
        <ul>
            <li>
                <a href="">
                    <section class="shop-left">
                        <img class="shop-header" src="../../components/ShopList/shop/1.jpg" alt="">
                    </section>
                    <section class="shop-right">
                        <el-row>
                            <el-col :span="12">
                                <h5 style="color: black" class="shop-name">{{}}商家名称</h5>
                            </el-col>
                            <el-col :span="12" class="supports">
                                <div style="float:right;margin-right: 5px">
                                    <span>保</span>
                                    <span>准</span>
                                    <span>票</span>
                                </div>

                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="7" class="rate"> <Stars></Stars> <span>&nbsp3.6</span></el-col>
                            <el-col :span="5" class="month-sell">月售{{ }}</el-col>
                            <el-col :span="12" class="delivery-style"><span>张氏专送</span></el-col>
                        </el-row>
                        <el-row style="margin-top: 5px">
                            <el-col class="delivery-data">
                                <span>20起送/配送费5元</span>
                            </el-col>
                        </el-row>
                    </section>
                </a>

            </li>
            <li>
                <a href="">
                    <section class="shop-left">
                        <img class="shop-header" src="../../components/ShopList/shop/2.jpg" alt="">
                    </section>
                    <section class="shop-right">
                        <el-row>
                            <el-col :span="12">
                                <h5>商家名称</h5>
                            </el-col>
                            <el-col :span="12">
                                <span>保</span>
                                <span>准</span>
                                <span>票</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5">stars</el-col>
                            <el-col :span="2">3.6</el-col>
                            <el-col :span="5">月售</el-col>
                            <el-col :span="12">张氏专送</el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <span>20起送/配送费5元</span>
                            </el-col>
                        </el-row>
                    </section>
                </a>

            </li>
            <li>
                <a href="">
                    <div class="shop-left">
                        <img class="shop-header" src="../../components/ShopList/shop/3.jpg" alt="">
                    </div>
                    <section class="shop-right">
                        <el-row>
                            <el-col :span="12">
                                <h5>商家名称</h5>
                            </el-col>
                            <el-col :span="12">
                                <span>保</span>
                                <span>准</span>
                                <span>票</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5"><Stars></Stars></el-col>
                            <el-col :span="2">3.6</el-col>
                            <el-col :span="5">月售</el-col>
                            <el-col :span="12">张氏专送</el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <span>20起送/配送费5元</span>
                            </el-col>
                        </el-row>
                    </section>
                </a>

            </li>
            <li>
                <a href="">
                    <section class="shop-left">
                        <img class="shop-header" src="../../components/ShopList/shop/4.jpg" alt="">
                    </section>
                    <section class="shop-right">
                        <el-row>
                            <el-col :span="12">
                                <h5>商家名称</h5>
                            </el-col>
                            <el-col :span="12">
                                <span>保</span>
                                <span>准</span>
                                <span>票</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5">stars</el-col>
                            <el-col :span="2">3.6</el-col>
                            <el-col :span="5">月售</el-col>
                            <el-col :span="12">张氏专送</el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <span>20起送/配送费5元</span>
                            </el-col>
                        </el-row>
                    </section>
                </a>

            </li>
            <li>
                <a href="">
                    <section class="shop-left">
                        <img class="shop-header" src="../../components/ShopList/shop/3.jpg" alt="">
                    </section>
                    <section class="shop-right">
                        <el-row>
                            <el-col :span="12">
                                <h5>商家名称</h5>
                            </el-col>
                            <el-col :span="12">
                                <span>保</span>
                                <span>准</span>
                                <span>票</span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5">stars</el-col>
                            <el-col :span="2">3.6</el-col>
                            <el-col :span="5">月售</el-col>
                            <el-col :span="12">张氏专送</el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <span>20起送/配送费5元</span>
                            </el-col>
                        </el-row>
                    </section>
                </a>

            </li>
        </ul>
    </section>
</template>

<script>
    import Stars from '../Stars/Stars'
    export default {
        name: "ShopList",
        components:{
            Stars
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .shop-list img{
        display: inline-block;
        width: 60px;
        height: 60px;
    }
    .shop-list{
        margin-top: 20px;
    }
    .shop-list li{
        border-bottom: 1px solid white;
    }
    .shop-left,.shop-right{
        display: inline-block;
    }
    li a{
        display: block;
    }
    .shop-left{
        width: 20%;
    }
    .shop-right{
        width: 80%;
    }
    .supports span{
        font-size:10px;
        color:green;
        border:1px solid green;
        padding:0 2px;
        border-radius:2px
    }
    .delivery-style
        float right
        transform-origin 35px 0
        transform scale(.7)
        display inline-block
        font-size 14px
        padding 1px
        span

          border-radius 2px
          color #02a774
          border 1px solid #02a774
    .month-sell
        font-size 14px
        color black
    .rate
    .delivery-data
        color #55a532
        font-size 14px
    .shop-name
        position relative
        top -5px

</style>
