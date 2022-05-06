<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <scroll
           class="scroll"
           ref="scroll"
           @scroll="contentScroll"
           :probeType=3>
      <!-- 测试能不能加入购物车 -->
      <!-- <div>{{$store.state.cartList.length}}</div> -->
      <div><li v-for="(item, index) in $store.state.cartList" :key="index">{{item}}</li></div>
      <detail-swiper :topImages="topImages" />
      <detail-info
                   :itemInfo="itemInfo"
                   :columns="columns"
                   :services="services" />
      <detail-shop-info
                        :shopInfo="shopInfo" :score="score"
                        />
      <detail-detail-info
                          :detailInfo="detailInfo"
                          :detailImage="detailImage"
                          @imgLoad="imgLoad"
                           />
      <detail-parameter
                        :itemParamsInfo="itemParamsInfo"
                        :itemParamsInfoSet="itemParamsInfoSet"
                        :itemParamsRule="itemParamsRule"
                        :itemParamsRuleTable="itemParamsRuleTable"
                        ref="params" />
       <detail-rate
                    :comments="comments"
                    ref="comments" />
       <goods-list
                    ref="recommends"
                    :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />

  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import DetailSwiper from './children/DetailSwiper'
  import DetailNavBar from './children/DetailNavBar'
  import DetailInfo from './children/DetailInfo'
  import DetailShopInfo from './children/DetailShopInfo'
  import DetailDetailInfo from './children/DetailDetailInfo'
  import DetailParameter from './children/DetailParameter'
  import DetailRate from './children/DetailRate'
  import DetailBottomBar from './children/DetailBottomBar'

  import { getDetail, getRecommend } from 'network/detail'

  export default {
  name: 'Detail',
  components: {
    Scroll,
    DetailSwiper,
    DetailNavBar,
    DetailInfo,
    DetailShopInfo,
    DetailDetailInfo,
    DetailParameter,
    DetailRate,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  data() {

    return {

    iid: String,
    themeTopY: [],
    currentIndex: 0,
    isShowBackTop: false,
      //轮播图
      topImages: [],

      //商品基本信息
      columns: [],
      itemInfo: {},
      services: [],

      //店铺信息
      shopInfo: {},
      score: [],

      //详情页信息
      detailInfo: {},
      detailImage: [],

      //参数信息
      itemParamsInfoSet: [],
      itemParamsInfo: {},
      itemParamsRule: {},
      itemParamsRuleTable: [],

      //评价
      comments: {},

      //推荐
      recommends: [],

      skuInfo: {},
      promotions: {},
    }
  },
  mounted() {
    // 数据未渲染不能取到
    // this.themeTopY.push(0)
    // this.themeTopY.push(this.$refs.params.$el.offsetTop)
    // this.themeTopY.push(this.$refs.comments.$el.offsetTop)
    // this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
    // console.log(this.themeTopY);
  },
  destroyed() {
    // 取消detail组件事件总线的监听
    // this.$bus.$off("imgLoad", this.imgListener);
  },
  created() {
    this.iid = this.$route.params.iid
    this.getDetail()
    this.getRecommend()

  },
  updated() {
    // this.themeTopY = []
    // this.themeTopY.push(0)
    // this.themeTopY.push(-this.$refs.params.$el.offsetTop)
    // this.themeTopY.push(-this.$refs.comments.$el.offsetTop)
    // this.themeTopY.push(-this.$refs.recommends.$el.offsetTop)
    // console.log(this.themeTopY);
  },
  methods: {
    //和数据获取有关
    getDetail() {
      getDetail(this.iid).then(res => {
        console.log(res);

        this.topImages = res.result.itemInfo.topImages

        //商品基本信息
        this.columns = res.result.columns
        this.itemInfo = res.result.itemInfo
        this.services = res.result.shopInfo.services

        //店铺信息
        this.shopInfo = res.result.shopInfo
        this.score = res.result.shopInfo.score

        //详情页信息
        this.detailInfo = res.result.detailInfo
        this.detailImage = res.result.detailInfo.detailImage

        //参数信息
        this.itemParamsInfoSet = res.result.itemParams.info.set
        this.itemParamsInfo = res.result.itemParams.info
        this.itemParamsRule = res.result.itemParams.rule
        this.itemParamsRuleTable = res.result.itemParams.rule.tables

        //评价
        this.comments = res.result.rate.list[0]

        this.promotions = res.result.promotions
        this.skuInfo = res.result.skuInfo
        // this.goods = new Goods(res.result.columns, res.result.itemInfo, res.result.shopInfo)

      // 有图片加载问题
      // this.$nextTick(() => {
      // this.themeTopY = []
      // this.themeTopY.push(0)
      // this.themeTopY.push(-this.$refs.params.$el.offsetTop)
      // this.themeTopY.push(-this.$refs.comments.$el.offsetTop)
      // this.themeTopY.push(-this.$refs.recommends.$el.offsetTop)
      // console.log(this.themeTopY);
    // })
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list
      })
    },

    //和事件点击有关
    imgLoad() {
      // this.$refs.scroll.refresh();
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(-this.$refs.params.$el.offsetTop)
      this.themeTopY.push(-this.$refs.comments.$el.offsetTop)
      this.themeTopY.push(-this.$refs.recommends.$el.offsetTop)
      // console.log(this.themeTopY);
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, this.themeTopY[index], 100)
      // this.themeTopY = []
      // this.themeTopY.push(0)
      // this.themeTopY.push(-this.$refs.params.$el.offsetTop)
      // this.themeTopY.push(-this.$refs.comments.$el.offsetTop)
      // this.themeTopY.push(-this.$refs.recommends.$el.offsetTop)
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // console.log(position);
      const positionY = -position.y
      // console.log(-position.y);
      let length = this.themeTopY.length
      for(let i=0; i<length; i++) {
        if(this.currentIndex !== i && ((i < length-1 &&
        positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])
      || (i === length - 1 && positionY >= this.themeTopY[i]))){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
          // console.log(this.currentIndex);
        }
      }
      this.isShowBackTop = (-position.y) > 1000

    },
    addToCart() {
      // console.log('加入购物车');
      //获取要进行展示的信息
      const goods = {}
      goods.image = this.topImages[0]
      goods.title = this.itemInfo.title
      goods.price = this.itemInfo.newPrice
      goods.iid = this.iid

      //将商品加入购物车
      this.$store.commit('addCart', goods)
    }


  }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
  }
  .scroll {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
