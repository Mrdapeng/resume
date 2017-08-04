<template>
  <div class="container">
    <navbar></navbar>
    <!-- effect-3 html -->
    <div class="single-member effect-3">
      <div class="member-image">
        <img src="../assets/img/phone.png" alt="Member">
      </div>
      <div class="member-info">
        <h3>phone</h3>
        <p>__________________</p>
        <div class="social-touch">
          <h3>18811462052</h3>

        </div>
      </div>
    </div>
    <!-- effect-3 html end -->

    <div class="single-member effect-3">
      <div class="member-image">
        <img src="../assets/img/Git.png" alt="Member">
      </div>
      <div class="member-info">
        <h3>Github</h3>
        <p>__________________</p>
        <div class="social-touch">
          <h3><a href="https://github.com/Mrdapeng">MrDapeng</a></h3>
        </div>
      </div>
    </div>
    <div class="single-member effect-3">
      <div class="member-image">
        <img src="../assets/img/mail.png" alt="Member">
      </div>
      <div class="member-info">
        <h3>mail</h3>
        <p>__________________</p>
        <div class="social-touch">
          <h3><a href="mailto:liurenpeng666@163.com">liurenpeng</a></h3>

        </div>
      </div>
    </div>
    <div class="single-member effect-3">
      <div class="member-image">
        <img src="../assets/img/blog.png" alt="Member">
      </div>
      <div class="member-info">
        <h3>Blog</h3>
        <p>__________________</p>
        <div class="social-touch">
          <h3><a href="http://www.jianshu.com/u/832961e6b5fc">简书</a></h3>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import navbar from '../components/navBar.vue'

  export default {
    data() {
      return {}
    },
    methods:{

    },
    components:{
      'navbar':navbar
    }
  }
</script>
<style scoped>
  .container {
    margin: 0 auto;
    max-width: 1000px;
  }

  /*= common css to all effects =*/

  .single-member {
    width: 280px;
    margin: 30px 2.5%;
    background-color: #fff;
    text-align: center;
    position: relative;
  }

  .member-image img {
    max-width: 100%;
    vertical-align: middle;
  }

  h3 {
    font-size: 24px;
    font-weight: normal;
    margin: 15px 0 0;
    text-transform: uppercase;
  }

  h5 {
    font-size: 16px;
    font-weight: 300;
    margin: 0 0 15px;
    line-height: 22px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    padding: 0 30px;
    margin-bottom: 10px;
  }

  /*= effect-3 css =*/

  .effect-3 {
    max-height: 302px;
    min-height: 302px;
    overflow: hidden;

  }

  .effect-3 a {
    text-decoration: none;
    color: #000;
  }

  .effect-3 h3 {
    padding-top: 7px;
    line-height: 33px;
  }

  .effect-3 .member-image {
    border-bottom: 5px solid #ccc;
    transition: 0.4s;
    height: 230px;
    width: 80%;
    display: inline-block;
    float: none;
    vertical-align: middle;
  }

  .effect-3 .member-info {
    transition: 0.4s;
  }

  .effect-3 .member-image img {
    width: 100%;
    vertical-align: bottom;
  }

  .effect-3 .social-touch {
    background-color: rgba(0, 0, 0, 0.1);
    float: left;
    left: 0;
    bottom: 0;
    overflow: hidden;
    padding: 5px 0;
    width: 100%;
    transition: 0.4s;
  }

  .effect-3:hover .member-image {
    border-bottom: 0;
    border-radius: 0 0 5px 5px;
    height: 81px;
    display: inline-block;
    overflow: hidden;
    width: 109px;
    transition: 0.4s;
  }

  /*= effect-3 css end =*/


</style>
