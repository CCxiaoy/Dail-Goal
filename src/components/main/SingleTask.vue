<template>
  <div class="container-parent">
    <!-- 编辑的时候切换下 从P元素切换成input元素 -->
    <div class="p-container" v-if="!editingState">
      <p>{{ index + 1 }}. {{ task.message }}</p>
    </div>
    <div class="input-container" v-else>
      <input type="text" v-model="AfterEditingMsg" maxlength="17"/>
    </div>

    <!-- 仅在编辑状态下显示 -->
    <div class="icons-collection" v-if="editingState">
      <div class="icon-container">
        <img
          src="../../assets/task/edit.png"
          alt="点击编辑"
          @click="editSingleTask"
        />
      </div>
      <div class="icon-container">
        <img
          src="../../assets/task/delete.png"
          alt="点击删除"
          @click="deleteSingleTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { sendAMessage } from "../../common/notification/message";

export default {
  props: ["task", "index"],
  setup(props) {
    // get store
    const store = useStore();
    // edditting state
    // get
    const editingState = computed(() => {
      return store.state.systemStates.editingState;
    });

    // model value for input
    let AfterEditingMsg = ref("");
    // 初始化afterEditingMsg
    onMounted(() => {
      AfterEditingMsg.value = "";
      AfterEditingMsg.value = props.task.message;
    });
    // when editingstate changes, do these operations
    watch(editingState, (newValue) => {
      if (newValue) {
        AfterEditingMsg.value = "";
        AfterEditingMsg.value = props.task.message;
      }
    });

    // edit task
    const editSingleTask = () => {
      const newTask = Object.assign(props.task);
      newTask.message = AfterEditingMsg.value;
      sendAMessage('编辑成功', 'success');
      store.commit("editSingleTask", newTask);
    };

    // delete task
    const deleteSingleTask = () => {
      sendAMessage('删除成功', 'success');
      store.commit("deleteSingleTask", props.task.id);
    };

    return { editingState, AfterEditingMsg, editSingleTask, deleteSingleTask };
  },
};
</script>

<style lang="scss" scoped>
.container-parent {
  display: flex;
  margin-top: 8px;
  font-size: 16px;
  height: 16px;

  .input-container {
    input {
      width: 230px;
      border: 0;
    }
  }

  .icons-collection {
    margin-left: 8px;
    display: flex;
    justify-content: space-between;
    .icon-container {
      img {
        width: 12px;
        height: 12px;
        margin-left: 4px;
      }

      img:hover {
        cursor: pointer;
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>