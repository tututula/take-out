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
    export default {
        name: "ShopList"
    }
</script>

<style scoped>
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
</style>