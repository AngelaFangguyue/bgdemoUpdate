<template>
  <div>
    <!-- 找个地方添加一个新增的按钮，点击的时候出现表单的弹窗，以及把表单内容设置为初始值 -->


    <!-- <el-button
      type="primary"
      @click="
      dialogFormVisible = true;
      form = {};
    "
    >新增子组件form</el-button> -->



    
    <!-- Form -->
    <!-- el-dialog 是弹窗样式，title 绑定弹窗的标题内容，visible 绑定弹窗是否展示 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible">
     <AddFormDiv></AddFormDiv>
    </el-dialog>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import  AddFormDiv from "@/components/AddFormDiv.vue"

@Component({components:{AddFormDiv}})
export default class AddForm extends Vue {
    // @Prop() isShow;

  dialogFormVisible = false; // 弹窗是否出现
  form = {}; // 用作表单绑定的内容
  formLabelWidth = "120px"; // 表单 label 的宽度
  onSubmit() {
    console.log("submit!");
  }
  addTableItem() {
    //this.tableData.push({ ...item, id: createdListId() });//添加记录
    console.log("addTableItem!");
  }
}
</script>

<style lang="scss" scoped>
</style>
