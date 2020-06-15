<template>
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
          <router-link
            v-for="subMenu in menu.subMenus"
            :key="subMenu.index"
            :index="subMenu.index"
            :to="`/${subMenu.path}`"
          >
            <el-menu-item>{{ subMenu.text }}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <!-- 没子菜单的时候，就用 el-menu-item，也要绑个序号 index -->

      <router-link v-else :key="menu.index" :index="menu.index" :to="`/home/${menu.routerName}`">
        <el-menu-item :index="menu.index" :key="menu.index">
          <!--<router-link to=""> -->
          <!-- 绑个父菜单的 icon -->
          <i :class="menu.icon"></i>
          <!-- 再绑个父菜单的名称 text -->
          <span slot="title">{{ menu.text }}</span>
          <!-- </router-link> -->
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>

<script>
import { menus } from "@/utils/globalData.js";

//console.log(menus,tableData);

import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navi extends Vue {
  menus = menus;

  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }

  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }

  // test(){
  //   console.log("test", menu.routername);
  // }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
}
</style>
