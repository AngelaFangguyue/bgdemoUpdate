<template>
  <div>
    <AddForm :dialogFormVisible="isShow"></AddForm>
    <ListMain :tableData="tableData" :editItem="editItem"
      :showOr="showOr"
      :showDel="showDel"
      v-on:updateCheckList="updateCheckList"
      v-on:updateCheckListSingle="updateCheckListSingle"
      :editTableItem="editTableItem"
    ></ListMain>
  </div>
</template>

<script>
// import EventBus from "@/main.js";
import Newbutton from "@/components/Newbutton.vue";
import AddForm from "@/components/AddForm.vue";
import ListMain from "@/components/ListMain.vue";
import { tableData } from "@/utils/globalData.js";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: { Newbutton, AddForm, ListMain }
})
export default class ServeList extends Vue {
  tableData = tableData; //绑定数据

  isShow = false;

  editItem = 1;

  /////////////////////////
  // // 新增一个数据
  // addTableItem(item = {}) {
  //   // EventBus.$emit("addItem");
  //   console.log("新增记录");
  //   this.isShow = true;
  //   // 添加到列表中，同时自增 id
  //   //this.tableData.push({ ...item, id: createdListId() });
  // }

  // // 删除一个数据
  // deleteTableItem(id) {
  //   // 查找到对应的索引，然后删除
  //   console.log("删除记录");
  //   //const index = this.tableData.findIndex(x => x.id === id);
  //   //this.tableData.splice(index, 1);
  // }

  // // 移动一个数据
  // moveTableItem(id, direction) {
  //   const dataLength = this.tableData.length;
  //   // 查找到对应的索引，然后取出，再插入
  //   const index = this.tableData.findIndex(x => x.id === id);
  //   switch (direction) {
  //     // 上移
  //     case "up":
  //       if (index > 0) {
  //         // 第一个不进行上移
  //         const item = this.tableData.splice(index, 1)[0];
  //         this.tableData.splice(index - 1, 0, item);
  //       }
  //       break;
  //     // 下移
  //     case "down":
  //       if (index < dataLength - 1) {
  //         // 最后一个不进行下移
  //         const item = this.tableData.splice(index, 1)[0];
  //         this.tableData.splice(index + 1, 0, item);
  //       }
  //       break;
  //   }
  // }
  ///////////////////////////////////

  // beforeMount() {
  //   console.log(this.$route.path); //可以在这里判断是服务还是产品
  // }
}
</script>

<style lang="scss" scoped>
</style>
