<script setup>
import { ref, onMounted } from "vue";
</script>


<template>
  <div class="header">
    <div class="box_1"><div class="jj_1">迪信家装配色展示</div></div>
    <div class="box_2">
      <div class="fu_1">
        <router-link to="/">切换主页</router-link>
      </div>
      <div class="fu_2">
        <a href="javascript:location.reload(true)">重新选择</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  font: 28px/100% "微软细黑";
  background: #ababab;
  line-height: 45px;
  color: #414141;
  display: flex;
}
.box_1 {
  margin-left: 8vw;
  text-align: center;
  flex: 4;
}
.box_2 {
  font-size: 15px;
  flex: 1;
}
.jj_1 {
  letter-spacing: 4vh;
}
.fu_1 {
  margin-right: 2.5vw;
  float: right;
}
.fu_2 {
  margin-right: 2.5vw;
  float: right;
}
</style>
