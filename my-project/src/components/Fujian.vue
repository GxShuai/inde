<template>
  <div class="Fujian">
    <!---头部--->
    <div class="Qugu" :style="none">
      <div class="He">

        <span @click="ttc"></span>

        <h2>2017福建乡镇公务员
        </h2>
      </div>
    </div>

     <!---侧长识--->
    <div class="Ce">
      <div class="Sch">
        <h2>乡镇公务员行测常识: 灾害逃生常识</h2>
        <div class="Zhong">
          中公教育公务员考试网 2017-02-13 11:18
          <span>中公教育</span>
        </div>
      </div>
    </div>
     <!----导语-->
    <div class="Dao">
      [导语]乡镇公务员考试帮助考生，公务员考试帮助考生公务员考试帮助考生公务员考试帮助考生公务员考试帮助考生
      公务员考试帮助考生公务员考试帮助考生公务员考试帮助考生，公务员考试帮助考生
    </div>
     <!----逃生-->
      <div class="Tao">
        <h1>--.地震逃生</h1>

        <h2 v-for="item of arr">在第郑中华空寂乎关于分摊vg乘法日门口那就把一个在第郑中华空寂乎关于分摊vg乘法日门口那就把一个
          在第郑中华空寂乎关于分摊vg乘法日门口那就把一个
          在第郑中华空寂乎关于分摊vg乘法日门口那就把一个。
          {{item.name}}
         </h2>
          <div class="Dian" @click="tet" ref="tct">点击查看更多</div>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'Fujian',
    data(){
        return{
           none:{
            backgroundImage: "url(" + require("../assets/guo.gif") + ")" ,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
          },
          arr:[]
        }
    },
    created(){
      this.axios.get('../../static/tttx.json').then((res)=>{
        console.log(res.data)
      })
    },
    methods:{
        tet(){
          this.axios.get('../../static/tttx.json').then((res)=>{
             this.arr=res.data
          })
          this.$refs.tct.style.display='none'
        },
      ttc(){
            this.$router.push('/exam')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .Qugu{
    width:750px;
    height:128px;
    display:flex;
    span{
      width: 21px;
      height: 21px;
      border-top: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
      transform: rotate(-45deg);
    }

    h2{
      font-size:31px;
      color:#ffffff;
      position:absolute;
      left:172px;
    }
    .He{
      width:690px;
      height:33px;
      margin:0 auto;
      margin-top:68px;
      position:relative;
      display:flex
    }
  }
.Ce{
  width:750px;
  height:178px;
  border-bottom:1px solid #cccccc;/*no*/
  box-sizing:border-box;
  .Sch{
    width:667px;
    height:84px;
    margin-left:53px;
    margin-top:36px;
    position:relative
    h2{
      font-size:30px;
      margin-left:80px;
    }
    .Zhong{
      color: #cccccc;
      height:24px;
      width:667px;
      position:absolute;
      bottom:0px;
      span{
        color:red;
        float right
      }
    }
  }
}
  .Dao{
    width:692px;
    height:226px;
    margin 0 auto
    font-size:27px;
    line-height:61px;
    text-indent:2em
  }
  .Tao{
    width:692px;
    margin 0 auto
    h1{
      margin-top:41px;
      font-size:28px;
    }
    h2{
      text-indent:2em;
      font-size:27px;
      margin-top:40px;
      line-height:45px;
    }
  }
  .Dian{
    text-align center
    line-height:157px;
    width:692px;
    height:157px;
    margin:0 auto
    font-size:22px;
    color: #cccccc
  }
</style>
