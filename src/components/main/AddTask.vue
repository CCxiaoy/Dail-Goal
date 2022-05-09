<template>
  <div class="new-task-parent">
    <div class="input-container">
      <input ref="ipcom" type="text" v-model="taskStr" maxlength="17" />
    </div>
    <div class="img-container">
      <img
        src="../../assets/task/add.png"
        alt="添加新任务"
        @click="appendANewTask"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Task from "../../common/task/taskStructure";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { sendAMessage } from "../../common/notification/message";

export default {
  setup() {
    // 获取vuex仓库
    const store = useStore();

    // 任务内容字段
    let taskStr = ref("");
    // 初始化一个Task
    const initANewTask = () => {
      const date = new Date();
      const id = uuidv4();
      const task = new Task(taskStr.value, date, id);
      return task;
    };
    // 添加完任务后清空相应字段
    const clearTaskStr = () => {
      taskStr.value = "";
    };
    // 添加一个任务
    const appendANewTask = () => {
      if (tasksLength.value === 3) {
        sendAMessage("只能添加三条哦! 拜托拜托", "warning");
        return;
      }
      const task = initANewTask();
      store.commit("appendSingleTask", task);
      sendAMessage("添加成功", "success");
      clearTaskStr();
    };
    // 不允许添加超过三个task
    let tasksLength = computed(() => {
      return store.state.tasks.length;
    });

    const ipcom = ref(null);

    onMounted(() => {
      if (tasksLength.value >= 3) {
        ipcom.value.setAttribute("disabled", "disabled");
      }
    });

    watch(tasksLength, (newValue) => {
      if (newValue >= 3) {
        ipcom.value.setAttribute("disabled", "disabled");
      } else {
        ipcom.value.removeAttribute("disabled");
      }
    });
    return {
      taskStr,
      appendANewTask,
      ipcom,
    };
  },
};
</script>

<style lang="scss" scoped>
.new-task-parent {
  margin-top: 24px;
  display: flex;

  .input-container {
    input {
      width: 244px;
      height: 20px;
      background: transparent;
      border-radius: 0 6px 6px 0;
      box-sizing: border-box;
      vertical-align: middle;
    }
  }
  .img-container {
    margin-left: 16px;
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }

    img:hover {
      cursor: pointer;
    }
  }
}
</style>