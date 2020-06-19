let tableItem = {
    date: "2020-06-15", // 日期
    name: "耶利米", // 姓名
    phone: "13888888888", // 电话
    address: "深圳市南山区滨海大道 888 号", // 地址
  };
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      
       tableData : Array(20)
        .fill(tableItem)
        .map((x, i) => {
          return { id: i + 1, ...x };
        })
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  },
  module:{

  }
})

export default store;