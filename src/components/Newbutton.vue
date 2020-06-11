<template>
  <el-row>
    <el-button type="primary" @click.native="addNew">主要按钮</el-button>
    <el-button type="danger" @click.native="deleteItem">危险按钮</el-button>
  </el-row>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Newbutton extends Vue {
  @Prop(String) addNew;
  @Prop(String) deleteItem;
}
</script>

<style lang="scss" scoped></style>
