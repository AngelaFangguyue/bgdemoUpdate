<template>
  <ul>
    <ToDoItem v-for="item in items" :key="item.id" :item="item">
      <template v-slot:after="{item}">
        <slot name="todo-item-after" :item="item" />
      </template>
    </ToDoItem>
  </ul>
</template>
<script>
import ToDoItem from "@/components/ToDoItem";
export default {
  components: { ToDoItem },
  props: ["items"]
};
</script>