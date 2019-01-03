<template>
    <div style="display: inline-block">
        <span class="star">
            <img class="star-item" src="./stars/star24_on@2x.png" alt="" :class="">
            <img class="star-item" src="./stars/star24_on@2x.png" alt="" :class="">
            <img class="star-item" src="./stars/star24_on@2x.png" alt="" :class="">
            <img class="star-item" src="./stars/star24_off@2x.png" alt="" :class="">
            <img class="star-item" src="./stars/star24_off@2x.png" alt="" :class="">
        </span>
    </div>
</template>

<script>
    export default {
        name: "Stars",
        data(){
            return{
                imgSrc:''
            }
        },
        computed(){

        }

    }
</script>

<style lang="stylus" scoped>
    .star
        img
            width 10px
            height 10px
            display inline-block
</style>
