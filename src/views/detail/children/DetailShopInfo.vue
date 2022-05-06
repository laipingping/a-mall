<template>
  <div class="detail-shop-info" v-if="score.length != 0">
    <div class="title">
      <img :src="shopInfo.shopLogo" alt="" />
      <span class="shop-name">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-entire">
      <!-- <table>
        <tr>
          <td rowspan="2">{{ shopInfo.cSells }}</td>
          <td rowspan="2">{{ shopInfo.cGoods }}</td>
          <td>{{ shopInfo.score[0].name }}</td>
          <td>{{ shopInfo.score[0].score }}</td>
        </tr>
        <tr>
          <td>{{ shopInfo.score[1].name }}</td>
          <td>{{ shopInfo.score[1].score }}</td>
        </tr>
        <tr>
          <td>总销量</td>
          <td>全部宝贝</td>
          <td>{{ shopInfo.score[2].name }}</td>
          <td>{{ shopInfo.score[2].score }}</td>
        </tr>
      </table> -->

      <div class="left">
        <div class="left-item">
          <p>{{ shopInfo.cSells }}</p>
          <p>总销量</p>
        </div>
        <div class="right-item">
          <p>{{ shopInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in score" :key="index">
          <span>{{ item.name }}</span>
          <span class="score" :class="{ isBetter: item.isBetter }">{{
            item.score
          }}</span>
          <span class="better" :class="{ isBetter: item.isBetter }">
            {{ item.isBetter ? "高" : "低" }}
          </span>
        </div>
      </div>
    </div>
    <div class="btn"><div>进店逛逛</div></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    score: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detail-shop-info {
  border-bottom: 5px solid rgb(238, 236, 236);
  padding-bottom: 20px;
}
.title {
  margin: 25px 10px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgb(238, 234, 234);
}
.shop-name {
  margin: 20px;
  font-size: 18px;
}
.shop-entire {
  display: flex;
  text-align: center;
}
.left,
.right {
  flex: 1;
}
.left {
  display: flex;
}
.left-item,
.right-item {
  flex: 1;
}

.better,
.score {
  color: white;
  background-color: rgb(1, 185, 1);
}
.isBetter {
  width: 5px;
  height: 5px;
  background-color: rgb(255, 57, 57);
}
.btn {
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  padding: 20px;
}
</style>
