<template>
  <div class="nav" :class="[isOpen ? nav_open : nav_close]">
    <el-progress v-show="process_show" :text-inside="true" :stroke-width="2" :percentage="process_num"></el-progress>
    <img src="../../src/assets/img/logo.jpg" alt="">
    <nav-bar></nav-bar>
      <clock clagis="clock "></clock>
  </div>
</template>
<script>
  import $ from 'jquery'
  import clock from './clock.vue'
  import navBar from './navBar.vue'

  export default {
    data() {
      return {
        process_num: 0,
        isOpen: true,
        nav_open: 'nav_open',
        nav_close: 'nav_close',
        loading: 0,
        process_show: true
      }
    },
    components: {
      'clock': clock,
      'navBar': navBar

    },
    methods: {
      step() {
        this.process_num += 1
        if (this.process_num < 100) {
          requestAnimationFrame(this.step)
        }
      },
      inProcess() {
        requestAnimationFrame(this.step)
      },
    },

    mounted() {
      this.inProcess()
    },
    watch: {
      process_num: function (val, oldVal) {
        if (val === 100) {
          this.process_show = false
        }
      }
    }
  }
</script>
<style scoped>
  @import "../assets/css/reset.css";

  html {
    position: relative;
    top: 0;
    left: 0;
  }

  .nav {
    width: 100%;
    position: absolute;
    top: 0;
    height: 20%;

  }

  .nav_open {
    height: 100%;
  }

  .nav_close {
    height: 20%;
  }

  .nav img {
    width: 8%;
    margin-top: 20px;
  }

  .nav-bar {
    width: 28%;
    background: #F9FAFC;
    position: fixed;
    top: 5%;
    left: 70%;
    border-radius: 6px;
    color: #000;
  }

  .el-progress {
    width: 100%;
    position: fixed;
    margin: 0 auto;
  }

  .el-breadcrumb__item {
    font-size: 20px;
    padding-left: 2px;
    color: #000;
  }

  .clock {
    width: 80%;
    height: 100%;
  }
</style>
