<script setup>
import { ref, onMounted } from "vue";
import Left from "./Left.vue";
import Right from "./Right.vue";
import Header from "./Header.vue";

const leftImgList1 = ref({});
const leftImgList2 = ref([]);

const clickEven = (val) => {
  console.log("888-8", val);
  leftImgList1.value = val;
};
</script>

<template>
  <div
    class="box"
    ondragstart="window.event.returnValue=false;return false;"
    oncontextmenu="window.event.returnValue=false;return false;"
    onselectstart="event.returnValue=false;return false;"
  >
    <Header></Header>
    <div class="main">
      <Left :leftImgList1="leftImgList1" :leftImgList2="leftImgList2"></Left>
      <Right :leftImgList1="leftImgList1" @clickChild="clickEven"></Right>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
.main {
  height: calc(100vh - 40px);
  width: 100%;
  display: flex;
}
</style>
