<template>
  <div>
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { Layout } })
export default class Home extends Vue {}
</script>

<style scoped>
</style>