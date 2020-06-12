<template>
  <div>
    <!-- <TestP>
    </TestP>-->
    <!-- <Layout>
      <Navi></Navi>
      <template slot="contentShow">
        <ServeList></ServeList>
      </template>
    </Layout>-->
    <!-- <Login></Login> -->
    <Home class="home"></Home>
    <div id="app">
      <!-- <router-view></router-view>-->1111111 
    </div>
    <div>
      <Schedule></Schedule>
    </div>
  </div>
</template>
<script>
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Schedule from "@/components/Schedule.vue";
// import Navi from "@/components/Navi.vue";
// import ServeList from "@/components/ServeList.vue";
// import Layout from "@/components/Layout.vue";
// import TestC from "@/components/TestC.vue";
//import TestP from "@/components/TestP.vue";
// console.log(Navi);
// console.log(ServeList);
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { Login, Home, Schedule } })
export default class App extends Vue {}
</script>


<style scoped>
</style>
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
</style>