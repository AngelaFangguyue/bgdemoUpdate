<!-- schedule.vue -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
       <ToDoList :items="items">
          <template v-slot:todo-item-after=" {item} ">
            <i v-if="isFinished(item)" class="fas fa-check" />
          </template>
        </ToDoList>
      </div>
    </div>
  </div>
</template>
<script>
import ToDoList from "@/components/ToDoList";
import _ from "lodash";
export default {
  components: { ToDoList },
  data() {
    return {
      items: [
        { id: 1, title: "todo item 1" },
        { id: 2, title: "todo item 2" },
        { id: 3, title: "todo item 3" },
        { id: 4, title: "todo item 4" }
      ],
      finished: [4, 2]
    };
  },
 
    methods: {
    isFinished(item) {
      //return _.includes(this.finished, item.id)

      if(this.finished.indexOf(item.id)>-1){
          console.log("cunzai");
      }
    }
  }
  
};
</script>