<template>
  <div class="nav-bar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/aboutMe' }"> 关于大朋</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/skill'}">技能</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/blog'}">blog</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/work'}">作品展示</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/connect'}">联系我</el-breadcrumb-item>
      <el-breadcrumb-item class="el-icon-message"><span><a id="mail" href="mailto:liurenpeng666@163.com"></a></span>
      </el-breadcrumb-item>
    </el-breadcrumb>

  </div>
</template>
<script>

</script>
<style scoped>
  .nav-bar {
    width: 28%;
    background: #F9FAFC;
    position: fixed;
    top: 3%;
    left: 70%;
    border-radius: 6px;
    color: #000;
  }

  #mail {
    height: 13px;
    width: 13px;
    display: inline-block;
    cursor: pointer;
  }

</style>
