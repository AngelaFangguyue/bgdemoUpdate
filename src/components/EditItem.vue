<template>
  <div>
    EditItem组件
    <el-dialog title="修改" :visible.sync="editDialogVisible">
      <AddFormDiv></AddFormDiv>
    </el-dialog>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class EditItem extends Vue {
  editDialogVisible = false;
}
</script>

<style scoped>
</style>