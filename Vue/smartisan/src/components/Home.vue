<template>
  <div class="homebox">
    <section v-for="(item, index) in goods" :key="index" class="home-box has-floor-banner">
      <aside class="floor-banner-wrap-inner common-flex-box">
        <figure class="floor-banner-cover">
          <img :src="item.header.image" alt="广告位图片" class="floor-banner-poster" />
        </figure>
      </aside>
      <!---->
      <aside class="list-wrap common-flex-box flex-three">
        <section
          v-for="(ele, index) in item.skuInfo"
          :key="index"
          @click="gotoDetail(ele)"
          class="sku-item-normal-box flex-item"
        >
          <figure class="item-cover">
            <img :src="ele.images" alt="商品图片" />
            <!---->
          </figure>
          <article class="item-title two-line">
            <h3 v-text="ele.skuTitle"></h3>
          </article>
          <article class="item-bottom-info">
            <aside class="item-price">
              <span class="yuan">¥</span>
              <span v-text="ele.originalPrice"></span>
            </aside>
            <aside class="item-promotion-tags"></aside>
          </article>
        </section>
        <div class="last-hask-place"></div>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: []
    };
  },
  methods: {
    getGoods() {
      let _self = this;
      this.axios.get("http://localhost/home").then(data => {
        // console.log(data.data.goods);
        let result = data.data.goods;
        // console.log(result[0].data.slice(1));
        _self.goods = result[0].data.slice(1);
      });
    },
    gotoDetail(ele) {
      const skuId = ele.skuId;
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
    this.getGoods();
  }
};
</script>

<style scoped>
.home-box.has-floor-banner {
  padding-top: 0.8rem;
  margin-bottom: 2rem;
}
.home-box {
  position: relative;
  padding-top: 0.7rem;
}
.home-box .floor-banner-wrap-inner {
  position: relative;
  width: calc(100% - 1.2rem);
  height: 5rem;
  margin: 0 auto;
}
.common-flex-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.floor-banner-cover {
  position: relative;
  width: 100%;
  height: inherit;
  overflow: hidden;
}

figure {
  margin: 0;
}
.floor-banner-poster {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 1.9rem;
}

img {
  width: 100%;
}
img {
  border: 0;
}
.home-box.has-floor-banner .list-wrap {
  margin-top: -0.5rem;
}

.home-box .list-wrap {
  clear: both;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  margin-bottom: -0.2rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.common-flex-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.common-flex-box.flex-three .flex-item {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 26.5%;
  flex: 0 0 26.5%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.common-flex-box .flex-item:first-child {
  margin-left: 0.6rem;
}
.common-flex-box .flex-item {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 0.3rem;
}
.sku-item-normal-box {
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;
}
.home-box .flex-three .flex-item .item-cover {
  height: 6.2rem;
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
.sku-item-normal-box .item-title.two-line {
  height: 2rem;
}
.sku-item-normal-box .item-title {
  margin: 0.8rem 0 0.1rem;
  padding: 0 0.3rem;
}
.sku-item-normal-box .item-title.two-line h3 {
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
.home-box .flex-four .flex-item[data-v-fab33ed0] .item-price,
.home-box .flex-three .flex-item .item-price {
  font-size: 0.6rem;
}

.item-bottom-info .item-price {
  font-family: Arial;
  font-size: 0.7rem;
  font-weight: bolder;
  color: #d44d44;
}
.item-bottom-info .item-price .yuan {
  margin-right: 3px;
  font-size: 0.5rem;
}
.item-promotion-tags {
  font-size: 0.5rem;
  font-weight: bolder;
}
</style>