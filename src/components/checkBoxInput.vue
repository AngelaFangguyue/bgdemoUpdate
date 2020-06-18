<template>
  <div id="app">
    <div v-for="item in stylesData" :key="item.uid">
      <el-checkbox
        v-model="item.checked"
        @change="selecteChange(item)"
      ></el-checkbox>
      <img v-bind:src="item.src" />
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class checkBoxInput extends Vue {
  selectedId = [];
  stylesData = [
    {
      uid: 1,
      checked: false,
      src: "xxx.jpg",
      text: "一段描述",
    },
    {
      uid: 2,
      checked: false,
      src: "xxxx.jpg",
      text: "二段描述",
    },
    {
      uid: 3,
      checked: false,
      src: "xxxxx.jpg",
      text: "三段描述",
    },
  ];

  selecteChange(item, value) {
    console.log(item);
    console.log(value);
    if (value === true) {
      this.app.selectedId.push(item.uid);
    }
  }
}
</script>

<style scoped></style>
