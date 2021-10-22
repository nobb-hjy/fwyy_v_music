<template>
    <div class="hot-playlist">
      <div>
        <list-bar :list-text="['华语','流行','摇滚','民谣','电子']">

          <div class="left-img-box" slot="left-img"></div>
          <div slot="left-text">热门推荐</div>

          <span class="right-text" slot="right-text">
          <a href="">更多</a>
          </span>
          <img slot="right-img" src="../../../assets/images/navbar/next.svg" alt=""/>
        </list-bar>

        <div class="rem-playlist">
          <div class="playlist-box" v-for="(item,index) in hotplaylist">
            <div class="playlist-img">
              <img :src="item.picUrl" alt="">
            </div>
            <div class="playlist-type">

            </div>
            <div class="playlist-detail">
              <a href="">
                {{item.name}}
              </a>
            </div>
          </div>
        </div>

      </div>

      <div  class="new-album">
        <list-bar>
          <div class="left-img-box" slot="left-img"></div>
          <div slot="left-text">新碟上架</div>

          <span class="right-text" slot="right-text">
          <a href="">更多</a>
        </span>
          <img slot="right-img" src="../../../assets/images/navbar/next.svg" alt=""/>
        </list-bar>
        <div class="album-box">
          <div class="album-box-left"
               @click="changeBox()">
            <img src="../../../assets/images/navbar/back.svg" alt="">
          </div>

          <div class="album-box-center">
            <div class="album-box-center-box">
              <div class="change-box">
                <div class="album-box-center-img"
                     v-show="currentAlbum===1"
                     v-for="(item,index) in hotalbum.slice(0,5)">
                  <img :src="item.picUrl" alt="">
                  <span class="song-name">{{item.name}}</span><br>
                  <span class="songer-name">{{item.artists[0].name}}</span>
                </div>
              </div>

              <div class="change-box">
                <div class="album-box-center-img"
                     v-show="currentAlbum===2"
                     v-for="(item,index) in hotalbum.slice(5,10)">
                  <img :src="item.picUrl" alt="">
                  <span class="song-name">{{item.name}}</span><br>
                  <span class="songer-name">{{item.artists[0].name}}</span>
                </div>
              </div>

            </div>
          </div>

          <div class="album-box-right"
               @click="changeBox()">
            <img src="../../../assets/images/navbar/next.svg" alt="">
          </div>
        </div>
      </div>

      <div>
        <list-bar>
          <div class="left-img-box" slot="left-img"></div>
          <div slot="left-text">榜单</div>

          <span class="right-text" slot="right-text">
          <a href="">更多</a>
        </span>
          <img slot="right-img" src="../../../assets/images/navbar/next.svg" alt=""/>
        </list-bar>
        <div class="top-list">
          <div  class="top-list-box"
            v-for="(item1,index) in toplist.slice(0,1)">
           <hot-song-list>
             <img slot="title-img"
                  @load="imgLoad()"
                  :src="item1.coverImgUrl" alt="">
             <span slot="title-text">{{item1.name}}</span>
             <img slot="play" src="../../../assets/images/mainbar/play.svg" alt="播放">
             <img slot="collect" alt="收藏" src="../../../assets/images/mainbar/star-full.svg">
             <ul slot="list"
                 class="song-list">
               <li v-for="(item2,index) in upSong.slice(0,10)"
                   @mouseenter="showCtrlBar"
                   @mouseleave="closeCtrlBar"
                   :key="index">
                 <span>{{index+1}}</span>{{item2.name}}
                 <button><img alt="收藏" src="../../../assets/images/mainbar/star-full.svg"></button>
                 <button><img alt="添加到播放列表" src="../../../assets/images/mainbar/folder-plus.svg"></button>
                 <button><img src="../../../assets/images/mainbar/play.svg" alt="播放" ></button>
               </li>
             </ul>
             <div class="more" slot="more">
               <a href="">查看更多</a>
             </div>
           </hot-song-list>
          </div>

          <div  class="top-list-box"
                v-for="(item1,index) in toplist.slice(1,2)">
            <hot-song-list>
              <img slot="title-img"
                   @load="imgLoad()"
                   :src="item1.coverImgUrl" alt="">
              <span slot="title-text">{{item1.name}}</span>
              <img slot="play" src="../../../assets/images/mainbar/play.svg" alt="播放">
              <img slot="collect" alt="收藏" src="../../../assets/images/mainbar/star-full.svg">
              <ul slot="list"
                  class="song-list">
                <li v-for="(item2,index) in newSong.slice(0,10)"
                    @mouseenter="showCtrlBar"
                    @mouseleave="closeCtrlBar">
                  <span>{{index+1}}</span>{{item2.name}}
                  <button><img alt="收藏" src="../../../assets/images/mainbar/star-full.svg"></button>
                  <button><img alt="添加到播放列表" src="../../../assets/images/mainbar/folder-plus.svg"></button>
                  <button><img alt="播放" src="../../../assets/images/mainbar/play.svg"></button>
                </li>
              </ul>
              <div class="more" slot="more">
                <a href="">查看更多</a>
              </div>
            </hot-song-list>
          </div>

          <div  class="top-list-box"
                v-for="(item1,index) in toplist.slice(2,3)">
            <hot-song-list>
              <img slot="title-img"
                   @load="imgLoad()"
                   :src="item1.coverImgUrl" alt="">
              <span slot="title-text">{{item1.name}}</span>
              <img slot="play" src="../../../assets/images/mainbar/play.svg" alt="播放">
              <img slot="collect" alt="收藏" src="../../../assets/images/mainbar/star-full.svg">
              <ul slot="list"
                  class="song-list">
                <li v-for="(item2,index) in createSong.slice(0,10)"
                    @mouseenter="showCtrlBar"
                    @mouseleave="closeCtrlBar">
                  <span>{{index+1}}</span>{{item2.name}}
                  <button><img alt="收藏" src="../../../assets/images/mainbar/star-full.svg"></button>
                  <button><img alt="添加到播放列表" src="../../../assets/images/mainbar/folder-plus.svg"></button>
                  <button><img alt="播放" src="../../../assets/images/mainbar/play.svg"></button>
                </li>
              </ul>
              <div class="more" slot="more">
                <a href="">查看更多</a>
              </div>
            </hot-song-list>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  var $=require("jquery");
  import ListBar from "../../../components/content/listbar/ListBar";
  import HotSongList from "./HotSongList";
  import {getHotPlayList,
    getPersonalized,
    getHotAlbum,
    getTopList,
    getTopListDeatils,
    getSong,
    getPlayListDetails} from "../../../network/findmusic/recommend";
  export default {
    name: "HotPlayList",
    data(){
      return{
        hotplaylist:[],
        hotalbum:[],
        toplist:[],
        toplistdes:[],
        upSong:[],//飙升榜
        newSong:[],//新歌榜
        createSong:[],//原创榜
        currentAlbum:1,
        isLoad:false,
      }
    },
    components:{
      ListBar,
      HotSongList,
    },
    created() {
      //得到八个热门推荐歌单
      getPersonalized(8).then(res=>{
        this.hotplaylist=res.result
        // console.log(this.hotplaylist)
      })
      //新碟上架  10个
      getHotAlbum(10).then(res=>{
        this.hotalbum=res.albums.slice(0,10)
        // console.log(this.hotalbum)
      })
    //  榜单
      getTopList().then(res=>{
        this.toplist=res.list
        // console.log(this.toplist[0].id)
        // console.log(this.toplist[1].id)
        // console.log(this.toplist[2].id)
      })
    //  榜单详情
      getTopListDeatils().then(res=>{
        this.toplistdes=res
        // console.log(this.toplistdes)
      })
    //  获取歌单详情
      getPlayListDetails(19723756).then(res=>{
        this.upSong=res.playlist.tracks
        // console.log(this.upSong)
      })
      getPlayListDetails(3779629).then(res=>{
        this.newSong=res.playlist.tracks
      })
      getPlayListDetails(2884035).then(res=>{
        this.createSong=res.playlist.tracks
      //  请求数据后，让scroll刷新一下，重新获取高度
        this.$emit('getScrollHeight')
      })

    },
    mounted() {

      this.startTime()

    },
    methods:{
      //切换新碟上架盒子
      changeBox(){
        if(this.currentAlbum===1){
          this.currentAlbum=2
        }else{
          this.currentAlbum=1
        }
        $(".album-box-center-img").fadeIn(2000)
      },
      //开始动画
      startTime(){
        this.playTime=window.setInterval(()=>{
          this.changeBox()
        },4000)
      },
      stopTime(){
        window.clearInterval(this.playTime)
      },
      imgLoad(){
        if(!this.isLoad){
          this.$emit('getHeight')
          this.isLoad=true
        }
      },
    //  鼠标移入，展现歌单的三个操作按钮,移到那个li，就给哪个li一个样式
      showCtrlBar(e){
        //e.target和$(e.target)可以拿到当前要操作的li
        $(e.target).addClass("isShow")
      },
      closeCtrlBar(e){
        $(e.target).removeClass("isShow")
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 750px){
    .rem-playlist,.album-box{
      width: 98%;
      margin: 0 auto;
    }
    .playlist-box{
      margin: 0 1rem;
    }
  }
  @media screen and (min-width: 750px){
    .rem-playlist,.album-box{
      width: 900px;
      margin: 0 auto;
    }
  }
  .left-img-box{
    width: 20px;
    height: 20px;
    border-radius: 10px;
    /*background-color: #0c73c2;*/
    background: url('../../../assets/images/mainbar/multimg.png') no-repeat -233px -160px;
  }
  .right-text{
    float: right;
  }

  .rem-playlist{
    /*让子盒子 成多行多列均匀分布*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 15px;
  }
  .playlist-box{
    margin-bottom: 0.9375rem;
    width: 11.12rem;
    height:15rem;
  }
  .playlist-img img{
    width: 100%;
    height:11.12rem;
  }
  .playlist-img{
    width: 100%;
    height:11.12rem;
    margin-bottom: 0.555rem;
  }
  .playlist-detail{
    font-size: 14px;
    line-height: 1.111rem;
    width: 100%;
    height:3.888rem;
  }
  .playlist-detail a:hover{
    text-decoration: underline;
  }

  .album-box{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 200px;
    background-color: #19192b;

  }
  .album-box-left,.album-box-right{
    width: 30px;
    height: 30px;
    border-radius: 15px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .album-box-right img,.album-box-left img{
    width: 30px;
    height: 30px;
  }
  .album-box-center{
    position: relative;
    width: 90%;
    height: 100%;
    overflow: hidden;
  }
  @keyframes albumIn {
    from{left:-900px;}
    to{left:0}
  }
  .album-box-center-box{
    position: relative;
    padding-left: 3px;
    width: 100%;
    height: 100%;
    animation-duration: 3s;
    animation-name: albumIn;
  }
  .change-box{
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .album-box-center-img{
    /*flex: 1;*/
    width: 7rem;
    height: 8.5rem;
  }
  .album-box-center-img .song-name{
   font-size: 12px;
    color: dimgray;
  }
  .album-box-center-img .songer-name{
    font-size: 8px;
    color: grey;
  }
  .album-box-center-img img{
    width: 7rem;
    height: 7rem;
  }

  .top-list{
    width: 70%;
    margin: 30px auto 50px;
    display: flex;
  }
  .top-list-box{
    flex: 1;
  }
  .song-list{

    padding-bottom: 30px;
    width: 100%;
    height: auto;
  }
  .song-list li{
    list-style: none;
    font-size: 13px;
    height: 44px;
    line-height: 44px;
  }
  .song-list li span{
    display: inline-block;
    margin-left: 10px;
    text-align: center;
    width: 40px;height: 44px;
    font-size: 16px;
  }
  .song-list li:nth-child(-n+3) span{
    color: darkred;
  }
  .top-list-box{
    background-color: #17233d;
  }

  ul li:nth-child(odd){
    background-color: #19192b;;
  }
  ul li button{
    display: none;
    width: 35px;
    height: 35px;
    margin-top: 4px;
    float: right;
    background: none;
    border: none;
    cursor: pointer;
  }
  ul li button img{
    width: 20px;
    height: 20px;
  }
  .more a{
    height: 50px;
    width: 100%;
    line-height: 50px;
  }
  .isShow button{
    display: block;
  }
</style>
