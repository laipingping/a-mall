<template>
  <div class="navbar">
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt="" />
      </div>
      <div slot="center" class="center">
        <div
         class="center-item"
          v-for="(item, index) in titles"
           :key="index"
           :class="{active: currentIndex === index}" @click="itemClick(index)">
           {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backClick() {
      // console.log("点我返回");
      // this.$router.go(-1)
      this.$router.push('/home')
    },
    itemClick(index) {
      // return
      this.currentIndex = index
      this.$emit('titleClick', index)
      // console.log(index);
    }
  }
};
</script>

<style scoped>
.nav-bar .left {
  padding-top: 5px;
}
img {
  width: 20px;
  height: 20px;
}
.center {
  display: flex;
}
.center-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-tint);
}
</style>
