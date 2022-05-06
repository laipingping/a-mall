<template>
  <div class="bottom-bar">
    <div class="bottom-bar-item left">
      <div>
        <img src="~assets/img/detail/server.svg" alt="" />
        <div class="servere">客服</div>
      </div>
      <div>
        <img src="~assets/img/detail/cart.svg" alt="" />
        <div class="shop">购物车</div>
      </div>
      <div>
        <img src="~assets/img/detail/collect.svg" alt="" />
        <div class="collect">收藏</div>
      </div>
    </div>
    <div class="bottom-bar-item right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      // console.log('添加到购物车');
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  text-align: center;

  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
}
.bottom-bar-item {
  flex: 1;
  display: flex;
}
.bottom-bar-item > div {
  flex: 1;
}
img {
  width: 20px;
  height: 20px;
  margin: 5px auto 2px;
}
.cart {
  background: linear-gradient(to right, rgb(255, 187, 0), rgb(255, 123, 0));
  border-radius: 30% 0 0 30%;
  color: white;
  padding-top: 2.5vh;
}
.buy {
  background: linear-gradient(to right, rgb(255, 123, 0), red);
  border-radius: 0 30% 30% 0;
  color: white;
  padding-top: 2.5vh;
}
</style>
