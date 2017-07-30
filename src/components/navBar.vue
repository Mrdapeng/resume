<template>
  <div class="nav-bar">
      <el-breadcrumb  separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/aboutMe' }"> 关于大朋</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/skill'}">技能</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/blog'}">blog</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/work'}">作品展示</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/connectme'}">联系我</el-breadcrumb-item>

        <i class="el-icon-share"></i>
        <i class="el-icon-message"></i>
      </el-breadcrumb>

  </div>
</template>
<script>

</script>
<style>
  .nav-bar {
    width: 28%;
    background: #F9FAFC;
    position: fixed;
    top: 3%;
    left: 70%;
    border-radius: 6px;
    color: #000;
  }
</style>
