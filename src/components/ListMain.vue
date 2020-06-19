<template>
  <div>
    <el-table
      stripe
      :data="tableData"
      style="border: 1px solid #ebebeb;border-radius: 3px;margin-top: 10px;"
      @select="testSelect($event)"
      highlight-current-row
    >
      <!--当-->
      <!-- <el-table-column label="操作test" width="55">
        <template slot-scope="scope">
          <el-checkbox
            v-model="scope.row.checked"
            :label="scope.row.id"
            @change="ee($event, scope.row)"
          ></el-checkbox>
        </template>
      </el-table-column>-->
      <!--当-->

      <el-table-column width="100" type="selection" v-if="showOr" :selectable="isDisabled">
        <!--复选框禁用功能-->
        <!-- <template slot-scope="scope">
          <el-checkbox @change="test(scope,$event)"></el-checkbox>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>-->
        <!-- <template slot="header" slot-scope="scope">
          id编号
        </template>-->
      </el-table-column>

      <!-- <el-table-column prop="id" label="id" width="100" > -->
      <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
      <el-table-column width="100" label="id">
        <!-- <template slot="header" slot-scope="scope">
          id编号
        </template>-->
        <template slot-scope="scope">
          <el-checkbox @change="ee($event, scope.row)" v-if="!showDel"></el-checkbox>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="date" label="日期" width="200"></el-table-column>

      <el-table-column prop="name" label="姓名" width="200"></el-table-column>

      <el-table-column prop="phone" label="电话" width="200"></el-table-column>

      <el-table-column prop="address" label="地址"></el-table-column>

      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            :disabled="!showDel"
            @click="editTableItem(scope.row.id)"
            type="info"
            size="small"
          >编辑</el-button>
          <el-button
            :disabled="!showDel"
            @click="deleteTableItem(scope.row.id)"
            type="danger"
            size="small"
          >删除</el-button>
          <el-button
            :disabled="!showDel"
            @click="moveTableItem(scope.$index,scope.row.id, 'up')"
            size="small"
          >上移</el-button>
          <el-button
            :disabled="!showDel"
            @click="moveTableItem(scope.$index,scope.row.id, 'down')"
            size="small"
          >下移</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ListMain extends Vue {
  @Prop() editTableItem;

  @Prop() tableData;
  @Prop() showOr;
  @Prop() showDel;
  checkedList = [];
  //多选部分禁用功能
  isDisabled(row) {
    if (row.experience_status === "1") {
      return 0;
    }
    return 1;
  }

  currentRow = null;

  test(i, j) {
    console.log("hihihi>>", i, j);
  }
  testSelect(i) {
    console.log("testSelect:::");
    console.log("testSelect:::", i);
    //add class样式，使得后面对应的按钮禁用
  }
  handleCurrentChange(val) {
    this.currentRow = val;
    console.log("单选时的值：", this.currentRow);
  }

  // //TODO编辑，
  // editTableItem(i){
  //   console.log(i);
  // }

  //   // 新增一个数据
  //   addTableItem(item = {}) {
  //     // EventBus.$emit("addItem");
  //     console.log("新增记录");
  //     this.isShow = true;
  //     // 添加到列表中，同时自增 id
  //     //this.tableData.push({ ...item, id: createdListId() });
  //   }

  // 删除一个数据
  deleteTableItem(i) {
    // 查找到对应的索引，然后删除
    console.log("删除记录");
    //const index = this.tableData.findIndex(x => x.id === id);
    //this.tableData.splice(index, 1);
    this.checkedList.push(i);
    this.$emit("updateCheckListSingle", this.checkedList);
  }

  // 移动一个数据
  // moveTableItem(id, direction) {
  moveTableItem(i, j, k) {
    console.log("移动");
    console.log(i, j, k);
    //const dataLength = this.tableData.length;
    //const item11 = this.tableData[i];
    if (k === "up") {
      if (i > 0) {
        let upDate = this.tableData[i - 1];
        this.tableData.splice(i - 1, 1);
        this.tableData.splice(i, 0, upDate);
      } else {
        alert("已经是第一条，不可上移");
      }
    } else if (k === "down") {
      console.log("down");
      if (i + 1 < this.tableData.length) {
        let downDate = this.tableData[i + 1];
        this.tableData.splice(i + 1, 1);
        this.tableData.splice(i, 0, downDate);
      } else {
        alert("已经是最后一条，不可下移");
      }
    }
    //     // 查找到对应的索引，然后取出，再插入
    //     const index = this.tableData.findIndex(x => x.id === id);
    //     switch (direction) {
    //       // 上移
    //       case "up":
    //         if (index > 0) {
    //           // 第一个不进行上移
    //           const item = this.tableData.splice(index, 1)[0];
    //           this.tableData.splice(index - 1, 0, item);
    //         }
    //         break;
    //       // 下移
    //       case "down":
    //         if (index < dataLength - 1) {
    //           // 最后一个不进行下移
    //           const item = this.tableData.splice(index, 1)[0];
    //           this.tableData.splice(index + 1, 0, item);
    //         }
    //         break;
    //     }
    //这里要传出给父组件
  }

  ///////////////////////
  ee(i, j) {
    if (i) {
      this.checkedList.push(j.id);
      console.log("被选中的this.checkedList:", this.checkedList);
    } else {
      this.checkedList.splice(this.checkedList.indexOf(j.id), 1);
      console.log("被选中的this.checkedList:", this.checkedList);
    }
    this.$emit("updateCheckList", this.checkedList);
  }
}
</script>

<style scoped>
.el-checkbox {
  margin-right: 0;
}
</style>
