<template>
    <nav-bar>
      <nav-bar-item class="left">
        <img class="nav-left-img" src="../../../assets/images/navbar/logo.jpg" alt="">
        <span class="left-span-text">网易云音乐</span>
        <img class="dropdown-img" src="../../../assets/images/navbar/logo.jpg" alt="">
<!--        <a href="#">-->
<!--          <img class="nav-left-svg" src="../../../assets/images/navbar/back.svg" alt="">-->
<!--        </a>-->
      </nav-bar-item>
      <nav-bar-item class="center">
        <div class="nav-search">
          <label for="search">
            <input type="text" id="search"/>
          </label>
          <a href="">
            <img src="../../../assets/images/navbar/search.svg" alt="">
          </a>
        </div>
      </nav-bar-item>
      <nav-bar-item class="right">
        <img class="logo-img" src="../../../assets/images/navbar/white.jpg" alt="">
        <span class="right-span-text">未登录</span>
<!--        <div class="right-box">-->
<!--          <a href="" title="最小化">-->
<!--            <img src="../../../assets/images/navbar/min.svg" alt="最小化">-->
<!--          </a>-->
<!--          <a href="" title="还原">-->
<!--            <img src="../../../assets/images/navbar/reset.svg" alt="还原">-->
<!--          </a>-->
<!--          <a href="" title="退出">-->
<!--            <img src="../../../assets/images/navbar/x.svg" alt="退出">-->
<!--          </a>-->
<!--        </div>-->
      </nav-bar-item>
    </nav-bar>
</template>

<script>
  import NavBar from "../../common/navbar/NavBar";
  import NavBarItem from "../../common/navbar/NavBarItem";

  export default {
    name: "MainNavBAar",
    components:{
      NavBar,
      NavBarItem,
    },
    // methods:{
    //   displayMenu(){
    //     this.$emit('displayMenu')
    //   }
    // }

  }
</script>

<style scoped>
  @media screen and (max-width: 450px){
    .left span,.right span{
      display: none;
    }
    .nav-left-img{
      display: none;
    }
    .dropdown-img{
      display: block;
    }
  }
  @media screen and (min-width: 450px){
    .left span,.right span{
      display: inline-block;
    }
    .dropdown-img{
      display: none;
    }
  }
  .left,.right{
    position: relative;
    width: 15%;
    padding: 7px 5px 7px 10px;
    line-height: 44px;
  }
  .left .nav-left-img ,.dropdown-img{
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  .left span{
    position: absolute;
    top: 7px;
    /*display: inline-block;*/
    line-height: 30px;
    height: 30px;
    width: 100px;
  }
  .center{
    /*flex: 1;*/
    display: flex;
    justify-content: left;
    width: 70%;
  }
  .nav-search{
    position: relative;
    margin-top: 5px;
    margin-left: 5px;
    width: 250px;
    height: 35px;
    border: 1px solid black;
    border-radius: 5px;
    /*margin-left: 100px;*/
    background-color: white;
  }
  .nav-search input{
    position: absolute;
    left: 5px;
    top: 0;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    width: 210px;
    border: 0;
    outline: none;
  }
  .nav-search img{
    position: absolute;
    right: 5px;
    top: 0;
    width: 30px;
    height: 30px;
  }
  .right{
    width: 250px;
    position: relative;
  }
  .right .logo-img{
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: white;
  }
  .right span{
    position: absolute;
    top: 7px;
    /*display: inline-block;*/
    height: 30px;
    line-height: 30px;
  }
  .right-box{
    position: absolute;
    display: flex;
    top: 7px;
    right: 5px;
    width: 100px;
    height: 30px;
  }
  .right a{
    flex: 1;
    display: inline-block;
    width: 25px;
    height: 25px;
  }
  .right a img{
    width: 25px;
    height: 25px;
  }
</style>
