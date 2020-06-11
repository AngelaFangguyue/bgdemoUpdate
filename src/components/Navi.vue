<template>
  <div>
    <!-- 顺便调整了下颜色 -->
    <el-menu
      :default-openeds="['0', '1']"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 遍历生成父菜单选项 -->
      <template v-for="menu in menus">
        <!-- 有子菜单的时候，就用 el-submenu，再绑个序号 index -->
        <el-submenu
          v-if="menu.subMenus && menu.subMenus.length"
          :index="menu.index"
          :key="menu.index"
        >
          <template slot="title">
            <!-- 绑个父菜单的 icon -->
            <i :class="menu.icon"></i>
            <!-- 再绑个父菜单的名称 text -->
            <!-- slot 其实类似于占位符，可以去 Vue 官方文档了解一下插槽 -->
            <span slot="title">{{ menu.text }}</span>
          </template>
          <el-menu-item-group>
            <!-- 子菜单也要遍历，同时绑上子菜单名称 text，也要绑个序号 index -->
            <el-menu-item
              v-for="subMenu in menu.subMenus"
              :key="subMenu.index"
              :index="subMenu.index"
              >{{ subMenu.text }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <!-- 没子菜单的时候，就用 el-menu-item，也要绑个序号 index -->
        <el-menu-item v-else :index="menu.index" :key="menu.index">
          <!-- 绑个父菜单的 icon -->
          <i :class="menu.icon"></i>
          <!-- 再绑个父菜单的名称 text -->
          <span slot="title">{{ menu.text }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { menus ,tableData } from "@/utils/globalData.js";
console.log(menus,tableData);

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Navi extends Vue {

  menus = menus;

  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }

  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>

<style lang="scss" scoped>
</style>
