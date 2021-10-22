<template>
  <div id="app">
    <main-nav-bar class="top"></main-nav-bar>
    <main-bar class="center"></main-bar>
     <main-tab-bar class="bottom"></main-tab-bar>
  </div>
</template>

<script>
import Scroll from "./components/common/scroll/Scroll";

import MainNavBar from "./components/content/mainnavbar/MainNavBar";
import MainTabBar from "./components/content/maintabbar/MainTabBar";
import MainBar from "./components/content/mainbar/MainBar";

  export default {
    name:'App',
    components:{
    //  2.注册组件
      Scroll,
      MainNavBar,
      MainTabBar,
      MainBar,
    },
  }
</script>

<style>
  @import 'assets/css/common/base.css';
</style>
