<template>
  <!-- <el-container style="height: 100vh; border: 1px solid #eee;">
    <el-aside width="250px" style="background-color: rgb(238, 241, 246);">
      <Navi></Navi>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>ayang818</span>
      </el-header>

      <!-- 首页内容 -->
      <!-- <el-main> -->
        <!-- <router-view></router-view> -->
        <!-- <ServeList></ServeList>
      </el-main>
      <Newbutton></Newbutton>
    </el-container>
  </el-container> -->
  <Layout>
    <Navi></Navi>
    <ServeList v-slot:contentShow></ServeList>
  </Layout>
</template>

<style>
html body {
  padding: 0;
  margin: 0;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100%;
}
</style>

<script>
import Navi from "@/components/Navi.vue";
import ServeList from "@/components/ServeList.vue";

import Layout from "@//components/Layout.vue"
console.log(Navi);
console.log(ServeList);
export default {
  data() {
    return {};
  },
  components: { ServeList, Navi,  Layout },
};
</script>
