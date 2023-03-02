<template>
  <div class="header_1">
    <div class="box_3"><div class="jj">迪信家装配色展示</div></div>

    <div class="box_4">
      <div class="fu_3"><router-link to="/home">进入配色网</router-link></div>
    </div>
  </div>
  <div class="box">
    <div>
      <li>4Q银檀</li>
      <img src="/img/1-木饰面/4Q银檀.jpg" alt="" />
    </div>
    <div>
      <li>9Q浅色</li>
      <img src="/img/1-木饰面/9Q浅色.jpg" alt="" />
    </div>
    <div>
      <li>HX灰橡</li>
      <img src="/img/1-木饰面/HX灰橡.jpg" alt="" />
    </div>
    <div>
      <li>9S欧洲橡</li>
      <img src="/img/1-木饰面/9S欧洲橡.jpg" alt="" />
    </div>
    <div>
      <li>BX白橡</li>
      <img src="/img/1-木饰面/BX白橡.jpg" alt="" />
    </div>
    <div>
      <li>NHY新幻影</li>
      <img src="/img/1-木饰面/NHY新幻影.jpg" alt="" />
    </div>
    <div>
      <li>EV</li>
      <img src="/img/1-木饰面/EV.jpg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header_1 {
  font: 28px/100% "微软细黑";
  background: #ababab;
  color: white;
  color: #414141;
  line-height: 45px;
  display: flex;
}
.jj {
  letter-spacing: 4vh;
}
.box_3 {
  flex: 4;
  text-align: center;
  margin-left: 20vw;
}
.box_4 {
  font-size: 15px;
  flex: 1;
}
.box {
  width: 100vw;
  height: 92.5vh;
  display: flex;
  box-sizing: border-box;
}
.box > div {
  display: inline-block;
  margin: 2.5px;
  height: 100%;
  width: 15%;
}
.box > div > li {
  font-size: 15px;
  margin: 5px;
  text-align: center;
}
.box > div > img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.fu_3 {
  float: right;
  margin-right: 2vw;
}
</style>
