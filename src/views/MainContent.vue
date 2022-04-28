<template>
  <div>
    <div>
      <longterm-goal></longterm-goal>
    </div>
    <div class="tasks-container" v-if="tasks.length > 0">
      <single-task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index"
      ></single-task>
    </div>
    <div v-else>
      <p>今日暂无任务</p>
    </div>
    <div>
      <add-task v-if="editingState"></add-task>
    </div>
  </div>
</template>

<script>
import LongtermGoal from "../components/main/LongtermGoal.vue";
import AddTask from "../components/main/AddTask.vue";
import SingleTask from "../components/main/SingleTask.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  components: { AddTask, SingleTask, LongtermGoal },
  setup() {
    // get store
    const store = useStore();
    // tasks list
    let tasks = computed(() => {
      return store.state.tasks;
    });
    // editing state
    const editingState = computed(() => {
      return store.state.systemStates.editingState;
    });

    return {
      tasks,
      editingState,
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.tasks-container {
  width: 280px;
}
</style>