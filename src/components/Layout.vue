<template>
  <el-container style="height: 100vh; border: 1px solid #eee;">
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
      <el-main>
        <slot></slot>
        <!-- <div>这是layout组件，设置路由</div> -->
        <!-- <router-view></router-view> -->
        <!-- <slot name="Newbutton"></slot> -->
        <!-- <Newbutton @click="showAddForm"></Newbutton> 这个先用上面的slot去占位-->
        <!-- <router-view></router-view> -->
        <!-- <ServeList></ServeList> -->
        <!-- <slot name="contentShow"></slot>
        <slot name="AddForm"></slot>-->
        <!-- <AddForm class="addForm"></AddForm> 这个先用上面的slot去占位-->
      </el-main>
    </el-container>
  </el-container>
</template>

<script >
import { Vue, Component } from "vue-property-decorator";
// import Newbutton from "@/components/Newbutton.vue";
// import AddForm from "@/components/AddForm.vue";
import Navi from "@/components/Navi.vue";
@Component({
  components: { Navi }
})
export default class Layout extends Vue {
  showAddForm() {
    console.log("showAddForm");
  }
}
</script>

<style lang="scss" scoped>
// .addForm ::deep div{
//   display: none
// }
.el-aside {
  height: 100vh;
}
.el-header {
  height: 60px;
  background-color: rgb(237, 237, 237);
}
.el-main{
  background-color: rgb(254,254,254);
}
</style>