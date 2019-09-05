<template>
  <div class="Quan">

    <router-link to="/online">在线咨询</router-link>
    <router-link to="/offic">官方微信</router-link>
    <router-link to="/cour">课程辅导</router-link>
    <router-link to="/exch">交流群</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Quan',
  }
</script>

<style scoped lang="stylus">
   .Quan{
     position:absolute;bottom:0px;
     a{
      color:#9a9a9a;
     }
     a:first-child{
       margin-left:50px;
     }
     a:nth-child(2){
       margin-left:100px;
     }
     a:nth-child(3){
       margin-left:100px;
     }
     a:nth-child(4){
       margin-left:100px;
     }

   }
</style>
