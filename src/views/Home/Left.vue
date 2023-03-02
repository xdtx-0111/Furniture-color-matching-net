<script setup>
import { ref, onMounted, toRefs, reactive, watchEffect, watch } from "vue";
import { useStore } from "@/store/store";
const data1 = ref({
  img: "",
  text: "",
});
const data2 = ref([]);
const store = useStore();

watch(
  () => store.list1,
  (val) => {
    data1.value = val;
  },
  { deep: true }
);

watch(
  () => store.list2,
  (val) => {
    console.log("val--", val);
    data2.value = val;
  },
  { deep: true }
);

const getImageUrl = (name) => {
  return new URL(name, import.meta.url).href;
};
const handleDet = (item, index) => {
  store.fn2Det(index);
};
</script>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    update() {
      location.reload();
    },
  },
};
</script>
<template>
  <div
    class="left"
    ondragstart="window.event.returnValue=false;return false;"
    oncontextmenu="window.event.returnValue=false;return false;"
    onselectstart="event.returnValue=false;return false;"
  >
    <div class="superposition">
      <div class="superposition_left">
        <div class="fx" v-show="data1.img !== ''">
          <li class="li_4">{{ data1?.name }}</li>
          <li class="li_3">{{ data1?.text }}</li>
        </div>
        <div class="superpositionimgLeft" v-show="data1.img !== ''">
          <img :src="getImageUrl(data1.img)" :alt="data1?.text" />
        </div>
      </div>

      <div class="superposition_rigth" v-show="data2.length !== 0">
        <div
          class="superpositionRigthImg"
          v-for="(item, i) in data2"
          :key="i"
          @click="handleDet(item, i)"
        >
          <li class="li_1">{{ item.name }}</li>
          <li class="li_2">{{ item.text }}</li>

          <div><img :src="getImageUrl(item.img)" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.left {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.left .superposition {
  width: 90vw;
  height: 95vh;
  padding-left: 40px;
  padding-top: 20px;
  padding-block: 20px;
  display: flex;
  box-sizing: border-box;
}
.fx {
  display: flex;
}
.superposition_left {
  width: 17vw;
}
.superposition_left .li_3 {
  font-size: 12px;
  height: 1.5vh;
  margin-left: 2vh;
  width: 2.8vw;
  overflow: hidden;
  white-space: nowrap;
}
.superposition_left .li_4 {
  font-size: 12px;
  height: 1.5vh;
  margin-left: 4vh;
  width: 2vw;
  overflow: hidden;
  white-space: nowrap;
}

.superpositionimgLeft {
  border-radius: 20px;
  border: 1px solid #ababab;
  width: 17vw;
  height: 90vh;
}

.superpositionimgLeft img {
  border-radius: 20px;
  width: 17vw;
  height: 100%;
}
.superpositionRigthImg:hover {
  transition: 0.5s;
  transform: scale(1.1);
}
.superpositionRigthImg:active {
  transition: 1s;
  transform: scale(0.1);
}
.superpositionRigthImg:visited {
  background-color: red;
}

.superpositionRigthImg {
  height: 25vh;
  display: inline-block;
  width: 5vw !important;
  overflow: visible;
}
.superpositionRigthImg > img {
  height: 100%;
}
.superpositionRigthImg .li_2 {
  font-size: 12px;
  height: 1.5vh;
  color: #414141;
  background-color: white;
  margin-left: 2vh;
  width: 4.3vw;
  overflow: hidden;
  white-space: nowrap;
}
.superpositionRigthImg .li_1 {
  font-size: 12px;
  background-color: white;
  height: 1.5vh;
  color: #414141;
  margin-left: 2vh;
  width: 4.3vw;
  overflow: hidden;
  white-space: nowrap;
}

.superposition_rigth {
  margin-top: 7vh;
  margin-left: -13vh;
  justify-items: flex-end;
  width: 65%;
  height: 95%;
  flex-wrap: wrap;
  display: flex;
}

.superposition_rigth img {
  width: 19vw;
  box-shadow: 1px 1px 1px 0.5px #cccccc;
  height: 34vh;
  border-radius: 15px;
  border: 0.5px solid #ababab;
}
</style>
