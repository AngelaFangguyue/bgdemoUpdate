<template>
  <router-view></router-view>
  <!-- <TableCheck></TableCheck> -->
</template>

<script>
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Schedule from "@/components/Schedule.vue";
import TableCheck from "@/components/TableCheck.vue";

import Navi from "@/components/Navi.vue";
// import Navi from "@/components/Navi.vue";
// import ServeList from "@/components/ServeList.vue";
// import TestC from "@/components/TestC.vue";
//import TestP from "@/components/TestP.vue";
// console.log(Navi);
// console.log(ServeList);
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { Login, Home, Schedule, Navi, TableCheck } })
export default class App extends Vue {
  test() {
    console.log("test");
  }
}
</script>

<style scoped></style>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
