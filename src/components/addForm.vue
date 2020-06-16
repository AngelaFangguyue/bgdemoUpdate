<template>
  <!-- 找个地方添加一个新增的按钮，点击的时候出现表单的弹窗，以及把表单内容设置为初始值 -->

  <!-- <el-button
      type="primary"
      @click="
      dialogFormVisible = true;
      form = {};
    "
  >新增子组件form</el-button>-->

  <div>
    <!-- <el-row>
      <el-button type="primary" @click.native="case1">新增</el-button>
      <el-button type="danger" @click.native="$emit('removeOld',$event)">删除</el-button>
    </el-row> -->
    <Newbutton :addNew="case1" :del="del"></Newbutton> 
    <!-- Form -->
    <!-- el-dialog 是弹窗样式，title 绑定弹窗的标题内容，visible 绑定弹窗是否展示 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <AddFormDiv></AddFormDiv>
    </el-dialog>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import AddFormDiv from "@/components/AddFormDiv.vue";
import Newbutton from "@/components/Newbutton.vue";
import { EventBus } from "@/main.js";
@Component({ components: { AddFormDiv, Newbutton } })
export default class AddForm extends Vue {
  //@Prop() dialogFormVisible;

  dialogFormVisible = false; // 弹窗是否出现
  form = {}; // 用作表单绑定的内容
  formLabelWidth = "120px"; // 表单 label 的宽度

  del(){
    console.log("点击删除按键");
  }

  case1() {
    this.form = {};
    console.log("this.$route.path:", this.$route.path);
    // if (this.$route.path === "/home/product/productList") {
    //   console.log("产品列表新增页面");
    //   //this.$route.push();
    //   this.$router.replace({name:'ProductAdd'});
    // } else {
      console.log("服务列表新增页面");
      this.dialogFormVisible = true;
    // }
  }
  onSubmit() {
    console.log("submit!");
  }
  addTableItem() {
    //this.tableData.push({ ...item, id: createdListId() });//添加记录
    console.log("addTableItem!");
  }

  created() {
    console.log("this.$route.path:", this.$route.path);
    console.log("Addform的created");
    EventBus.$on("hide1", () => {
      console.log("测试取消按钮是否能隐藏");
      this.dialogFormVisible = false;
    });
  }
  beforeDestroy() {
    console.log("测试销毁");
    EventBus.$off();
  }//产品列表和服务列表公用一个serverList，所以会使得on被触发多次，如果用off，那么事件就取消了
}
</script>

<style lang="scss" scoped>
</style>
