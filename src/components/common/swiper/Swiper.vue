<template>
    <div id="swiper">
<!--      上一页按钮-->
      <div class="pre" @click="preClick">
        <img src="../../../assets/images/navbar/back.svg" alt="">
      </div>
<!--轮播图片-->
    <div class="swiper-img">
      <div class="left-img">
        <img class="left-box-img"
             :src="leftImg" alt="">
      </div>

      <div class="swiper-img-box"
        @click="getIndex(index)"
        :key="index"
        :class="{activeImg:currentIndex===index}"
        v-for="(img,index) in banners">
        <img class="centerImg"
             @load="swiperImgLoad"
             :src="img.imageUrl" alt="">
      </div>

      <div class="right-img">
        <img  class="right-box-img"
              :src="rightImg" alt="">
      </div>
    </div>
<!--    下一页按钮-->
    <div class="next" @click="nextClick">
      <img src="../../../assets/images/navbar/next.svg" alt="">
    </div>
<!--      下标-->
    <div class="indicator">
      <div class="indicator-item"
           @click="changeItem(index)"
           :class="{active:currentIndex===index}"
           :key="index"
           v-for="(item,index) in banners"></div>
      </div>
    </div>
</template>

<script>
  import {getBanner} from "../../../network/findmusic/recommend";
  var $=require("jquery");

  export default {
    name: "Swiper",
    data(){
      return{
        banners:[],
        currentIndex:0,
        leftImg:null,
        rightImg:null,
        length:0,
        isLoad:false,
      }
    },
    methods:{

      //当鼠标移入图片下面的导航的时候，让currentIndex与index相等，触发一个样式
      //图片和下方下标的index是一样的，currentIndex是一样的，当前者两个index均等于currentIndex的时候，就一起变化了，相当于有一个中间相等的值
      changeItem(index){
        this.currentIndex=index;
      },
      getIndex(index){
        // console.log(index)
      },
      //上一页
      preClick(){
        if(this.currentIndex===0){
          this.currentIndex=this.length-1
        }else{
          this.currentIndex=this.currentIndex-1
        }
      },
      //下一页
      nextClick(){
        if(this.currentIndex===this.length-1){
          this.currentIndex=0
        }else{
          this.currentIndex=this.currentIndex+1
        }
      },
      startChange(){
        this.currentIndex+=1
        this.changeItem(this.currentIndex)
      },
    //  设置定时器  开始轮播
      startTime(){
        this.playTime=setInterval(()=>{
          if(this.currentIndex===this.length-1){
            this.currentIndex=0
          }else if(this.currentIndex>=0){
            this.currentIndex++
          }
        },2000)
      },
      //停止动画
      stopTime(){
        clearInterval(this.playTime)
      },
      swiperImgLoad(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad=true
        }
      },
    },
    created() {
      getBanner().then(res=>{
        this.banners=res.banners
      })

    },
    mounted() {
      this.startTime()

      $(".left-box-img,.right-box-img").css("opacity","0.5")
    },
    updated() {
      getBanner().then(res=>{
        //当页面内容发生改变的时候，改变中间图片左右两边的图片
        this.banners=res.banners
        this.length=this.banners.length
        if (this.currentIndex===0){
          this.leftImg=this.banners[this.length-1].imageUrl
          this.rightImg=this.banners[this.currentIndex+1].imageUrl
        }else if(this.currentIndex===this.length-1){
          this.leftImg=this.banners[this.currentIndex-1].imageUrl
          this.rightImg=this.banners[0].imageUrl
        }else{
          this.leftImg=this.banners[this.currentIndex-1].imageUrl
          this.rightImg=this.banners[this.currentIndex+1].imageUrl
        }
      })
    },
  }
</script>

<style scoped>
  @media screen and (max-width: 750px){
    .indicator-item{
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }
  }
  @media screen and (min-width: 750px){
    .indicator-item{
      width: 50px;
      height: 4px;
      border-radius: 2px;
    }
  }
  #swiper{
    display: flex;
    position: relative;
    justify-content: center;
    /*margin-top: 20px;*/
    height: 230px;
    width: 100%;
  }
  .indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    /*margin-top: 500px;*/
    width: 100%;
    height: 4px;
    /*border: 1px solid red;*/
  }
  .indicator-item{
    margin: 0 5px;
    /*width: 50px;*/
    /*height: 3px;*/
    /*background-color: red;*/
    border: 1px solid gray;
    /*border-radius: 2px;*/
  }
  .swiper-img{
    position: relative;
    display: flex;
    /*justify-content: center;*/
    width: 900px;
    height: 200px;
    /*border: 1px solid red;*/
  }
  .swiper-img-box{
    margin: 0 auto;
    z-index: 1;
    display: none;
  }
  .swiper-img .centerImg{
    width: 450px;
    height: 200px;
  }
  .left-box-img ,.right-box-img {
    width: 300px;
    height: 140px;
  }
  .left-box-img {
    position: absolute;left: 0;bottom: 0;
  }
  .right-box-img {
    position: absolute;right: 0;bottom: 0;
  }
  .pre,.next{
    margin: 110px 25px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: cadetblue;
  }
  .pre img,.next img{
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  .active{
    background-color: cadetblue;
  }
  .activeImg{
    display: block;
  }
</style>
