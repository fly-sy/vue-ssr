<template>
  <div class="newslist">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <van-cell v-for="item in newsList" :key="item.id">
        <van-card 
          :desc="item.intro" 
          :thumb="item.cover.origin"
          :price="item.grade" 
        >
          <div slot="title" class="title">
            <span>{{item.name}}</span>
            <span>{{item.grade}}<van-icon name="arrow" class="arrow"></van-icon></span>
          </div>
          <div slot="footer">
            <span>
              <i>{{item.cinemaCount}}</i>家影院上映</span>
            <span>
              <i>{{item.watchCount}}</i>人购买</span>
          </div>
        </van-card>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    newsList: [],
    flag: true,
    loading: false,
    finished: false,
    page: 1,
    count: 7
  }),
  beforeCreate() {
    this.flag = true;
  },
  created() {
    this.getNewsList();
  },
  methods: {
    // v4/api/film/now-playing?page=1&count=7
    getNewsList() {
      axios
        .get("api/v4/api/film/now-playing", {
          page: this.page,
          count: this.count
        })
        .then(result => {
          console.log(result.data);
          if (result.data.status === 0) {
            this.newsList = result.data.data.films;
          }
        });
    },
    onLoad(){
      // console.log(1)
      // this.page++ 
      // this.getNewsList()
      console.log(this.page)
    }
  }
};
</script>

<style lang="less">
.newslist {
  .van-card {
    .van-card__desc {
      color: #8e8e8e;
    }
    .title {
      overflow: hidden;
      padding: 10px 0;
      span:first-child {
        float: left;
      }
      span:last-child {
        float: right;
        color: #fc7103;
        .arrow {
          font-size: 8px;
          color: #e3e3e3;
        }
      }
    }
    .van-card__footer {
      font-size: 12px;
      color: #8e8e8e;
      left: 114px;
      span {
         color: #8e8e8e;
        i {
         color: #8aa2bf
        }
      }
      span:first-child {
        margin-right: 20px
      }
    }
  }
}
</style>