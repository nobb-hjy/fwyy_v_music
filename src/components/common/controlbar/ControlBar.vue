<template>
    <div id="control-bar">
      <div class="item"
           v-for="(item,index) in title"
           :class="{active:currentIndex===index}"
           @click="itemClick(index)">
        <span class="item-title">{{item}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ControlBar",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 750px){
    #control-bar{
      margin-left: 0;
      width: 100%;
      font-size: 14px;
    }
    .item{
      line-height: 44px;
      margin: 0 5px;
      padding: 0 4px;
      margin-bottom: 3px;
    }
  }
  @media screen and (min-width: 750px){
    #control-bar{
      margin-left: 15%;
      width: calc(100% - 15%);
    }
    .item{
      line-height: 44px;
      margin: 0 15px;
      padding: 0 4px;
      margin-bottom: 3px;

    }
  }
  #control-bar{
    display: flex;
    /*margin-left: 15%;*/
    /*flex子项目水平居中排列*/
    justify-content: center;
    height: 44px;
  }
  .active{
    border-bottom: 3px solid cadetblue;
    border-radius: 2px;
  }
</style>
