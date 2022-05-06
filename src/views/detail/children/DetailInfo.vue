<template>
  <div class="detail-info" v-if="services.length != 0">
    <p class="detail-text">{{ itemInfo.title }}</p>
    <div class="detail-price">
      <span class="price">{{ itemInfo.price }}</span>
      <span class="oldPrice">{{ itemInfo.oldPrice }}</span>
      <span class="discount" :style="{background: itemInfo.discountBgColor}">{{ itemInfo.discountDesc }}</span>
    </div>
    <div class="columns">
      <span class="columns-item">{{columns[0]}}</span>
      <span class="columns-item">{{columns[1]}}</span>
      <span class="columns-item">{{services[services.length-1].name}}</span>
    </div>
    <div class="services">
      <div class="services-item" v-for="index in services.length-1" :key="index">
        <img :src="services[index-1].icon" alt="" class="services-icon" />
        <span>{{ services[index-1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    services: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      // delivery: ['退货包运费', '全国包邮', '7天无理由退货']
    }
  }
};
</script>

<style scoped>
.detail-text {
  margin: 10px;
  font-size: 16px;
  color: black;
}
.detail-price {
  margin: 2px;
}
.price {
  color: var(--color-high-text);
  font-size: 25px;
  font-weight: 500;
  margin-left: 8px;
}
.oldPrice {
  text-decoration: line-through;
  font-size: 13px;
  margin: 3px;
}
.discount {
  border-radius: 50%;
  color: white;
  margin: 3px;
  font-size: 14px;
}
.columns {
  display: flex;
  margin-top: 20px;
  padding-bottom: 10px;

}
.columns-item {
  flex: 1;
  font-size: 13px;
  text-align: center;
}
.services {
  display: flex;
  border-top: 2px solid rgb(241, 239, 239);
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 4px solid rgb(241, 239, 239);
}
.services-item {
  text-align: center;
  flex: 1;
  color: black;
  font-size: 14px;
}
.services-icon {
  width: 20px;
  height: 20px;
}
</style>
