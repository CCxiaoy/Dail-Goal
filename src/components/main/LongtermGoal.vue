<template>
  <div class="input-container">
    <input
      type="text"
      v-model="goal"
      @blur="syncToLS"
      placeholder="你的梦想是什么"
      maxlength="18"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    let goal = ref("");
    // 失去焦点时，让localStorage同步变化
    const syncToLS = () => {
      if (!goal.value) {
        goal.value = "宝，好歹写点吧qwq";
      }
      localStorage.setItem("goal", goal.value);
    };
    const syncFromLs = () => {
      goal.value = localStorage.getItem("goal");
    };
    // 初始化goal内容
    onMounted(() => {
      syncFromLs();
    });
    return {
      goal,
      syncToLS,
      syncFromLs,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  width: 100%;
  input {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    height: 16px;
    border: 0;
  }
}
</style>