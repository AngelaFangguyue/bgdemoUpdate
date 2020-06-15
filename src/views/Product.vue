<template>
  <div>
    <!-- 产品展示页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Product extends Vue {}
</script>

<style scoped>
</style>