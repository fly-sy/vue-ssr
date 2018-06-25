<template >
  <div class="app">
    <!-- start header -->
    <van-nav-bar title="header" fixed>
    </van-nav-bar>
    <!-- end header -->

    <!-- start router-view -->
    <transition enter-active-class="animated fadeInRight" appear>
      <router-view></router-view>
    </transition>
    <!-- end router-view -->

    <!-- start footer -->
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="contact" dot to="/vip">会员</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="search" info="20">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
  <!-- end footer -->
</template>

<script>
export default {
  data: () => ({
    active: 0
  })
};
</script>

<style lang="less" scoped>
.app {
  padding-top: 46px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
</style>
