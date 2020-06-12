<template>
<div>
  <div>test1</div>
  <slot></slot>
   <div>test2</div>
  <slot name="er1"></slot>
   <div>test3</div>
  <slot name="er2"></slot>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TeatC extends Vue {
    
}
</script>

<style lang="scss" scoped>
</style>