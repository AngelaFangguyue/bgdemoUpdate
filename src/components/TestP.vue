<template>
  <div>
      <TestC>
        <div>这是匿名插槽</div>
        <template slot="er1">
         <div>这是er1插槽</div>
         </template >
         <template slot="er2">
          <div>这是er2插槽</div>
          </template>
      </TestC>
  </div>
</template>

<script>
import TestC from '@/components/TestC.vue'
export default {
  components:{
    TestC
  }
};
</script>

<style lang="scss" scoped>
</style>