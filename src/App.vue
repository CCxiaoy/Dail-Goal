<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div>
    <nav>
      <top-bar></top-bar>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TopBar from "./components/common/TopBar.vue";

export default {
  components: {
    TopBar,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 8px 0 4px;
  padding: 0;
}
main{
  width: 100%;
}
</style>
