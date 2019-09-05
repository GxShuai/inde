<template>
  <div class="My">
      <Quan/>
       <!--背景图-->
    <div class="Nav">
       <img :src="ul">
    </div>

         <!--轮播图-->
     <div class="Lun">
           <!--@someSwiperEvent="callback"--->
       <swiper :options="swiperOption" ref="mySwiper" >
         <!-- slides -->
         <swiper-slide>
           <img src="../assets/lun1.jpg">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/lun2.jpg">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/lun3.jpg">
         </swiper-slide>
         <swiper-slide>
           <img src="../assets/lun4.jpg">
         </swiper-slide>
         <!-- Optional controls -->
         <div class="swiper-pagination"  slot="pagination"></div>
         <div class="swiper-button-prev" slot="button-prev"></div>
         <div class="swiper-button-next" slot="button-next"></div>
       </swiper>
     </div>
               <!--面授课程-->
    <div class="Mso">
     <ul>
       <li v-for="item of arr">
         <img :src="item.sc">
         <h1 class="Zi">{{item.zi}}</h1>
       </li>
     </ul>
    </div>
        <!--最新活动-->
   <div class="Zxi">
      <!---右--->
     <div class="Let">
       <img src="../assets/zui.gif" class="Tu">
       <span class="Xian"></span>
     </div>
     <div class="Wen">
        <span>2017甘肃乡镇公务员考试笔试备考免费讲座陕西乡镇公务员考试模考活动</span>
     </div>
         <img src="../assets/san.gif" class="San">
   </div>
       <!---背景-->
    <div class="Bin"></div>
      <!------乡镇公务员--->
    <div class="Xiang">
     <div class="Zho">
       <img src="../assets/tou.gif">
       <div class="Zhen">乡镇公务员</div>
       <div class="XiaL">
         <select class="selectpicker form-control" title="请选择" name="level"
           id="level">
           <option>--选择报考省份--</option>
           <option value="1">一级（厂级）</option>
           <option value="2">二级（部门级）</option>
           <option value="3">三级（班级）</option>
         </select>
       </div>
       <div class="Jan">
         <router-link to="/exam">
        <span></span>
         </router-link>
       </div>
     </div>
    </div>
         <!---19日报名--->
    <div class="Bao">
      <ul>
        <li v-for="item of att">
          <span class="yuan"></span>
          {{item.yuan}}

        </li>
      </ul>
    </div>
       <!--末-->
    <div class="Mo">

      <el-row :gutter="0">
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo1.gif">
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo2.gif" >
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo3.gif" >
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <img src="../assets/mo4.gif">
        </div></el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import Quan from './Quan'
export default {
  name: 'My',
  components:{Quan},
  data(){
      return{
        att:[
          {yuan:'2017年福建选调生考试公告，19日'},
          {yuan:'2017年福建选调生考试公告，19日'},
          {yuan:'2017年福建选调生考试公告，19日'},
          {yuan:'2017年福建选调生考试公告，19日'},
        ],
        ul:require('../assets/Bei.gif'),
        swiperOption: {
          autoplay: 1000,//可选选项，自动滑动
          loop : true,
          pagination : '.pagination',
          paginationClickable:true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
        },
        arr:[
          {sc:require('../assets/mian1.gif'),zi:'面授课程'},
          {sc:require('../assets/mian2.gif'),zi:'网络课程'},
          {sc:require('../assets/mian3.gif'),zi:'图书材料'},
          {sc:require('../assets/mian4.gif'),zi:'在线讲座'},
          {sc:require('../assets/mian5.gif'),zi:'各地校区'},
        ],

      }

  },


}
</script>

<style scoped lang="stylus">
   //---头部
.Nav img{
     width:750px;
     height:128px;
}
   //---轮播图
   .Lun img{
     width:750px;
     height:303px;
   }
     //---面授课程
  .Mso{
    width:750px;
    height:220px;
    li{
      width:146px;
      height:220px;
      display:inline-flex;
      position:relative
      img{
        width:99px;
        height:98px;
        margin-top:40px;
        margin-left:30px;
      }
      .Zi{
        font-size:23px
        position:absolute;
         bottom:40px;
        left:27px;
      }
    }
  }
  .Zxi{
    width:750px;
    height:148px;
    border-top:1px solid #ccc;
    display:flex
    .Let{
      width:143px;
      height:148px;
      display: flex;
      justify-content: center;
      align-items: center;
      .Tu{
        width:83px;
        height:73px;
      }
      .Xian{
        position:relative;
        left:30px;
        width:1px;
        height:72px;
        background:#ccc;
        border:1px dashed #ccc;/*no*/
      }
    }
  }
  .Wen{
    width:474px;
    height:64px;
    margin-top:41px;
    margin-left:30px;
    font-size:23px;
    line-height:32px;
  }
  .San{
     width:80px;
    height:80px;
    margin-left:0.3rem;
  }
  .Bin{
    width:750px;
    height:12px;
    background:#ccc
  }
  .Xiang{
    width:690px;
    height:79px;
    border-bottom:1px solid #ccc;/*no*/
    margin :0 auto;
    position:relative;

    .Zho{
      width:690px;
      height:40px;
      position: absolute;
      top: 50%;
      margin: -20px 0 0 0;
      line-height: 40px;
      display:flex
      img{
        width:58px;
        height:39px;
      }
      .Zhen{
        width:195px;
        height:40px;
        font-size:30px;
        text-align:center
      }
      .XiaL{
        width:238px;
        height:40px;
        text-align:center
       .selectpicker{
         border-radius:10%;

       }
      }
    }
  }
  .Jan{
    width:200px;
    height:40px;
    span{
        display:inline-block;
      width: 17px;
      height: 17px;
      border-top: 2px solid black;
      border-right: 2px solid black;
      transform: rotate(45deg);
     margin-left:2.23rem;
    }
  }
  .Bao{
    width:690px;
    height:300px;
    border-bottom:1px solid #ccc;/*no*/
    margin:0 auto;
    font-size:26px;
    li:first-child{
      margin-top:40px;
    }
    li{
        margin-top:60px;
    }
  }
  .yuan{
    display:inline-block
    width: 10px;
    height: 10px;
    border: 1px solid #088;
    border-radius: 100px;
    background-color: #FFFFFFF;
    opacity: 0.5;
  }
  .Mo{
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
      cursor:pointer;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 0.98rem;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
</style>
