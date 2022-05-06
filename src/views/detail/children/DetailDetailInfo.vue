<template>
  <div class="detail-detail-info" v-if="detailImage.length != 0">
    <div class="start"></div>
    <div class="key-text">{{ detailInfo.desc }}</div>
    <div class="end"></div>
    <div class="img">
      <div v-for="(item, index) in detailImage" :key="index">
        <div class="key">{{item.key}}</div>
        <img :src="imageitem"
              alt=""
              v-for="(imageitem, imageindex) in item.list"
             :key="imageindex"
             @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDetailInfo",
  props: {
    detailImage: {
      type: Array,
      default() {
        return [];
      },
    },
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
        this.$emit("imgLoad");
    }
  }
};
</script>

<style scoped>
.detail-detail-info {
  margin-top: 10px;
}

.key-text {
  padding: 15px;
  font-size: 14px;
  color: var(--color-text);
}
.start,
.end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.start::before,
.end::after {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #333333;
}
.start {
  float: left;
}
.end {
  float: right;
}
.img {
  padding: 10px 0;
}
img {
  width: 100%;
}
.img .key {
  text-align: center;
  margin: 10px 0;
}
</style>
