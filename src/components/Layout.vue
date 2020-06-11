<template>
  <el-container style="height: 100vh; border: 1px solid #eee;">
    <el-aside width="250px" style="background-color: rgb(238, 241, 246);">
      <slot />
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
      <el-main>
        <!-- <router-view></router-view> -->
        <!-- <ServeList></ServeList> -->
        <slot name="contentShow"></slot>
      </el-main>
      <Newbutton></Newbutton>
    </el-container>
  </el-container>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import Newbutton from "@/components/Newbutton.vue";
@Component({
    components:Newbutton
})
export default class Layout extends Vue {
    
};

</script>

<style lang="scss" scoped>
</style>