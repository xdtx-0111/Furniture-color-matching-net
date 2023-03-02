<script setup>
import { ref, onMounted, toRefs } from "vue";
import { useStore } from "@/store/store";
const hotcate = ref([]);
const hotcate1 = ref([]);
hotcate.value = [
  "木饰面",
  "皮",
  "家具木面",
  "布",
  "窗帘",
  "墙布挂板",
  "硬包",
  "玻璃",
  "其他",
];
hotcate1.value = {
  木饰面: [
    {
      text: "4Q银檀",
      img: "/img/1-木饰面/4Q银檀.jpg",
      name: "木饰面",
      flag: false,
    },
    {
      text: "9Q浅色",
      img: "/img/1-木饰面/9Q浅色.jpg",
      name: "木饰面",
    },
    {
      text: "9S欧洲橡",
      img: "/img/1-木饰面/9S欧洲橡.jpg",
      name: "木饰面",
    },
    {
      text: "BX白橡",
      img: "/img/1-木饰面/BX白橡.jpg",
      name: "木饰面",
    },
    {
      text: "EV",
      img: "/img/1-木饰面/EV.jpg",
      name: "木饰面",
    },
    {
      text: "HX灰橡",
      img: "/img/1-木饰面/HX灰橡.jpg",
      name: "木饰面",
    },
    {
      text: "HX新幻影",
      img: "/img/1-木饰面/NHY新幻影.jpg",
      name: "木饰面",
    },
  ],
  皮: [
    {
      text: "巴西P204",
      img: "/img/2-皮/巴西皮/P204.jpg",
      flag: false,
      name: "皮",
    },
    {
      text: "巴西P218",
      img: "/img/2-皮/巴西皮/P218.jpg",
      name: "皮",
    },
    {
      text: "巴西P237",
      img: "/img/2-皮/巴西皮/P237.jpg",
      name: "皮",
    },
    {
      text: "巴西P278",
      img: "/img/2-皮/巴西皮/P278.jpg",
      name: "皮",
    },
    {
      text: "巴西P316",
      img: "/img/2-皮/巴西皮/P316.jpg",
      name: "皮",
    },
    {
      text: "巴西P403",
      img: "/img/2-皮/巴西皮/P403.jpg",
      name: "皮",
    },
    {
      text: "意大利80米白",
      img: "/img/2-皮/意大利皮/80米白.jpg",
      name: "皮",
    },
    {
      text: "意大利H2634",
      img: "/img/2-皮/意大利皮/H2634.jpg",
      name: "皮",
    },
    {
      text: "意大利A681",
      img: "/img/2-皮/意大利皮/A681.jpg",
      name: "皮",
    },
    {
      text: "意大利C631",
      img: "/img/2-皮/意大利皮/C631.jpg",
      name: "皮",
    },
    {
      text: "意大利C632",
      img: "/img/2-皮/意大利皮/C632.jpg",
      name: "皮",
    },
    {
      text: "意大利C633",
      img: "/img/2-皮/意大利皮/C633.jpg",
      name: "皮",
    },
    {
      text: "意大利C634",
      img: "/img/2-皮/意大利皮/C634.jpg",
      name: "皮",
    },
    {
      text: "意大利C635",
      img: "/img/2-皮/意大利皮/C635.jpg",
      name: "皮",
    },
    {
      text: "意大利C636",
      img: "/img/2-皮/意大利皮/C636.jpg",
      name: "皮",
    },
    {
      text: "意大利C638",
      img: "/img/2-皮/意大利皮/C638.jpg",
      name: "皮",
    },
    {
      text: "意大利D661",
      img: "/img/2-皮/意大利皮/D661.jpg",
      name: "皮",
    },
    {
      text: "意大利k651",
      img: "/img/2-皮/意大利皮/k651.jpg",
      name: "皮",
    },
    {
      text: "意大利k652",
      img: "/img/2-皮/意大利皮/K652.jpg",
      name: "皮",
    },
    {
      text: "意大利k653",
      img: "/img/2-皮/意大利皮/K653.jpg",
      name: "皮",
    },
    {
      text: "意大利k655",
      img: "/img/2-皮/意大利皮/K655.jpg",
      name: "皮",
    },
    {
      text: "意大利k658",
      img: "/img/2-皮/意大利皮/K658.jpg",
      name: "皮",
    },
    {
      text: "意大利k659",
      img: "/img/2-皮/意大利皮/K659.jpg",
      name: "皮",
    },
    {
      text: "意大利k662",
      img: "/img/2-皮/意大利皮/K662.jpg",
      name: "皮",
    },
    {
      text: "意大利k663",
      img: "/img/2-皮/意大利皮/K663.jpg",
      name: "皮",
    },
    {
      text: "意大利s641",
      img: "/img/2-皮/意大利皮/S641.jpg",
      name: "皮",
    },
  ],
  家具木面: [
    {
      text: "BW胡桃木",
      img: "/img/3-家具木面/BW胡桃木.jpg",
      flag: false,
      name: "家具木面",
    },
    {
      text: "KYC橡木米色",
      img: "/img/3-家具木面/KYC橡木米色.jpg",
      name: "家具木面",
    },
    {
      text: "KYG橡木珍珠黑",
      img: "/img/3-家具木面/KYG橡木珍珠黑.jpg",
      name: "家具木面",
    },
    {
      text: "WO白橡",
      img: "/img/3-家具木面/WO白橡.jpg",
      name: "家具木面",
    },
    {
      text: "亮光中灰",
      img: "/img/3-家具木面/亮光中灰.jpg",
      name: "家具木面",
    },
    {
      text: "亮光橙",
      img: "/img/3-家具木面/亮光橙.jpg",
      name: "家具木面",
    },
    {
      text: "亮光白",
      img: "/img/3-家具木面/亮光白.jpg",
      name: "家具木面",
    },
    {
      text: "亮光碳灰",
      img: "/img/3-家具木面/亮光碳灰.jpg",
      name: "家具木面",
    },
    {
      text: "亮光米",
      img: "/img/3-家具木面/亮光米.jpg",
      name: "家具木面",
    },
    {
      text: "亮光紫",
      img: "/img/3-家具木面/亮光紫.jpg",
      name: "家具木面",
    },
    {
      text: "亮光芥末黄",
      img: "/img/3-家具木面/亮光芥末黄.jpg",
      name: "家具木面",
    },
    {
      text: "亮光蓝",
      img: "/img/3-家具木面/亮光蓝.jpg",
      name: "家具木面",
    },
    {
      text: "粉红色",
      img: "/img/3-家具木面/粉红色.jpg",
      name: "家具木面",
    },
    {
      text: "粉蓝色",
      img: "/img/3-家具木面/粉蓝色.jpg",
      name: "家具木面",
    },
    {
      text: "草绿色",
      img: "/img/3-家具木面/草绿色.jpg",
      name: "家具木面",
    },
  ],
  布: [
    {
      text: "804-01",
      img: "/img/4-布/804-01.jpg",
      flag: false,
      name: "布",
    },
    {
      text: "804-02",
      img: "/img/4-布/804-02.jpg",
      name: "布",
    },
    {
      text: "804-201",
      name: "布",
      img: "/img/4-布/804-201.jpg",
    },
    {
      text: "D793-07",
      img: "/img/4-布/D793-07.jpg",
    },
    {
      name: "布",
      text: "D793-B2",
      img: "/img/4-布/D793-B2.jpg",
    },
    {
      name: "布",
      text: "H782-01",
      img: "/img/4-布/H782-01.jpg",
    },
    {
      name: "布",
      text: "HR02",
      img: "/img/4-布/HR02.jpg",
    },
    {
      name: "布",
      text: "HR61",
      img: "/img/4-布/HR61.jpg",
    },
    {
      name: "布",
      text: "T799-04",
      img: "/img/4-布/T799-04.png",
    },
    {
      name: "布",
      text: "T800-04",
      img: "/img/4-布/T800-04.png",
    },
    {
      name: "布",
      text: "T800-10",
      img: "/img/4-布/T800-10.jpg",
    },
    {
      name: "布",
      text: "TA802-06",
      img: "/img/4-布/TA802-06.jpg",
    },
    {
      name: "布",
      text: "TA802-07",
      img: "/img/4-布/TA802-07.jpg",
    },
    {
      name: "布",
      text: "TA802-10",
      img: "/img/4-布/TA802-10.jpg",
    },
    {
      name: "布",
      text: "V799-428",
      img: "/img/4-布/V799-428.jpg",
    },
    {
      name: "布",
      text: "V799-436",
      img: "/img/4-布/V799-436.jpg",
    },
    {
      name: "布",
      text: "V799-441",
      img: "/img/4-布/V799-441.jpg",
    },
    {
      name: "布",
      text: "V803-24",
      img: "/img/4-布/V803-24.jpg",
    },
    {
      name: "布",
      text: "V803-31",
      img: "/img/4-布/V803-31.jpg",
    },
  ],
  窗帘: [
    {
      name: "窗帘",
      text: "SPC-AB-08",
      img: "/img/5-窗帘/SPC-AB-08.jpg",
      flag: false,
    },
    {
      name: "窗帘",
      text: "SPC-AB-09",
      img: "/img/5-窗帘/SPC-AB-09.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-01",
      img: "/img/5-窗帘/SPC-AH-01.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-04",
      img: "/img/5-窗帘/SPC-AH-04.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-05",
      img: "/img/5-窗帘/SPC-AH-05.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-10",
      img: "/img/5-窗帘/SPC-AH-10.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-11",
      img: "/img/5-窗帘/SPC-AH-11.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-12",
      img: "/img/5-窗帘/SPC-AH-12.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-14",
      img: "/img/5-窗帘/SPC-AH-14.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-22",
      img: "/img/5-窗帘/SPC-AH-22.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-23",
      img: "/img/5-窗帘/SPC-AH-23.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-27",
      img: "/img/5-窗帘/SPC-AH-27.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-28",
      img: "/img/5-窗帘/SPC-AH-28.jpg",
    },
    {
      text: "SPC-AH-29",
      img: "/img/5-窗帘/SPC-AH-29.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-35",
      img: "/img/5-窗帘/SPC-AH-35.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-38",
      img: "/img/5-窗帘/SPC-AH-38.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AH-41",
      img: "/img/5-窗帘/SPC-AH-41.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AI-01",
      img: "/img/5-窗帘/SPC-AI-01.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AI-04",
      img: "/img/5-窗帘/SPC-AI-04.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AM-1125",
      img: "/img/5-窗帘/SPC-AM-1125.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AM-1126",
      img: "/img/5-窗帘/SPC-AM-1126.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AM-1127",
      img: "/img/5-窗帘/SPC-AM-1127.jpg",
    },
    {
      name: "窗帘",
      text: "SPC-AM-1128",
      img: "/img/5-窗帘/SPC-AM-1128.jpg",
    },
  ],
  墙布挂板: [
    {
      name: "墙布挂板",
      text: "BW05",
      img: "/img/6-墙布挂板/BW05.jpg",
      flag: false,
    },
    {
      name: "墙布挂板",
      text: "BW06",
      img: "/img/6-墙布挂板/BW06.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW07",
      img: "/img/6-墙布挂板/BW07.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW09",
      img: "/img/6-墙布挂板/BW09.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW10",
      img: "/img/6-墙布挂板/BW10.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW11",
      img: "/img/6-墙布挂板/BW11.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW12",
      img: "/img/6-墙布挂板/BW12.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW13",
      img: "/img/6-墙布挂板/BW13.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW14",
      img: "/img/6-墙布挂板/BW14.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW15",
      img: "/img/6-墙布挂板/BW15.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW16",
      img: "/img/6-墙布挂板/BW16.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW17",
      img: "/img/6-墙布挂板/BW17.jpg",
    },
    {
      name: "墙布挂板",
      text: "BW18",
      img: "/img/6-墙布挂板/BW18.jpg",
    },
  ],
  硬包: [
    {
      text: "古铜硬包",
      name: "硬包",
      img: "/img/7-硬包/古铜硬包.jpg",
      flag: false,
    },
    {
      name: "硬包",
      text: "浅蓝色硬包",
      img: "/img/7-硬包/浅蓝色硬包.jpg",
    },
    {
      name: "硬包",
      text: "浅铜硬包",
      img: "/img/7-硬包/浅铜硬包.jpg",
    },
    {
      name: "硬包",
      text: "米色硬包",
      img: "/img/7-硬包/米色硬包.jpg",
    },
    {
      name: "硬包",
      text: "香槟金硬包",
      img: "/img/7-硬包/香槟金硬包.jpg",
    },
  ],
  玻璃: [
    {
      name: "玻璃",
      text: "中灰玻",
      img: "/img/8-玻璃/中灰玻.jpg",
      flag: false,
    },
    {
      name: "玻璃",
      text: "啡玻",
      img: "/img/8-玻璃/啡玻.jpg",
    },
    {
      name: "玻璃",
      text: "橙玻",
      img: "/img/8-玻璃/橙玻.jpg",
    },
    {
      name: "玻璃",
      text: "白玻",
      img: "/img/8-玻璃/白玻.jpg",
    },
    {
      name: "玻璃",
      text: "碳灰玻",
      img: "/img/8-玻璃/碳灰玻.jpg",
    },
    {
      name: "玻璃",
      text: "米玻",
      img: "/img/8-玻璃/米玻.jpg",
    },
    {
      name: "玻璃",
      text: "粉红色玻",
      img: "/img/8-玻璃/粉红色玻.jpg",
    },
    {
      name: "玻璃",
      text: "粉蓝色玻",
      img: "/img/8-玻璃/粉蓝色玻.jpg",
    },
    {
      name: "玻璃",
      text: "紫玻",
      img: "/img/8-玻璃/紫玻.jpg",
    },
    {
      name: "玻璃",
      text: "夹胶玻璃(灰丝)",
      img: "/img/8-玻璃/艺术夹胶玻璃(灰丝).jpg",
    },
    {
      name: "玻璃",
      text: "夹胶玻璃(金丝)",
      img: "/img/8-玻璃/艺术夹胶玻璃(金丝).jpg",
    },
    {
      name: "玻璃",
      text: "芥末黄玻",
      img: "/img/8-玻璃/芥末黄玻.jpg",
    },
    {
      name: "玻璃",
      text: "草绿色玻",
      img: "/img/8-玻璃/草绿色玻.jpg",
    },
    {
      name: "玻璃",
      text: "蓝玻",
      img: "/img/8-玻璃/蓝玻.jpg",
    },
    {
      name: "玻璃",
      text: "透明灰玻",
      img: "/img/8-玻璃/透明灰玻.jpg",
    },
    {
      name: "玻璃",
      text: "透明茶玻",
      img: "/img/8-玻璃/透明茶玻.jpg",
    },
  ],
  其他: [
    {
      name: "大理石",
      text: "安卡拉灰",
      img: "/img/9-其它/1安卡拉灰.jpg",
      flag: false,
    },
    {
      name: "大理石",
      text: "黄金米黄",
      img: "/img/9-其它/2黄金米黄.jpg",
    },
    {
      name: "大理石",
      text: "名仕灰大理石",
      img: "/img/9-其它/3名仕灰大理石.jpg",
    },
    {
      name: "人造石",
      text: "灰色人造石",
      img: "/img/9-其它/4灰色人造石.jpg",
    },
    {
      name: "人造石",
      text: "米色人造石",
      img: "/img/9-其它/5米色人造石.jpg",
    },
    {
      name: "乳胶漆",
      text: "幻影乳胶漆",
      img: "/img/9-其它/6幻影乳胶漆.jpg",
    },
    {
      name: "木地板",
      text: "DX001",
      img: "/img/9-其它/DX001.png",
    },
    {
      name: "木地板",
      text: "DX002",
      img: "/img/9-其它/DX002.png",
    },
    {
      name: "木地板",
      text: "DX003",
      img: "/img/9-其它/DX003.png",
    },
    {
      name: "铝",
      text: "灰铝",
      img: "/img/9-其它/灰铝.jpg",
    },
    {
      name: "铝",
      text: "玫瑰金铝",
      img: "/img/9-其它/玫瑰金铝.jpg",
    },
    {
      text: "银铝",
      name: "铝",
      img: "/img/9-其它/银铝.jpg",
    },
  ],
};

const props = defineProps({
  leftImgListS: Array,
});

const { leftImgListS } = toRefs(props);

const emit = defineEmits(["clickChild"]);
const clickChild = () => {
  let param = {
    content: "b",
  };
  emit("clickChild", param);
};

const store = useStore();

const getImageUrl = (name) => {
  return new URL(name, import.meta.url).href;
};
const handleClick = (item) => {
  let param = {
    text: item.text,
    img: item.img,
    name: item.name,
  };
  if (item.name == "木饰面") {
    store.fn1(param);
  } else {
    console.log("store.list2", store.list2.length);
    if (store.list2.length != 22) {
      store.fn2(param);
    }
  }
};

const handleClickTitle = (item) => {
  hotcate1.value[item][0].flag = !hotcate1.value[item][0].flag;
};
</script>

<template >
  <div class="right">
    <template v-for="(item, index) in hotcate" :key="index">
      <div class="l" @click="handleClickTitle(item)">{{ item }}</div>
      <div class="m">
        <div class="l_box">
          <div
            class="one"
            id="one"
            v-for="(items, indexs) in hotcate1[item]"
            :key="indexs"
            @click="handleClick(items)"
            v-show="hotcate1[item][0].flag == true"
          >
            <div class="one_1">
              <img :src="getImageUrl(items.img)" alt="" />
              <li class="one_2">{{ items.text }}</li>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.right {
  overflow-y: auto;
  width: 25vh;
  border: 1px solid #ababab;
  border-radius: 5px;
  overflow-x: hidden;
}
.m {
  margin: 3px;
}
.l {
  width: 98%;
  font-size: 18px;
  box-shadow: 2.5px 2.5px 2.5px 0px #ababab;
  -webkit-box-shadow: 2.5px 2.5px 2.5px 0px #ababab;
  -moz-box-shadow: 2.5px 2.5px 2.5px 0px #ababab;
  border-radius: 5px;
  border-radius: 5px;
  text-align: center;
  background: #a9a9a9;
  border: 1px;
  line-height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #414141;
  cursor: pointer;
  margin-left: 1%;
}

.l:active {
  border: 1px solid #000000;
  transition: 1s;
  transform: scale(0.9);
}

.l_box {
  font: 13px/100% "楷书";

  justify-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

img {
  width: 100%;
  height: 100%;
  background-size: cover;
}

.one {
  margin-block: 5px;
  display: flex;
  box-sizing: border-box;
  width: 65px;
  height: 94px;
  margin-top: 5px;
  padding: 1.5px;
  border: 0.5px solid #ababab;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
}

.one:hover {
  box-shadow: 1px 1px 1px 0.8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 1px 1px 0.8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 1px 0.8px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  transform: scale(1.1);
}
.one:active {
  border: 1px solid #414141;
  transition: 1s;
  transform: scale(0.5);
}

.one_1 {
  width: 100%;
  height: 60px;
  border-radius: 5px;
}

.one_1 > img {
  border-radius: 5px;
}

.one_2 {
  text-align: center;
  margin-top: 5px;
}
</style>
