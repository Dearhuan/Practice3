<template>
  <section class="home-box">
    <article class="headline-wrap">
      <h3 v-text="title"></h3>
    </article>
    <aside class="guesslike-wrap common-flow-layout clearfix">
      <section
        v-for="(item, index) in goods"
        :key="index"
        @click="gotoDetail(item)"
        class="sku-item-normal-box flow-item guess-like-item"
      >
        <figure class="item-cover">
          <img :src="item.images" alt="商品图片" />
          <aside class="item-promotion-tag">
            <span></span>
          </aside>
        </figure>
        <article class="item-title">
          <h3 v-text="item.skuTitle"></h3>
        </article>
        <article class="item-bottom-info">
          <aside class="item-price">
            <span class="yuan">¥</span>
            <span v-text="item.originalPrice"></span>
            <span v-if="item.discountPrice>0" class="orignal">
              <span v-if="item.discountPrice>0" class="yuan">¥</span>
              {{item.discountPrice}}
            </span>
          </aside>
          <aside v-if="item.promotionList.length>0" class="item-promotion-tags">
            <span class="tag">{{item.promotionList[0].tag}}</span>
          </aside>
        </article>
      </section>
    </aside>

    <div v-show="no_data" class="infinite-loading-container">
      <div class="infinite-status-prompt" style="display: none;">
        <div>
          <img src="../assets/images/loading.png" alt="loading" class="loading" />
        </div>
      </div>
      <div class="infinite-status-prompt" style="display: none;">
        <div></div>
      </div>
      <div class="infinite-status-prompt" style>
        <div class="no-more">没有更多了</div>
      </div>
      <div
        class="infinite-status-prompt"
        style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px; display: none;"
      >
        Opps, something went wrong :(
        <br />
        <button class="btn-try-infinite">Retry</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "猜你喜欢",
      goods: [],
      current_index: 0,
      list_param: { page: 1, start: 0 },
      no_data: false,
      has_log: 0
    };
  },
  created() {
    /* this.axios({
      method: "post",
      url: "http://localhost/goods",
      data: this.list_param
    }).then(data => {
      this.goods = data.data.goods;
      this.list_param.page += 1;
    }); */
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.has_log = 1;
      let innerHeight = document.querySelector("#app").clientHeight;
      let outerHeight = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop;
      /*  console.log(
        innerHeight,
        outerHeight,
        scrollTop,
        innerHeight - 49,
        outerHeight + scrollTop
      ); */
      if (outerHeight + scrollTop == innerHeight - 49) {
        if (this.no_data === true) {
          this.has_log = 2;
          return false;
        }
        this.axios({
          method: "post",
          url: "http://localhost/goods",
          data: this.list_param
        }).then(data => {
          console.log(data);
          if (data.data.arr.length > 0) {
            this.goods = [...this.goods, ...data.data.arr];
            this.list_param.page = this.list_param.page + 1;
            this.list_param.start = this.list_param.start + 10;
            this.has_log = 0;
          } else {
            this.has_log = 2;
            this.no_data = true;
            console.log("no_data");
          }
        });
      }
    },

    gotoDetail(item) {
      const skuId = item.skuId;
      console.log("gotoDetail", skuId);
      this.$router.push({
        path: "detail",
        query: {
          skuId
        }
      });
    }
  },
  mounted() {
    // this.getGoods();
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>
.home-box + .home-box {
  margin-top: 0.7rem;
}
.home-box {
  position: relative;
  margin-top: 0.8rem;
  margin-bottom: 3.4rem;
}
.home-box .headline-wrap {
  position: relative;
  padding: 0 0 0rem 1rem;
  cursor: pointer;
}
.home-box .headline-wrap h3 {
  font-size: 1rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
}
.common-flow-layout {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.common-flow-layout .flow-item {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 calc(50% - 0.15rem);
  flex: 0 0 calc(50% - 0.15rem);
  margin-bottom: 0.8rem;
}
.guesslike-wrap {
  width: calc(100% - 1.2rem);
  margin: 0 auto;
  /* margin-bottom: 3.2rem; */
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.sku-item-normal-box {
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;
}
.guesslike-wrap .guess-like-item .item-cover {
  height: 11.25rem;
  border-radius: 0.4rem;
  overflow: hidden;
}
.sku-item-normal-box .item-cover {
  position: relative;
  display: block;
  margin: 0 auto;
  border-radius: 0.4rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
}
.sku-item-normal-box .item-cover img {
  mix-blend-mode: multiply;
}
img {
  width: 100%;
}
img {
  border: 0;
}
.sku-item-normal-box .item-title {
  margin: 0.3rem 0 0.1rem;
  padding: 0 0.3rem;
}
.guesslike-wrap .guess-like-item h3 {
  font-size: 0.65rem;
}
.sku-item-normal-box .item-title h3 {
  font-size: 0.6rem;
  font-weight: 600;
  line-height: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-bottom-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 0.3rem;
}
.item-bottom-info .item-price {
  font-family: Arial;
  font-size: 0.7rem;
  font-weight: bolder;
  color: #d44d44;
}
.item-bottom-info .item-price .orignal {
  position: relative;
  margin-left: 5px;
  font-size: 0.5rem;
  color: #ccc;
  font-weight: 400;
}
.guesslike-wrap .guess-like-item .item-price .yuan {
  font-size: 0.55rem;
}

.item-bottom-info .item-price .yuan {
  margin-right: 3px;
  font-size: 0.5rem;
}
.item-promotion-tags {
  font-size: 0.5rem;
  font-weight: bolder;
}
.item-promotion-tags .tag {
  position: relative;
  display: inline-block;
  padding: 0.12rem 0.4rem 0.1rem;
  border-radius: 0.6rem;
  color: #d56159;
  background: #f6ebea;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.infinite-loading-container {
  clear: both;
  text-align: center;
}
.loading {
  margin-top: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  animation: infiniteRound-data-v-2bda5b34 0.8s linear 0s infinite reverse;
}
.no-more {
  line-height: 3.4rem;
  opacity: 0.7;
  color: #666;
}
.btn-try-infinite {
  margin-top: 5px;
  padding: 5px 10px;
  color: #999;
  font-size: 14px;
  line-height: 1;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}
</style>
