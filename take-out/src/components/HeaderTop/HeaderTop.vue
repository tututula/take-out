<template>
    <header>
        <i class="el-icon-location-outline" style="color: white"></i><a @click="Dingwei" style="color: white;">{{this.locationNow}} </a>
        <slot name="isLog"></slot>

    </header>
</template>

<script>
    export default {
        name: "HeaderTop",
        data(){
          return{
              locationNow:''
          }
        },
        mounted(){
          this.Dingwei()
        },
        methods:{
            Dingwei() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {this.locationNow = `${Math.round(position.coords.latitude)} ${Math.round(position.coords.longitude)}`});
                }
                else this.locationNow = '无法获取';
            }
        }
    }
</script>

<style scoped>
    header{
        height: 50px;
        background:red;
        text-align: center;
        line-height: 50px;
    }
</style>