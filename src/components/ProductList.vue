<template>
  <div>
    列表
    <Newbutton :addNew="addNew" :del="del" :del1="del1" ></Newbutton>
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
  del1 = false;
  addNew() {
    console.log("跳转到增加产品的页面");
    this.$router.replace({ name: "ProductAdd" });
  }
  del() {
    this.showOr = true;
    console.log("点击删除按键:",this.showOr);
    this.del1 = true;

  }
  created(){
    this.tableData = tableData;
    console.log("tableData",tableData);
  }
}
</script>

<style scoped>
</style>