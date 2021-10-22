<template>
  <!--    用better-scroll实现局部滚动-->
<!--  用ref绑定这个元素  ref可以绑定元素，也可以绑定组件-->
    <div class="wrapper" ref="wrapper">
<!--      因为scroll作用于wrapper的第一个子元素，所以要用一个盒子把所有东西包起来-->
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BetterScroll from "better-scroll";
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return{
        bscroll:null,
        message:'拿到了scroll'
      }
    },
    //组件创建后调用，template还没挂载上去
    // created() {
    //  // let bs= new BetterScroll('.content',{})
    //   this.scroll=new BetterScroll(this.$refs.aaaa,{
    //
    //   })
    // },
    mounted() {
      //1.创建betterscroll对象
      // this.scroll=new BetterScroll(this.$refs.aaaa,{
      //
      // })
      //{}里面写一些可选参数  probeType:侦测类型  0,1都是不侦测实时的位置，2在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测，3.只要是滚动，都侦测
      // this.bscroll=new BetterScroll(document.querySelector(".wrapper"),{
        //用类名来获取元素，不太安全，万一在引用的地方也有一个叫wrapper的，那么可能获取的不准确。方法：this.$refs.refname
      this.bscroll=new BetterScroll(this.$refs.wrapper,{
        //有的时候用户不需要实时监听，所以这个属性，不这样写,props里面写，在用的地方再加上,在把属性值传过来（让别人决定）
        // probeType:3,
        probeType: this.probeType,
        //允许这个wrapper的点击事件有效
        click:true,
        //监听上拉加载，有的不需要监听这个，所以把这个也写成一个属性
        // pullUpLoad:true,
        pullUpLoad: this.pullUpLoad,
        //允许鼠标滑轮滚动实现滑动效果
        mouseWheel:true,
      })
      //2.监听滚动的位置
      this.bscroll.on('scroll',(position)=>{
        // console.log(position)
        //谁想用谁就接收
        this.$emit('bscroll',position)
      })
      //3.监听上拉事件
      this.bscroll.on('pullingUp',()=>{
        //只打印一次，所以在加载完后要调用步骤3
        // console.log('上拉加载更多')
        //  1.发送网络请求，请求更多页的数据
        this.$emit('pullingUp')
        //  2.等数据请求完成，并且将新的数据展示出来

        //  3.往下拉看完加载的所有数据后，再次需要上拉加载动作
        // this.bscroll.finishPullUp()
      })

      //返回顶部
      // this.bscroll.scrollTo(0,0)

      // let bScroll=new BetterScroll(document.querySelector('.wrapper'),{
      //   probeType:3
      // })
      // bScroll.on('scroll',(position)=>{
      //   console.log(position)
      // })
    },
    methods:{
      //默认值300，
      scrollTo(x,y,time=300){
        this.bscroll && this.bscroll.scrollTo(x,y,time)
      },
    //  加上this.bscroll &&更严谨，顺便检测一下有没有bscroll这个对象
    //  封装一下finishPullUp()方便其他组件调用
      finishPullUp(){
        this.bscroll && this.bscroll.finishPullUp()
      },
      refresh(){
        this.bscroll && this.bscroll.refresh()
      },
      getScrollY(){
        return this.bscroll ? this.bscroll.y : 0
      }
    }
  }
</script>

<!--scoped:作用域，样式只在当前组件起效果-->
<style scoped>
  .wrapper{
    /*高度=窗口高度(home的高度，因为home的height=100vh)-‘tabbar’-navbar*/
    /*height: calc(100% - 93px);*/

    /*background-color: #ff8198;*/
    /*overflow-y: scroll;*/
  }
</style>
