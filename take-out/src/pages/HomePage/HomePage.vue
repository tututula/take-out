<template>
<div>
    <HeaderTop>
        <a style="color: white;float: right;font-size: smaller;margin-right: 5px" slot="isLog">登录/注册</a>
    </HeaderTop>
    <nav style="background: white">
            <div class="swiper-container" style="height: 160px">
                <div class="swiper-wrapper">
                      <div class="swiper-slide">
                          <el-row style="text-align: center;margin-bottom: 10px">
                              <el-col :span="6">
                                  <a href="">
                                  <img src="./images/nav/1.jpg" alt="">
                                  </a>
                                  <p>美食</p>
                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/2.jpg" alt="">
                                  </a>
                                  <p>美食</p>
                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/3.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/4.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                          </el-row>
                          <el-row style="text-align: center">
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/5.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/6.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/7.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/8.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                          </el-row>
                      </div>
                      <div class="swiper-slide">
                          <el-row style="text-align: center;margin-bottom: 10px">
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/9.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/10.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/11.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/12.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>

                          </el-row>
                          <el-row style="text-align: center;margin-bottom: 10px">
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/13.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                              <el-col :span="6">
                                  <a href="">
                                      <img src="./images/nav/14.jpg" alt="">
                                  </a>
                                  <p>美食</p>

                              </el-col>
                          </el-row>
                      </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
    </nav>
    <div class="shop-container">
        <section class="">
            <span>附近商家</span>
        </section>
       <ShopList></ShopList>
    </div>
</div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import ShopList from '../../components/ShopList/ShopList'
    export default {
        name: "HomePage",
        components:{
          HeaderTop,
            ShopList
        },
        mounted(){
            new Swiper('.swiper-container',{
                direction: 'horizontal', // 垂直切换选项
                loop: false, // 循环模式选项
                pagination: {
                    el: '.swiper-pagination',
                },

            })
        },
        data(){
          return{

          }
        },
        methods: {

        },


    }
</script>

<style scoped>

    nav{
        height: 160px;
        margin-top: 20px;
    }
    nav img{
        display: inline-block;
        width: 50px;
        height: 50px;
    }
    .shop-container{
        margin-top: 20px;
        border-top: 20px solid rgba(174, 182, 191,.2);
    }

</style>