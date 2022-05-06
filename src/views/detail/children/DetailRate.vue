<template>
  <div class="detail-rate" v-if="comments.length !== 0">
    <div>
      <div class="left">商品评价</div>
      <div class="right">
        <span>查看全部</span>
        <img src="~assets/img/detail/right.svg" alt="" />
      </div>
    </div>
    <div class="content">
      <!-- <img :src="comments.user.avatar" alt="" /> -->
      <!-- <span>{{comments.user.uname}}</span> -->
      <p>{{comments.content}}</p>
      <p>{{comments.explain}}</p>
      <p>{{comments.style}}</p>
    </div>
    <!-- <p>{{comments.content}}</p>
<p>{{comments.created}}</p>
<p>{{comments.explain}}</p>
<p>{{comments.user}}</p>
<p>{{comments.user.avatar}}</p>
<p>{{comments.user.uname}}</p> -->
  </div>
</template>

<script>
export default {
  name: "DetailRate",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-rate {
  border-bottom: 5px solid #f2f5f8;
  padding: 20px 5px;
}
.content img {
  border-radius: 50%;
  width: 42px;
  height: 42px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.content {
  display: block;
}
.right img {
  width: 5vw;
}
</style>
