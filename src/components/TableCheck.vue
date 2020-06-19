<template>
  <div>
    <Newbutton
      :del="del"
      :del1="del1"
      :showDel="showDel"
      :addNew1="addNew1"
    ></Newbutton>
    <p>shopInfo</p>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      highlight-current-row
      style="width: 100%"
    >
      <!-- @current-change="handleSelectionChange" -->
      <!-- <el-table-column type="selection"></el-table-column> -->

      <el-table-column label="操作" width="55">
        <template slot-scope="scope">
          <el-checkbox
            v-model="scope.row.checked"
            :label="scope.row.id"
            @change="ee($event, scope.row)"
          ></el-checkbox
          ><!--当-->
          <!-- <el-radio v-model="checked" :label="scope.row.id" @change = "testChange"></el-radio> -->
          <!-- <el-radio v-model="checked"></el-radio>  -->
          <!-- <el-radio v-model="checked" :label="scope.row.id"></el-radio> -->
        </template>
      </el-table-column>
      <el-table-column prop="id" label="id222" width="120"> </el-table-column>
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
          <!-- <el-button :disabled="scope.row.id === checked" @click="ee"
            >{{ scope.row.id }}单选框编辑</el-button
          > -->

          <!-- <el-button
            :disabled="checkedList.indexOf(scope.row.id) > -1"
            @click="ee"
            >{{ scope.row.id }}多选框编辑</el-button
          > -->
          <el-button :disabled="!showDel" @click="ee1"
            >{{ scope.row.id }}多选框编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Vue, Component, Ref } from "vue-property-decorator";
import Newbutton from "@/components/Newbutton";

@Component({ components: { Newbutton } })
export default class TableCheck extends Vue {
  //将for循环提取出来[3,4,5][{id:1,age:11},{id:2,age:12},{id:3,age:13},{id:4,age:14}]
  forfun(a, b, c) {
    for (let i1 = 0; i1 < b.length; i1++) {
      //b=this.checkedList
      for (let i2 = 0; i2 < c.length; i2++) {
        //c=this.tableData3
        if (c[i2].id === b[i1]) {
          a(c, i2);
        }
      }
    }
  }
  aa(xx, i2) {
    console.log("这是aa函数");
    xx[i2].checked = false;
  }
  //删除
  bb(xx, i2) {
    console.log("这是bb函数");
    xx.splice(i2, 1);
  }

  ///////////////////////////////////////////

  ee1() {
    // console.log("点击编辑按钮");
  }

  showDel = true; //控制是哪一排的按钮显示

  //确认取消，需要拿到选中的，然后删除
  addNew1() {
    this.forfun(this.bb, this.checkedList, this.tableData3);
  }

  del() {
    this.showDel = false;
    // console.log("this.showDel:", this.showDel);
  }
  del1() {
    this.showDel = true;
    console.log("this.showDel1:", this.showDel);
    console.log("this.checkedList:", this.checkedList);
    //
    // for (let i1 = 0; i1 < this.tableData3.length; i1++) {
    //      console.log("this.tableData3[i1]:",this.tableData3[i1]);
    //   for (let i2 = 0; i2 < this.checkedList.length; i2++) {
    //     if (this.tableData3[i1].id === this.checkedList[i2]) {
    //         console.log("this.checkedList[i2]:",this.checkedList[i2]);
    //       this.tableData3[i1].checked = false;
    //     }
    //   }
    // }
    this.forfun(this.aa, this.checkedList, this.tableData3);
    console.log("this.tableData3:", this.tableData3);
  }

  @Ref() multipleTable;

  tableData3 = [];
  checked = null;
  currentSelectItem = {};

  checkedList = [];

  handleSelectionChange(row) {
    this.checked = row.id;
    this.tableData3.forEach((item) => {
      if (item.id !== this.checked) {
        // item.checked = false;
      }
    });
    this.currentSelectItem = row;
    //console.log("this.currentSelectItem:", this.currentSelectItem);
    //console.log("this.checked:", this.checked);
  }

  ee(i, j) {
    //console.log("i,j:", i, j);
    //console.log("ii:", this.tableData3);
    //i为true和false
    if (i) {
      // console.log("被选中的:", j.id);
      //this.selectedItem.push();
      this.checkedList.push(j.id);
      console.log("被选中的this.checkedList:", this.checkedList);
    } else {
      //取消选中的
      // console.log("取消选中的");
      this.checkedList.splice(this.checkedList.indexOf(j.id), 1);
      console.log("被选中的this.checkedList:", this.checkedList);
    }
  }

  created() {
    this.setTable();
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
    resdata.forEach((item) => {
      item.checked = false;
    });
    this.tableData3 = resdata;
  }
}
</script>

<style scoped></style>
