<template>
  <div>
    <!-- ServerList -->
   
      <AddForm></AddForm>
    
    <Newbutton @addNew="addTableItem" @removeOld="deleteTableItem"></Newbutton>
    <el-table
      stripe
      :data="tableData"
      style="border: 1px solid #ebebeb;border-radius: 3px;margin-top: 10px;"
    >
      <el-table-column prop="id" label="id" width="100"></el-table-column>

      <el-table-column prop="date" label="日期" width="200"></el-table-column>

      <el-table-column prop="name" label="姓名" width="200"></el-table-column>

      <el-table-column prop="phone" label="电话" width="200"></el-table-column>

      <el-table-column prop="address" label="地址"></el-table-column>

      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="deleteTableItem(scope.row.id)" type="danger" size="small">删除</el-button>

          <el-button @click="moveTableItem(scope.row.id, 'up')" size="small">上移</el-button>
          <el-button @click="moveTableItem(scope.row.id, 'down')" size="small">下移</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Newbutton from "@/components/Newbutton.vue";
import AddForm from "@/components/AddForm.vue";
//import { menus ,tableData } from "@/utils/globalData.js";
import { tableData } from "@/utils/globalData.js";
//console.log(menus,tableData);
import { createdListId } from "@/library/createId.js";
//console.log(createdListId);
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: { Newbutton, AddForm }
})
export default class ServeList extends Vue {
  tableData = tableData; //绑定数据

  isShow = false;
  // 新增一个数据
  addTableItem(item = {}) {
    console.log("新增记录");
    this.isShow = true;
    // 添加到列表中，同时自增 id
    //this.tableData.push({ ...item, id: createdListId() });
  }

  // 删除一个数据
  deleteTableItem(id) {
    // 查找到对应的索引，然后删除
    console.log("删除记录");
    //const index = this.tableData.findIndex(x => x.id === id);
    //this.tableData.splice(index, 1);
  }

  // 移动一个数据
  moveTableItem(id, direction) {
    const dataLength = this.tableData.length;
    // 查找到对应的索引，然后取出，再插入
    const index = this.tableData.findIndex(x => x.id === id);
    switch (direction) {
      // 上移
      case "up":
        if (index > 0) {
          // 第一个不进行上移
          const item = this.tableData.splice(index, 1)[0];
          this.tableData.splice(index - 1, 0, item);
        }
        break;
      // 下移
      case "down":
        if (index < dataLength - 1) {
          // 最后一个不进行下移
          const item = this.tableData.splice(index, 1)[0];
          this.tableData.splice(index + 1, 0, item);
        }
        break;
    }
  }

  beforeMount() {
    console.log(this.$route.path); //可以在这里判断是服务还是产品
  }
}
</script>

<style lang="scss" scoped>
</style>
