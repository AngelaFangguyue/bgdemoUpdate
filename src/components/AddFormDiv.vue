<template>
  <div class="AddFormDivWrapper">
    <!-- 找个地方添加一个新增的按钮，点击的时候出现表单的弹窗，以及把表单内容设置为初始值 -->

    <!-- <el-button
      type="primary"
      @click="
      dialogFormVisible = true;
      form = {};
    "
    >新增子组件form</el-button>-->

    <!-- Form -->
    <!-- el-dialog 是弹窗样式，title 绑定弹窗的标题内容，visible 绑定弹窗是否展示 -->
    <!-- <el-dialog title="新增" :visible.sync="dialogFormVisible"> -->
    <el-form :model="form">
      <!-- el-form-item 绑定表单样式，label 表单的名称，formLabelWidth 设置 label 的宽度 -->
      <el-form-item label="日期" :label-width="formLabelWidth">
        <!-- 里面装载表单元素，这里装了个选择日期的组件，v-model 绑定选择值，value-format设置绑定值的格式，type 设置选择的范围，这里 date 表示到天 -->
        <el-date-picker
          v-model="form.date"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="form.phone" type="tel"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <!-- 点击取消的时候，设置弹窗不可见 -->
      <el-button @click.native="hide">取 消</el-button>
      <!-- 点击确定的时候，设置弹窗不可见，同时添加一项内容 -->
      <el-button
        type="primary"
        @click.native="
          addTableItem(form);
        "
        >确 定</el-button
      >
    </div>
    <!-- </el-dialog> -->
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { EventBus } from "@/main.js";
import {createdListId} from "@/library/createId.js";
import { tableData } from "@/utils/globalData.js";
@Component
export default class AddForm extends Vue {
  //@Prop() isShow;
  tableData = tableData;
  hide() {
    console.log("触发emit事件");
    EventBus.$emit("hide1");
  }

  //dialogFormVisible = true; // 弹窗是否出现
  form = {}; // 用作表单绑定的内容
  formLabelWidth = "120px"; // 表单 label 的宽度
  // onSubmit() {
  //   console.log("submit!");
  // }
  addTableItem(item) {
    console.log("this.tableData111", Array.isArray(this.tableData), tableData);
    //this.tableData.push({ ...item, id: createdListId() });//添加记录
    console.log("addTableItem!>>", item);
    this.tableData.push({ ...item, id: createdListId() });
    console.log("this.tableData222", typeof(this.tableData), tableData);
    if (this.$route.path === "/home/serve/serveList") {
      console.log("serveList");
      this.hide();
    } else {
      console.log("ProductList");
      this.$router.replace({ name: "ProductList" });
    }

    //增加数据，使用axios，数据库中添加数据。数据实时动态更新
    // this.$http.get(url, data, options).then((response) => {
    //   console.log(response);
    // });
    /////////////////////////////
    //向后台发起数据请求
    // this.$http
    //   .get("http://localhost:3001/api/article") //这里面的get put post delete都是后端服务器文件定义好的
    //   .then((response) => {
    //     console.log(response.data);
    //     //this.artList = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    /////////////////////////////////////
  }
  //   destroyed(){
  //    EventBus.$off();
  // }
}
</script>

<style lang="scss" scoped>
div.AddFormDivWrapper {
  // background-color: #fff;
  // margin:20px;
  // border:2px solid #333;
  // box-shadow:-7px -7px 6px #2B2A2A;
}
</style>
