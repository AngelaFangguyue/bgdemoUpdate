<template>
  <div class="buttonWrap">
    <el-row v-show="showDel" class="but1">
      <el-button type="primary" @click.native="addNew">新增</el-button>
      <el-button type="danger" @click.native="del">删除</el-button>
    </el-row>
    <el-row class="but2" v-show="!showDel">
      <el-button type="danger" @click.native="addNew1">确认删除</el-button>
      <el-button type="primary" @click.native="del1">取消</el-button>
    </el-row>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Newbutton extends Vue {
  @Prop() addNew;
  @Prop() del;
  @Prop() addNew1;
  @Prop() del1;
  @Prop({ default: true }) showDel;
}
</script>

<style lang="scss" scoped>
.buttonWrap {
  position: relative;
  padding: 30px; //因为子元素绝对定位，脱离文档流，因此需要占据一定高度
  margin-bottom: 30px;
}
.but2,
.but1 {
  position: absolute;
  top: 30px;
  left: 30px;
}
</style>
