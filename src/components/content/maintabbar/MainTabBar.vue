<template>
    <tab-bar class="tab-bar">
      <tab-bar-item class="left">

      </tab-bar-item>
      <tab-bar-item class="center">
        <div>
          <button>
            <img src="../../../assets/images/tabbar/pre.png" alt="">
          </button>
        </div>
        <div>
          <button>
            <img src="../../../assets/images/tabbar/play.png" alt="">
          </button>
        </div>
        <div>
          <button>
            <img src="../../../assets/images/tabbar/next.png" alt="">
          </button>
        </div>
      </tab-bar-item>
<!--      <tab-bar-item class="center">-->
<!--        <Progress></Progress>-->
<!--      </tab-bar-item>-->
      <tab-bar-item class="right">

      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";
  import Progress from "../../common/progress/Progress";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem,
      Progress,
    }
  }
</script>

<style scoped>
  .tab-bar{
    display: flex;
    position: fixed;
    right: 0px;
    left: 0px;
    bottom: 0px;
    /*width: 100%;*/
    height: 49px;
  }
  .left{
    /*display: flex;*/
    width: 15%;
    /*background-color: #ff8198;*/
  }
  .center{
    display: flex;
    justify-content: center;
    width: 70%
  }
  .right{
    width: 15%;
    /*background-color: #ff8198;*/
  }
  .center div{
    width: 49px;
    height: 49px;
    /*flex: 1;*/
  }
  .center div button{
    width: 100%;
    background: none;
    border: 0;
    height: 49px;
  }
  .center div button img{
    width: 40px;
    height: 40px;
  }
  /*.center{*/
  /*  flex: 1;*/
  /*}*/
  /*.right{*/
  /*  width: 250px;*/
  /*  height: 49px;*/
  /*}*/

</style>
