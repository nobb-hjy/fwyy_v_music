<template>
    <div id="process">
      <div class="line">
        <a href="">
          <div class="circle">

          </div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Progress"
  }
</script>

<style scoped>
  #process{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 22px;
  }
  .line{
    width: 80%;
    height: 3px;
    border: 1px solid #ffffff;
    border-radius: 2px;
    margin: 0px auto;
  }
  .circle{
    position: absolute;
    margin: 16px auto;
    top: 0;
    bottom: 0;
    width: 6px;
    height: 15px;
    background-color: cadetblue;
    border-radius: 3px;
  }
  /*.line{*/
  /*  margin: 24px auto;*/
  /*  width: 80%;*/
  /*  height: 3px;*/
  /*  border: 1px solid gainsboro;*/
  /*  border-radius: 2px;*/
  /*}*/

</style>
