<template>
<div>
  <navbar></navbar>
  <el-carousel :interval="4000" type="card" height="674px">
    <el-carousel-item v-for="(item,index) in worklist" :key="index">
      <a href="https://github.com/Mrdapeng"><img :src=item.imgurl alt=""></a><
      <h1>{{item.imgurl}}</h1>
      <p>{{item.imgurl}}</p>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
  import work1 from '../assets/img/work1.png'
  import work2 from '../assets/img/work2.png'
  import work3 from '../assets/img/work3.png'
  import work4 from '../assets/img/work4.png'
  import work5 from '../assets/img/work5.png'
  import work6 from '../assets/img/work6.png'
  import work7 from '../assets/img/work7.png'
  import work8 from '../assets/img/work8.png'
  import  navbar from '../components/navBar.vue'
  export default {
    data() {
      return {
        worklist: [
          {
            imgurl: work1
          }, {
            imgurl: work2
          }, {
            imgurl: work3

          }, {
            imgurl: work4
          }, {
            imgurl: work5
          }, {
            imgurl: work6
          }, {
            imgurl:work7
          },{
          imgurl:work8
          }

        ]
      }
    },
    components:{
      'navbar':navbar
    }
  }
</script>
