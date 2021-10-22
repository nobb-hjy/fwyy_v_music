<template>
    <div id="left-menu">
      <ul class="menu">
        <li>
          <img src="../../../assets/images/leftmenu/music.svg" alt="">
          <router-link to="/findmusic">发现音乐</router-link>
        </li>
        <li>
          <img src="../../../assets/images/leftmenu/music-line.svg" alt="">
          <router-link to="/mymusic">我的音乐</router-link>
        </li>
        <li>
          <img src="../../../assets/images/leftmenu/friend.svg" alt="">
          <a href="">朋友</a>
        </li>
        <li>
          <img src="../../../assets/images/leftmenu/music-line.svg" alt="">
          <a href="">商城</a>
        </li>
        <li>
          <img src="../../../assets/images/leftmenu/music-line.svg" alt="">
          <a href="">音乐人</a>
        </li>
        <li>
          <img src="../../../assets/images/leftmenu/music-line.svg" alt="">
          <a href="">下载客户端</a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "LeftBar"
  }
</script>

<style scoped>

  #left-menu{
    display: block;
    width: 15%;
    height: calc(100% - 93px);
    padding-top: 10px;
    padding-left: 20px;
    background-color: #191B1F;
    font-size: 14px;
  }
    .menu li{
      position:relative;;
      list-style: none;
      margin: 7px 0px;
      height: 35px;
    }
    .menu li img{
      left: 5px;
      width: 18px;
      height: 18px;
    }
    a{
      left: 28px;
      display: inline-block;
      height: 18px;
      line-height: 18px;
      color: gainsboro;
    }
    .menu li img,a{
      position: absolute;
      top: 5px;
    }
</style>
