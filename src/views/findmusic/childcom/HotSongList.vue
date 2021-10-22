<template>
    <div class="list-bar">
      <div class="title">
        <div class="img"><slot name="title-img"></slot></div>
        <slot name="title-text"></slot><br>
        <div class="btn"><slot name="play"></slot></div>
        <div class="btn"><slot name="collect"></slot></div>
      </div>
      <div class="list">
        <slot name="list"></slot>
      </div>
      <div class="more">
        <slot name="more"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HotSongList",
  }
</script>

<style scoped>
  .list-bar{
    position: relative;
  }
  .title{
    position: relative;
    height: 160px;
    box-sizing: border-box;
    padding-top: 30px;
    padding-left: 145px;
    font-size: 15px;
    line-height: 30px;
    color: white;
    font-weight: bold;
    /*background-color: #17233d;*/
  }
  .title .img{
    position: absolute;
    left: 30px;
    width: 100px;
    height: 100px;

  }
  .title .img img{
    width: 100px;
    height: 100px;

  }
  .title .btn{
    display: inline-block;
    width: 35px;height: 45px;
    padding-top: 10px;
  }
  .title .btn img{
    width: 25px;
    height: 25px;
  }
  .more{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    font-size: 14px;
    text-align: center;
  }
</style>
