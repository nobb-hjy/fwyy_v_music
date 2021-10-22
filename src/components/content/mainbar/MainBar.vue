<template>
    <div id="main-bar" @touchmove="touchMove()" @touchstart="touchStart()">
      <left-menu class="left-menu" :class="{show:isShow}"></left-menu>
        <main-content class="main-content"></main-content>
    </div>
</template>

<script>
  import LeftMenu from "../leftmenu/LeftMenu";
  import MainContent from "../maincontent/MainContent";


  export default {
    name: "MainBar",
    data(){
      return{
        isShow:false,
      }
    },
    components:{
      LeftMenu,
      MainContent,

    },
    //鼠标移动事件，监听鼠标移动坐标
    // mousemove(){
    //   console.log(event.screenX)
    // },
    methods:{
      //移动端触摸移动
      touchMove(){
        //event.targetTouches[0].screenX---相对于计算机屏幕
        //event.targetTouches[0].clientX---相对于浏览器
        // console.log(event.targetTouches[0].clientX)
        if(event.targetTouches[0].clientX<=0) {
          this.isShow=true
        }
        },
      touchStart(){
        if(event.targetTouches[0].clientX>250){
          this.isShow=false
        }
      }
    },
    mounted() {

    },
    updated() {

    }
  }
</script>

<style scoped>
  @media screen and (max-width: 750px){
    #main-bar .left-menu{
      z-index: 9999;
      width: 200px;
      /*left: -300px;*/
      display: none;
    }
    #main-bar .main-content{
      width: 100%;
    }
    @keyframes leftboxin {
      from{left: -300px;}
      to{left:0}
    }
    #main-bar .show{
      color: red;
      display: block;
      animation-name: leftboxin;
      animation-duration: 500ms;
    }
  }
  @media screen and (min-width: 750px){
    .left-menu{
      display: block;
    }
  }
  #main-bar{
    /*margin-top: 44px;*/
    padding-top: 44px;
    height: calc(100% - 93px);
  }
  .left-menu{
    position: fixed;
    top: 44px;
    left: 0;

  }
</style>
