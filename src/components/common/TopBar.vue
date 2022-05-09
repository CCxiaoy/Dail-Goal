<template>
  <div class="container-parent">
    <!-- // 根据条件判断显示哪个图标 -->
    <div class="icon-container" v-if="false">
      <!-- // 置顶  -->
      <!-- // 实心 -->
      <img
        v-if="false"
        src="../../assets/topbar/solid/Topping.png"
        alt="点击取消置顶"
        srcset=""
      />
      <!-- // 空心 -->
      <img
        v-else
        src="../../assets/topbar/empty/unTopping.png"
        alt="点击置顶"
        srcset=""
      />
    </div>

    <div class="icon-container" v-if="false">
      <!-- // 固定  -->
      <!-- // 实心 -->
      <img
        v-if="false"
        src="../../assets/topbar/solid/Fixed.png"
        alt="点击取消固定"
        srcset=""
      />
      <!-- // 空心 -->
      <img
        v-else
        src="../../assets/topbar/empty/unFixed.png"
        alt="点击固定"
        srcset=""
      />
    </div>

    <div class="icon-container">
      <!-- // 编辑  -->
      <!-- // 实心 -->
      <img
        v-if="editingState"
        src="../../assets/topbar/solid/Editing.png"
        alt="点击完成编辑"
        @click="toggleEditingState"
        srcset=""
      />
      <!-- // 空心 -->
      <img
        v-else
        src="../../assets/topbar/empty/exitEdit.png"
        alt="点击进入编辑"
        @click="toggleEditingState"
        srcset=""
      />
    </div>

    <div class="icon-container" v-if="false">
      <!-- // 设置  -->
      <!-- // 实心 -->
      <img
        v-if="false"
        src="../../assets/topbar/solid/Setting.png"
        alt="点击完成设置"
        srcset=""
      />
      <!-- // 空心 -->
      <img
        v-else
        src="../../assets/topbar/empty/finishSetting.png"
        alt="点击进入设置"
        srcset=""
      />
    </div>

    <div class="icon-container">
      <!-- // 最小化  -->
      <!-- // 实心 -->
      <img
        src="../../assets/topbar/solid/Minimize.png"
        alt="点击最小化窗口"
        @click="closeMain"
        srcset=""
      />
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount } from "@vue/runtime-core";
import { useStore } from "vuex";
import { closeMain } from "../../useIpc";
import { sendAMessage } from "../../common/notification/message";

export default {
  setup() {
    // get store
    const store = useStore();
    // modify system states
    // editing state
    let editingState = computed(() => {
      return store.state.systemStates.editingState;
    });
    // modify editing state
    const toggleEditingState = () => {
      store.commit("toggleEditingState");
      sendAMessage("切换编辑状态成功", "success");
    };

    onBeforeUnmount(() => {
      toggleEditingState();
      // if (editingState.value) {

      // }
    });

    // topping state
    // let toppingState = computed(() => {
    //   return store.state.systemStates.toppingState;
    // });
    // modiy topping state
    // const toggleToppingState = () => {
    //   store.commit("toggleToppingState");
    // };

    return {
      editingState,
      toggleEditingState,
      // toppingState,
      // toggleToppingState,
      // 隐藏窗口到托盘
      closeMain,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-parent {
  margin-top: 4px;
  margin-bottom: 16px;
  padding-bottom: 4px;
  -webkit-app-region: drag;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid black;

  .icon-container {
    display: flex;

    img {
      -webkit-app-region: no-drag;
      width: 16px;
      height: 16px;
      margin-left: 4px;
    }

    img:hover {
      -webkit-app-region: no-drag;
      cursor: pointer;
      width: 18px;
      height: 18px;
    }
  }
}
</style>