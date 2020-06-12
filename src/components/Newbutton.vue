<template>
  <el-row>
    <el-button type="primary" @click.native="addNew">新增</el-button>
    <el-button type="danger" @click.native="del">删除</el-button>
  </el-row>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Newbutton extends Vue {
  @Prop() addNew;
  @Prop() del;
}
</script>

<style lang="scss" scoped>

</style>
