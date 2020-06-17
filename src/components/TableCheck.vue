<template>
  <div>
    <p>shopInfo</p>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      highlight-current-row
      style="width: 100%"
      @current-change="handleSelectionChange"
      @select="checkboxSelect"
    >
      <el-table-column type="selection"></el-table-column>

      <el-table-column label="操作" width="55">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.checked"></el-checkbox>
          <!-- <el-radio v-model="checked" :label="scope.row.id" @change = "testChange"></el-radio> -->
          <!-- <el-radio v-model="checked"></el-radio>  -->
          <!-- <el-radio v-model="checked" :label="scope.row.id"></el-radio> -->
        </template>
      </el-table-column>

      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column>
        <template slot="header">
          anniu1
        </template>
        <template slot-scope="scope">
          <el-button :disabled="scope.row.id === checked" @click="ee"
            >{{ scope.row.id }}单选框编辑</el-button
          >

          <el-button
            :disabled="checkedList.indexOf(scope.row.id) > -1"
            @click="ee"
            >{{ scope.row.id }}多选框编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-radio v-model="radio1" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio> -->
  </div>
</template>

<script>
import { Vue, Component, Ref } from "vue-property-decorator";

@Component
export default class TableCheck extends Vue {
  // @Ref() anotherComponent!: AnotherComponent
  @Ref() multipleTable;
  //使用table中内置的方法
  // this.$refs.multipleTable.toggleRowSelection(this.data[2])
  checkboxSelect(i) {
    console.log("checkbox:", i);
    //console.log(i.map(x=>x.id));
    this.checkedList = i.map((x) => x.id);
  }
  // radio = "1111";
  // radio1 = "1111";
  tableData3 = [];
  checked = null;
  currentSelectItem = {};

  //
  checkedList = [];

  ee() {
    // this.$nextTick(() => {
    //   this.multipleTable.toggleAllSelection();
    // });
  }

  created() {
    this.setTable();
  }
  mounted() {
    //console.log("this.multipleTable", this.multipleTable);
    //this.multipleTable.toggleRowSelection(this.tableData3[0], true);
    // 回调 nextTick 数据改变后重绘页面
    // this.$nextTick(() => {
    //   this.multipleTable.toggleRowSelection(this.tableData3[0], true);
    // // });
    // this.multipleTable.toggleAllSelection();
    //this.multipleTable.setCurrentRow(this.tableData3[2]); //单选这样写可以
  }

  setTable() {
    let resdata = [
      {
        id: 44,
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        id: 89,
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
        status: 1,
      },
      {
        id: 23,
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        id: 88,
        date: "2016-05-07",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
    ];

    // 使用单选框，下面的就不需要了
    // resdata.forEach((item) => {
    //   item.checked = false;
    // });

    //这里使用复选框
    resdata.forEach((item) => {
      item.checked = false;
    });
    this.tableData3 = resdata;
  }

  handleSelectionChange(row) {
    /////////////////////////////使用单选框，下面的操作就不用
    // console.log("row.id:", row.id);
    // this.checked = row.id; //加上了这句话之后，点击任何地方，单选框也会被选中，但单选框中的change事件不会触发了
    // this.tableData3.forEach((item) => {
    //   //
    //   if (item.id !== row.id) {
    //     item.checked = false;
    //   }
    //   //   else{
    //   //       this.checked = row.id;
    //   //   }
    // });
    // console.log(row);
    ///////////////////////////

    this.checked = row.id;
    // this.currentSelectItem = row;
    //  this.tableData3.forEach((item) => {
    //   if (item.id === this.checked) {
    //     row.status = -1;
    //   } else {
    //     row.status =  1;
    //   }
    // });

     this.tableData3.forEach((item) => {
      if (item.id !== this.checked) {
        //row.status = -1;
      } 
    });
    this.currentSelectItem = row;
    console.log("this.currentSelectItem:", this.currentSelectItem);
    console.log("this.checked:", this.checked);
  }

  //   testChange(i){//点击单选按钮，既会触发current-change事件，也会触发单选框的change事件，但若点击其他地方，不会触发change事件，只会触发current-change事件
  //     console.log("change事件：",i);//
  // }
}
</script>

<style scoped></style>
