<template>
  <div class="home">
    <van-swipe :autoplay="3000" class=".van-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <section class="demo-icon">
      <div class="van-col van-col-8">
        <router-link to="/home/newslist" tag="span">
          <i class="van-icon van-icon-new"> </i>
          <span>new</span>
        </router-link>

      </div>
      <div class="van-col van-col-8">
        <i class="van-icon van-icon-hot">
          <!---->
        </i>
        <span>hot</span>
      </div>
      <div class="van-col van-col-8">
        <i class="van-icon van-icon-new-arrival">
          <!---->
        </i>
        <span>new-arrival</span>
      </div>
      <div class="van-col van-col-8">
        <i class="van-icon van-icon-gift-card">
          <!---->
        </i>
        <span>gift-card</span>
      </div>
      <div class="van-col van-col-8">
        <i class="van-icon van-icon-description">
          <!---->
        </i>
        <span>description</span>
      </div>
      <div class="van-col van-col-8">
        <i class="van-icon van-icon-card">
          <!---->
        </i>
        <span>card</span>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    images: [
      "http://img1.imgtn.bdimg.com/it/u=2674510954,1013156649&fm=27&gp=0.jpg",
      "https://img.yzcdn.cn/2.jpg"
    ]
  }),
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      axios("api/goods").then(result => {
        console.log(result);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  .van-swipe {
    height: 200px;
  }

  .demo-icon {
    font-size: 0;
  }
  .demo-icon .van-col {
    text-align: center;
    height: 100px;
    float: none;
    display: inline-block;
    vertical-align: middle;
  }
  .demo-icon .van-icon {
    display: block;
    font-size: 32px;
    margin: 15px 0;
    color: rgba(69, 90, 100, 0.8);
  }
  .demo-icon span {
    font-size: 14px;
  }
}
</style>