<template>
  <div>
   <Layout> 
      <!-- home主页 -->
      <router-view>
        <!-- <Wrapp></Wrapp> -->
      </router-view>
    </Layout> 
  </div>

  
</template>

<script>
import Layout from "@/components/Layout.vue";
// import Wrapp from "@/views/Wrapp.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { Layout } })
export default class Home extends Vue {}
</script>

<style scoped>
</style>