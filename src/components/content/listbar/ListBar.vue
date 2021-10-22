<template>
    <div class="list-bar">
      <div class="left">
        <div class="left-img"><slot name="left-img"></slot></div>
        <slot name="left-text"></slot>
      </div>
      <div class="center">
<!--        用这个组件的地方传值  :listText="[..]"-->
        <div class="center-list" v-for="item in listText">
          <a>{{item}}</a>
        </div>
      </div>
      <div class="right">
        <div class="box"><slot name="right-text"></slot></div>
        <div class="box"><slot name="right-img"></slot></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ListBar",
    props:{
      listText:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 750px){
    .list-bar {
      width: 98%;
      margin: 20px auto 10px;
    }
    .center-list{
      padding: 0 5px;
    }
  }
  @media screen and (min-width: 750px){
    .list-bar {
      width: 70%;
      margin: 20px auto 10px;
    }
    .center-list{
      padding: 0 10px;
    }
  }
  .list-bar{
    display: flex;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
    border-bottom: 2px solid red;
  }
  .left{
    display: flex;
    width: 30%;
    font-size: 1rem;
    /*background-color: #ff8198;*/
  }
  .left-img{
    margin-top: 11px;
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
  .center{
    display: flex;
    /*flex: 1;*/
    width: 60%;
    font-size: 13px;
  }
  .center-list{
    /*padding: 0 10px;*/
    margin-top: 11px;
    height: 16px;
    line-height: 22px;
  }
  .right{
    position: relative;
    display: flex;
    justify-items: right;
    width: 20%;
    font-size: 13px;
  }
  .right img{
    position: absolute;
    right: 0;
    margin-top: 11px;
    width: 20px;
    height: 20px;
  }
  .right span{
    position: absolute;
    right: 25px;
    width: 30px;
    height: 25px;
  }
</style>
