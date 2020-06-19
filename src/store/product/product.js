import {createdListId} from "@/library/createId.js";
let productItem = {
    date: "2020-07-15", // 日期
    name: "大嘴猴", // 姓名
    phone: "13888888888", // 电话
    address: "深圳市南山区滨海大道 888 号", // 地址
  };

  const moduleProduct = {
    state: () => ({  
        productData : Array(20)
        .fill(productItem)
        .map((x, i) => {
          return { id: i + 1, ...x };
        }) }),

    mutations: { 
        //增加产品
        addTableItem(state,item) {
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
          }

     },
    actions: {  },
    getters: {  }
  }