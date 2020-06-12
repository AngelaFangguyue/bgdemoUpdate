<template>
  <div>
    <div>
      <Newbutton></Newbutton>
    </div>
    <div>
      <!-- <ListMain></ListMain> -->
      <slot></slot>
      <!-- 这个地方放信息或者产品组件，布局相同，只有数据不同，用模板listMain -->
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Newbutton from "@/components/Newbutton";
import ListMain from "@/components/ListMain";

@Component({
  components: { Newbutton, ListMain }
})
export default class LayoutMain extends Vue {}
</script>

<style scoped>
</style>