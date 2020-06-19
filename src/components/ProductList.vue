<template>
  <div>
    <!-- <router-view></router-view>列表 -->
    <Newbutton :addNew="addNew" :del="del" :addNew1="addNew1" :del1="del1" :showDel="showDel"></Newbutton>
    <ListMain
      :tableData="tableData"
      :showOr="showOr"
      :showDel="showDel"
      v-on:updateCheckList="updateCheckList"
      v-on:updateCheckListSingle="updateCheckListSingle"
      :editTableItem="editTableItem"
    ></ListMain>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { tableData } from "@/utils/globalData.js";
import Newbutton from "@/components/Newbutton";
import ListMain from "@/components/ListMain";

@Component({ components: { Newbutton, ListMain } })
export default class ProductList extends Vue {
  //编辑，需要把编辑操作传递
  //TODO编辑，
  editTableItem(i) {
    console.log("在ProductList中editTableItem:", i);
    //this.$router.push({ name: "EditProduct" });
    this.$router.push({path:`editProduct/${i}`});
  }

  tableData = tableData;
  showOr = false; //控制新增dialog页面的出现
  showDel = true; //控制是哪一排的按钮显示标志
  checkedList = []; //存放选择要删除的数据id

  created() {
    tableData.forEach(item => {
      item.checked = false;
    });
    this.tableData = tableData;
  }

  //////////////////////////
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
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
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

  addNew() {
    console.log("跳转到增加产品的页面");
    this.$router.replace({ name: "ProductAdd" });
  }
  del() {
    ////控制是哪一排的按钮显示标志
    // this.showOr = true;
    console.log("点击删除按键");
    //this.del1 = true;
    this.showDel = false;
  }
  del1() {
    this.showDel = true;
    //同时还要把所有选中的取消
    // this.forfun(this.aa, this.checkedList, this.tableData);
    console.log("点击取消按键");
  }
  addNew1() {
    this.forfun(this.bb, this.checkedList, this.tableData);
    console.log("点击确认删除按键:", this.tableData);
    //
    this.showDel = true;
    this.checkedList = [];
  }
  //多条删除操作
  updateCheckList(i) {
    this.checkedList = i;
    console.log("显示选中的数据i:", this.checkedList);
    console.log("显示选中的数据checkedList:", this.checkedList);
  }
  //单条删除操作
  updateCheckListSingle(i) {
    this.updateCheckList(i);
    this.addNew1();
  }
}
</script>

<style scoped></style>
