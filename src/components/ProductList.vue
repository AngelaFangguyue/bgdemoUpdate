<template>
  <div>
    列表
    <Newbutton
      :addNew="addNew"
      :del="del"
      :del1="del1"
      :showDel="showDel"
    ></Newbutton>
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
  showOr = false; //控制新增dialog页面的出现
  showDel = true; //控制是哪一排的按钮显示标志
  del1 = false;
  checkedList = []; //存放选择要删除的数据id

created() {
   this.tableData = tableData.forEach((item) => {
      item.checked = false;
    });

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
////////////////////////////

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

  addNew() {
    console.log("跳转到增加产品的页面");
    this.$router.replace({ name: "ProductAdd" });
  }
  del() {
    ////控制是哪一排的按钮显示标志
    // this.showOr = true;
    // console.log("点击删除按键:",this.showOr);
    //this.del1 = true;
    this.showDel = false;
  }
  created() {
    this.tableData = tableData;
    console.log("tableData", tableData);
  }
}
</script>

<style scoped></style>
