<template>
  <div>
    列表
    <!-- <AddForm :dialogFormVisible="isShow"></AddForm> -->
    <Newbutton :addNew="addNew" :del="del"></Newbutton>
    <ListMain :tableData="tableData" :showOr="showOr"></ListMain>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { tableData } from "@/utils/globalData.js";
import Newbutton from "@/components/Newbutton";
import ListMain from "@/components/ListMain";

@Component({ components: { Newbutton, ListMain } })
export default class ProductList extends Vue {
  tableData = tableData;
  showOr = false;
  addNew() {
    console.log("跳转到增加产品的页面");
    this.$router.replace({ name: "ProductAdd" });
  }
  del() {
    this.showOr = true;
    console.log("点击删除按键:",this.showOr);

  }
  created(){
    this.tableData = tableData;
    console.log("tableData",tableData);
  }
}
</script>

<style scoped>
</style>