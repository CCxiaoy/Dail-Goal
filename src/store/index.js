import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

// 用localStorage做持久化
export default createStore({
  plugins: [createPersistedState()],
  state: {
    tasks: [
    ],
    editingState: true,
    systemStates: {
      editingState: false,
      // toppingState: false,
    }
  },
  getters: {

  },
  mutations: {
    // Task Related
    // append
    appendSingleTask(state, task) {
      state.tasks.push({ ...task })
    },
    // edit
    editSingleTask(state, task) {
      let i;
      for (i = 0; i < state.tasks.length; i++) {
        if (task.id === state.tasks[i].id) {
          state.tasks[i] = task;
          break;
        }
      }
    },
    // delete
    deleteSingleTask(state, taskId) {
      // console.log(taskId);
      let i;
      for (i = 0; i < state.tasks.length; i++) {
        if (taskId === state.tasks[i].id) {
          state.tasks.splice(i, 1);
          break;
        }
      }
    },
    // System state change
    // editingState
    toggleEditingState(state) {
      state.systemStates.editingState = !state.systemStates.editingState;
    },
    // toppingState
    // toggleToppingState(state) {
    //   state.systemStates.toppingState = !state.systemStates.toppingState;
    // }
  },
  actions: {

  },
  modules: {

  }
})



