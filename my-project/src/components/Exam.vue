<template>
  <div class="Exam">
     <!---头部--->

      <div class="Qugu" :style="none">
        <div class="He">

          <span @click="txet"></span>

          <h2>考试资讯</h2>
         <h3>全国</h3>
          <select class="Hb">
            <option>河北</option>
          </select>
        </div>
      </div>

       <!---当前--->
    <span class="Dang">当前是全国考试公告列表，点击全国查看具体省份</span>
      <!---选项卡--->
    <div class="Xuan">
      <el-tabs v-model="activeName" class="Ele" >


        <el-tab-pane label="公告大纲" name="first">

              <div class="Kao">
                <img src="../assets/ding.gif">
                <h2>2017上东乡镇公务员考试公告</h2>
                <div class="Shi">
                  考试公告
                </div>
              </div>
              <div class="Hui"></div>

               <ul class="Lis">
                 <li v-for="item of arr">
                   <span class="Yuan"></span>
                   {{item.name}}
                   <router-link to="/fujian">
                    <span class="Jant"></span>
                   </router-link>
                 </li>
               </ul>
          <div class="Geng" @click="tet" ref="jk">加载更多</div>
        </el-tab-pane>
        <el-tab-pane label="考试新闻" name="second">考试新闻</el-tab-pane>
        <el-tab-pane label="报告指导" name="third">报告指导</el-tab-pane>
        <el-tab-pane label="哈哈哈哈" name="fourth">哈哈哈哈</el-tab-pane>
      </el-tabs>
    </div>
    <!--末-->
    <div class="MoM">

      <el-row :gutter="0">
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo1.gif">
          <h1>在线咨询</h1>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo2.gif" >
          <h1>官方微信</h1>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo3.gif" >
          <h1>课程辅导</h1>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo4.gif">
          <h1>交流群</h1>
        </div></el-col>
      </el-row>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'Exam',

    data(){
        return{
            none:{
              backgroundImage: "url(" + require("../assets/guo.gif") + ")" ,
              backgroundRepeat: 'no-repeat',
              backgroundSize:'cover',
            },
           activeName: 'first',
          arr:[],
          n:-5
        }
    },
   created(){
       this.axios.get('../../static/txt.json').then((res)=>{
         this.arr=res.data.splice(0,10)
       })
   },
   methods:{
     tet(){   //----点击时是异步 同时执行this.n+=5
       if(this.n<2){
         this.axios.get('../../static/txt.json').then((res)=>{
           let ht=res.data.slice(10+this.n,15+this.n)
           this.arr=this.arr.concat(ht)  //---把原来的合并在一起concat
         })
       }else {
         this.$message({
           showClose: true,
           message: '没有可加载的内容',
           type: 'warning'
         });
            this.$refs.jk.style.display='none'

       }
       this.n+=5
     },
     txet(){
         this.$router.push('/')
     }
   }
  }
</script>

<style scoped lang="stylus">
 .Qugu{
   width:750px;
   height:128px;
   display:flex
  span{
    width: 21px;
    height: 21px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(-45deg);
  }

   h2{
     font-size:31px;
     color:#ffffff;
     position:absolute;
     left:258px;
   }

  h3{
    font-size:27px;
    color:#ffffff;
    position:absolute;
    left:588px;
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
.Hb{
  position:absolute;
  right:0px;
  top:6px;
  width:40px;
  height:20px;
  border:1px solid green;/*no*/
}
  .Dang{
    display block
    width:750px;
    height:40px;
    font-size:21px;
    text-align center
    line-height:40px;
    color:red;
    background:#eeeeee
  }
.Xuan{
  width:700px;
  margin:0 auto;
  position:relative
}
  .Kao{
    width:690px;
    height:50px;
    margin-top:15px;
    align-items: center;
    display: flex;
    img{
      width:47px;
      height:32px;
    }
    h2{
      font-size:28px;
      margin-left:18px;
    }
    .Shi{
      width:158px;
      height:50px;
      border:1px solid  #16ccaf;/*no*/
      box-sizing:border-box;
      margin-left:1.2477rem;
      border-radius:10%;
      font-size:26px;
      color:#16ccaf;
      text-align center
      line-height:50px;
    }
  }
.Hui{
  width:750px;
  height:12px;
  background:#eeeeee;
  margin-top:30px;
}
  .Lis li{
      width:690px;
      height:98px;
     border-bottom:1px solid #ccc;/*no*/
     box-sizing border-box
     line-height:98px;
    font-size:25px;
    .Yuan{
      line-height:0.133333rem;
      display: inline-block;
      width: 0.133333rem;
      height: 0.133333rem;
      border: 0.013333rem solid #cccccc;
      border-radius: 1.333333rem;
      background-color: #fff;
      opacity: 0.5;
    }
  }
  .Jant{
    display: inline-block;
    width: 0.226667rem;
    height: 0.226667rem;
    border-top: 0.026667rem solid #000;
    border-right: 0.026667rem solid #000;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    float right
    margin-top:40px;
  }
  .Geng{
    width:690px;
    height:80px;
    border-bottom:1px solid #999999;/*no*/
    text-align center
    line-height:80px;
    font-size:22px;
    color:#999999
  }
.MoM{
  width:750px;
  height:1rem;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {

    img{
      width:37px;
      height:37px;
      margin-left:78px;
      margin-top:14px
    }
    h1{
      position:absolute;
      bottom:3px;
      margin-left:0.78rem;
      color:#ccc
    }
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 98px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
