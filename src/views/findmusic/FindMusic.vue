<template>
    <div id="find-music">
      <control-bar class="control-bar" :title="['推荐','歌单','排行榜','主播电台','歌手','新碟上架']"/>
      <div class="box"></div>
      <scroll class="scroll-content"
              ref="findMusicScroll"
              :probe-type="3"
              :pull-up-load="true">
      <swiper class="rem-swiper"
              ref="swiper"
              @swiperImgLoad="swiperImgLoad"></swiper>
      <hot-play-list @getScrollHeight="getScrollHeight"/>
      </scroll>
    </div>
</template>

<script>
  import ControlBar from "../../components/common/controlbar/ControlBar";
  import Swiper from "../../components/common/swiper/Swiper";
  import Scroll from "../../components/common/scroll/Scroll";

  import HotPlayList from "./childcom/HotPlayList";
  import Personalized from "./childcom/Personalized";

  export default {
    name: "FindMusic",
    data(){
      return{
        setHotHeight:0,
      }
    },
    components:{
      ControlBar,
      Swiper,
      Scroll,
      HotPlayList,
      Personalized,

    },
    methods:{
      swiperImgLoad(){
        this.setHotHeight=this.$refs.swiper.$el.offsetTop
        this.$refs.findMusicScroll.bscroll.refresh()
      },
      getScrollHeight(){
        this.$refs.findMusicScroll.bscroll.refresh()
      },

    },
    mounted() {

    }
  }
</script>

<style scoped>
  @media screen and (max-width: 750px){
    .scroll-content{
      width: 100%;
    }
  }
  @media screen and (min-width: 750px){
    .scroll-content{
      width: calc(100% - 15%);
    }
  }
  #find-music{
    background-color: #17181C;
    width: 100%;
  }
  .box{
    height: 50px;
    width: 100%;
  }
  .control-bar{
    position: fixed;
  }
  .scroll-content{
    position: absolute;
    top: 93px;
    right: 0;
    /*width: calc(100% - 15%);*/
    height: calc(100% - 140px);
    overflow: hidden;
    background-color: #17181C;
  }
</style>
