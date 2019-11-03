<template>
  <div>
    <header data-v-c7dd8b8c class="mint-header">
     <!--  <div class="mint-header-button is-left">
        <a data-v-c7dd8b8c href="/" class="router-link-active">
          <button data-v-c7dd8b8c class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-back"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </a>
      </div> -->
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <h1 class="mint-header-title">购物车</h1>
      <div class="mint-header-button is-right">
        <button data-v-c7dd8b8c class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon"></span>
          <label @click="edit" class="mint-button-text">{{editText}}</label>
        </button>
      </div>
    </header>

    <section _ngcontent-c0 class="main-wrapper is-header-shown is-bottom-shown">
      <router-outlet _ngcontent-c0></router-outlet>
      <shopping-cart-mobile _nghost-c8 class>
        <div _ngcontent-c8 class="page-cart no-goods">
          <div _ngcontent-c8 class="hide-warranty">
            <div _ngcontent-c8 v-if="cartCount>0">
              <receive-coupon v-if="!isEdit" _ngcontent-c8 _nghost-c9>
                <div _ngcontent-c9 class="receive-coupon">
                  <i _ngcontent-c9></i>
                  <label _ngcontent-c9>点击领取优惠券</label>
                  <i _ngcontent-c9></i>
                </div>
              </receive-coupon>
              <div _ngcontent-c8 class="item-list have-margin">
                <div v-if="!isEdit" _ngcontent-c8 class="group">
                  <div _ngcontent-c8 class="item receive-coupon"></div>
                </div>

                <div
                  _ngcontent-c8
                  v-for="(item, index) in cart"
                  :key="index"
                  class="group group-sub"
                >
                  <div _ngcontent-c8 class="item">
                    <new-cart-item _ngcontent-c8 _nghost-c10>
                      <div _ngcontent-c10 class="cart-item">
                        <div _ngcontent-c10 class="checkbox-container">
                          <ui-checkbox _ngcontent-c10 _nghost-c12>
                            <span
                              @click="checkedOne(index)"
                              _ngcontent-c12
                              :class="['m-blue-checkbox-new',{'m-blue-checkbox-new checkbox-on':item.isChecked}]"
                            ></span>
                          </ui-checkbox>
                        </div>
                        <div _ngcontent-c10 class="item-wrapper">
                          <div _ngcontent-c10 class="item-thumb">
                            <a _ngcontent-c10 target="_self" :href="'/detail?skuId='+item.skuid">
                              <img _ngcontent-c10 alt height="90" width="90" :src="item.image" />
                            </a>
                          </div>
                          <div _ngcontent-c10 class="item-info-container">
                            <div _ngcontent-c10 class="colorful-tag-container">
                              <colorful-tag _ngcontent-c10 _nghost-c16>
                                <span _ngcontent-c16 class="colorful-tag red">限时优惠</span>
                              </colorful-tag>
                            </div>
                            <div _ngcontent-c10 class="item-info">
                              <a _ngcontent-c10 class="title">
                                <h4 _ngcontent-c10>{{item.skuTitle}}</h4>
                              </a>
                              <p _ngcontent-c10 class="item-attrs">
                                <span _ngcontent-c10>
                                  <span _ngcontent-c10>#58bc58</span>
                                </span>
                              </p>
                              <div _ngcontent-c10 class="item-price-container">
                                <div _ngcontent-c10 class="quantity-container">
                                  <cart-quantity _ngcontent-c10 _nghost-c17>
                                    <div _ngcontent-c17 class="quantity">
                                      <span _ngcontent-c17 class="button down disabled">-</span>
                                      <span _ngcontent-c17 class="num">{{item.num}}</span>
                                      <span _ngcontent-c17 class="button up">+</span>
                                    </div>
                                  </cart-quantity>
                                </div>
                                <div _ngcontent-c10 class="discount-price">
                                  <p _ngcontent-c10 class="price">
                                    <span _ngcontent-c10>
                                      <i>¥</i>
                                      <span>{{item.price - 10}}</span>
                                    </span>
                                    <span _ngcontent-c10 class="sum smartisan-icon">{{item.num}}</span>
                                  </p>
                                  <p _ngcontent-c10 class="original-price">
                                    <i>¥</i>
                                    <span>{{item.price}}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </new-cart-item>
                    <div _ngcontent-c8 class="markup-goods"></div>
                    <div _ngcontent-c8 class="markup-container"></div>
                  </div>

                  <div _ngcontent-c8 class="gifts"></div>

                  <div _ngcontent-c8 class="gifts"></div>
                </div>
              </div>

              <div _ngcontent-c8 class="recommend">
                <div _ngcontent-c8 class="title">
                  <h2 _ngcontent-c8>相关推荐</h2>
                </div>
                <div _ngcontent-c8 class="recommend-container">
                  <div _ngcontent-c8 class="recommend-container-item">
                    <sku-item-normal _ngcontent-c8 _nghost-c11>
                      <div _ngcontent-c11 class="product-box-item">
                        <a _ngcontent-c11 class="item-img box-border">
                          <img
                            _ngcontent-c11
                            alt
                            src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                            style="opacity: 1;"
                          />

                          <colorful-tag _ngcontent-c11 _nghost-c16>
                            <span _ngcontent-c16 class="colorful-tag yellow">直降</span>
                          </colorful-tag>
                          <div _ngcontent-c11 class="mask"></div>
                        </a>
                        <div _ngcontent-c11 class="item-content">
                          <h4 _ngcontent-c11>坚果 QuickCharge 4+ 快速充电器</h4>
                          <p _ngcontent-c11>全面兼容的 18W 快速充电</p>
                          <goods-price _ngcontent-c11 _nghost-c18>
                            <p _ngcontent-c18 class="price">
                              <i _ngcontent-c18>¥</i>
                              <span _ngcontent-c18>58.00</span>

                              <span _ngcontent-c18 class="origin-price">
                                <i _ngcontent-c18>¥</i>
                                <span _ngcontent-c18>59.00</span>
                              </span>
                            </p>
                          </goods-price>
                        </div>
                      </div>
                    </sku-item-normal>
                  </div>
                  <div _ngcontent-c8 class="recommend-container-item">
                    <sku-item-normal _ngcontent-c8 _nghost-c11>
                      <div _ngcontent-c11 class="product-box-item">
                        <a _ngcontent-c11 class="item-img box-border">
                          <img
                            _ngcontent-c11
                            alt
                            src="https://resource.smartisan.com/resource/ce632bd67465027861707ec221b37c2d.jpg?x-oss-process=image/resize,w_342/format,webp"
                            style="opacity: 1;"
                          />

                          <colorful-tag _ngcontent-c11 _nghost-c16>
                            <span _ngcontent-c16 class="colorful-tag yellow">直降</span>
                          </colorful-tag>
                          <div _ngcontent-c11 class="mask"></div>
                        </a>
                        <div _ngcontent-c11 class="item-content">
                          <h4 _ngcontent-c11>Smartisan 半入耳式耳机</h4>
                          <p _ngcontent-c11>经典配色、专业调音、高品质麦克风</p>
                          <goods-price _ngcontent-c11 _nghost-c18>
                            <p _ngcontent-c18 class="price">
                              <i _ngcontent-c18>¥</i>
                              <span _ngcontent-c18>39.00</span>

                              <span _ngcontent-c18 class="origin-price">
                                <i _ngcontent-c18>¥</i>
                                <span _ngcontent-c18>59.00</span>
                              </span>
                            </p>
                          </goods-price>
                        </div>
                      </div>
                    </sku-item-normal>
                  </div>
                  <div _ngcontent-c8 class="recommend-container-item">
                    <sku-item-normal _ngcontent-c8 _nghost-c11>
                      <div _ngcontent-c11 class="product-box-item">
                        <a _ngcontent-c11 class="item-img box-border">
                          <img
                            _ngcontent-c11
                            alt
                            src="https://resource.smartisan.com/resource/f55641e23f35f6dd82226b6c4a043f00.jpg?x-oss-process=image/resize,w_342/format,webp"
                            style="opacity: 1;"
                          />

                          <colorful-tag _ngcontent-c11 _nghost-c16>
                            <span _ngcontent-c16 class="colorful-tag yellow">直降</span>
                          </colorful-tag>
                          <div _ngcontent-c11 class="mask"></div>
                        </a>
                        <div _ngcontent-c11 class="item-content">
                          <h4 _ngcontent-c11>坚果三脚架自拍杆</h4>
                          <p _ngcontent-c11>两种模式，随时随地都能拍得开心</p>
                          <goods-price _ngcontent-c11 _nghost-c18>
                            <p _ngcontent-c18 class="price">
                              <i _ngcontent-c18>¥</i>
                              <span _ngcontent-c18>89.00</span>

                              <span _ngcontent-c18 class="origin-price">
                                <i _ngcontent-c18>¥</i>
                                <span _ngcontent-c18>99.00</span>
                              </span>
                            </p>
                          </goods-price>
                        </div>
                      </div>
                    </sku-item-normal>
                  </div>
                  <div _ngcontent-c8 class="recommend-container-item">
                    <sku-item-normal _ngcontent-c8 _nghost-c11>
                      <div _ngcontent-c11 class="product-box-item">
                        <a _ngcontent-c11 class="item-img box-border">
                          <img
                            _ngcontent-c11
                            alt
                            src="https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_342/format,webp"
                            style="opacity: 1;"
                          />

                          <colorful-tag _ngcontent-c11 _nghost-c16>
                            <span _ngcontent-c16 class="colorful-tag yellow">直降</span>
                          </colorful-tag>
                          <div _ngcontent-c11 class="mask"></div>
                        </a>
                        <div _ngcontent-c11 class="item-content">
                          <h4 _ngcontent-c11>坚果彩虹数据线</h4>
                          <p _ngcontent-c11>七彩配色随机发货，为生活增添一份小小惊喜</p>
                          <goods-price _ngcontent-c11 _nghost-c18>
                            <p _ngcontent-c18 class="price">
                              <i _ngcontent-c18>¥</i>
                              <span _ngcontent-c18>16.00</span>

                              <span _ngcontent-c18 class="origin-price">
                                <i _ngcontent-c18>¥</i>
                                <span _ngcontent-c18>19.00</span>
                              </span>
                            </p>
                          </goods-price>
                        </div>
                      </div>
                    </sku-item-normal>
                  </div>
                  <div _ngcontent-c8 class="recommend-container-item">
                    <sku-item-normal _ngcontent-c8 _nghost-c11>
                      <div _ngcontent-c11 class="product-box-item">
                        <a _ngcontent-c11 class="item-img box-border">
                          <img
                            _ngcontent-c11
                            alt
                            src="https://resource.smartisan.com/resource/f5a36dfc37d52a643683f4a21247f3ff.jpg?x-oss-process=image/resize,w_342/format,webp"
                            style="opacity: 1;"
                          />

                          <div _ngcontent-c11 class="mask"></div>
                        </a>
                        <div _ngcontent-c11 class="item-content">
                          <h4 _ngcontent-c11>坚果“电池形电池”移动电源</h4>
                          <p _ngcontent-c11>别具一格的“全能型”移动电源</p>
                          <goods-price _ngcontent-c11 _nghost-c18>
                            <p _ngcontent-c18 class="price">
                              <i _ngcontent-c18>¥</i>
                              <span _ngcontent-c18>69.00</span>
                            </p>
                          </goods-price>
                        </div>
                      </div>
                    </sku-item-normal>
                  </div>
                  <div _ngcontent-c8 class="recommend-container-item">
                    <sku-item-normal _ngcontent-c8 _nghost-c11>
                      <div _ngcontent-c11 class="product-box-item">
                        <a _ngcontent-c11 class="item-img box-border">
                          <img
                            _ngcontent-c11
                            alt
                            src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_342/format,webp"
                            style="opacity: 1;"
                          />

                          <colorful-tag _ngcontent-c11 _nghost-c16>
                            <span _ngcontent-c16 class="colorful-tag yellow">直降</span>
                          </colorful-tag>
                          <div _ngcontent-c11 class="mask"></div>
                        </a>
                        <div _ngcontent-c11 class="item-content">
                          <h4 _ngcontent-c11>Smartisan 原装快充充电器 18W</h4>
                          <p _ngcontent-c11>18W 安全快充</p>
                          <goods-price _ngcontent-c11 _nghost-c18>
                            <p _ngcontent-c18 class="price">
                              <i _ngcontent-c18>¥</i>
                              <span _ngcontent-c18>39.00</span>

                              <span _ngcontent-c18 class="origin-price">
                                <i _ngcontent-c18>¥</i>
                                <span _ngcontent-c18>49.00</span>
                              </span>
                            </p>
                          </goods-price>
                        </div>
                      </div>
                    </sku-item-normal>
                  </div>
                </div>
              </div>
              <div _ngcontent-c8 class="bottom-bar">
                <div _ngcontent-c8 class="select-info">
                  <div _ngcontent-c8 class="checkbox-container">
                    <ui-checkbox _ngcontent-c8 _nghost-c12>
                      <span _ngcontent-c12 class="checkbox-on m-blue-checkbox-new"></span>
                    </ui-checkbox>
                  </div>
                  <span _ngcontent-c8>
                    已选
                    <i _ngcontent-c8 :class="isEdit?'color-red':''">{{cartCount}}</i> 件
                  </span>
                </div>
                <div _ngcontent-c8 class="sum-info">
                  <div v-if="!isEdit" _ngcontent-c8 class="desc">
                    <p _ngcontent-c8 class="total-price">
                      合计：
                      <span _ngcontent-c8>
                        <i>¥</i>
                        <span>{{cartMoney+".00"}}</span>
                      </span>
                    </p>
                    <div _ngcontent-c8 class="delivery">
                      <article _ngcontent-c8>应付总额不含运费</article>
                    </div>
                  </div>

                  <div
                    _ngcontent-c8
                    @click="gotoCheckout"
                    :class="['blue-btn',{'blue-btn edit-red':isEdit}]"
                  >{{btnText}}</div>
                </div>
              </div>
            </div>
            <div _ngcontent-c8 v-if="cartCount==0" class="empty-container">
              <div _ngcontent-c8>
                <div _ngcontent-c8 class="img-container"></div>
                <h3 _ngcontent-c8>购物车暂无商品</h3>
                <p _ngcontent-c8>添加到购物车的商品将会显示在这里</p>

                <a _ngcontent-c8 class="buy-btn login" v-if="!isLogin" @click="gotoLogin">登录</a>
                <a _ngcontent-c8 class="buy-btn box-border" @click="gotoIndex">现在选购</a>
              </div>
            </div>
          </div>

          <dialog-prompt _ngcontent-c8 _nghost-c5 class="ng-tns-c5-4">
            <modal-container _ngcontent-c5 class="ng-tns-c5-4 ng-tns-c7-6" _nghost-c7>
              <div
                _ngcontent-c7
                class="modal-wrap ng-trigger ng-trigger-animationState"
                style="opacity: 0; display: none;"
              >
                <div
                  _ngcontent-c7
                  class="shadow ng-trigger ng-trigger-animationState"
                  style="opacity: 0; display: none;"
                ></div>
                <div
                  _ngcontent-c7
                  class="container ng-trigger ng-trigger-animationStateNone"
                  style="opacity: 0; display: none;"
                >
                  <div _ngcontent-c5 class="dialog ng-tns-c5-4">
                    <div _ngcontent-c5 class="title">提示</div>
                    <div _ngcontent-c5 class="content">
                      <p _ngcontent-c8 class="dialog-confirm-text">确认要删除这 0 件商品吗？</p>
                    </div>
                    <div _ngcontent-c5 class="button-wrapper">
                      <button
                        _ngcontent-c5
                        class="button-cancel ng-trigger ng-trigger-buttonClick ng-tns-c5-4"
                        style="display: inline;"
                      >取消</button>
                      <button
                        _ngcontent-c5
                        class="button-confirm ng-trigger ng-trigger-buttonClick"
                      >确认</button>
                    </div>
                  </div>
                </div>
              </div>
            </modal-container>
          </dialog-prompt>
          <item-board _ngcontent-c8 _nghost-c13 class="ng-tns-c13-5">
            <div _ngcontent-c13 class="ng-tns-c13-5">
              <div
                _ngcontent-c13
                class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
                style="background-color: rgba(0, 0, 0, 0.8); display: none;"
              ></div>
              <div
                _ngcontent-c13
                class="item-board ng-trigger ng-trigger-itemBoardAnimate"
                style="display: none;"
              ></div>
            </div>
          </item-board>
        </div>
        <item-board _ngcontent-c8 class="item-coupon ng-tns-c13-3" _nghost-c13>
          <div _ngcontent-c13 class="ng-tns-c13-3">
            <div
              _ngcontent-c13
              class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
              style="background-color: rgba(0, 0, 0, 0.8); display: none;"
            ></div>
            <div
              _ngcontent-c13
              class="item-board ng-trigger ng-trigger-itemBoardAnimate"
              style="display: none;"
            >
              <div _ngcontent-c8 class="item-board-content">
                <cart-coupon _ngcontent-c8 _nghost-c15>
                  <div _ngcontent-c15 class="coupon-dialog">
                    <div _ngcontent-c15 class="fix-header-tabbox box-line">
                      <div _ngcontent-c15 class="header-tabbox box-line">
                        <div _ngcontent-c15 class="button button-hide">说明</div>
                        <ul _ngcontent-c15 class="box-border">
                          <li _ngcontent-c15 class="box-line line-vertical active">
                            <span _ngcontent-c15>可领券（0）</span>
                            <a _ngcontent-c15 class="active-area"></a>
                          </li>
                          <li _ngcontent-c15 class="box-line line-vertical">
                            <span _ngcontent-c15>已领券（0）</span>
                            <a _ngcontent-c15 class="active-area"></a>
                          </li>
                        </ul>
                        <div _ngcontent-c15 class="button">取消</div>
                      </div>
                    </div>
                    <div _ngcontent-c15 class="coupon-list">
                      <div _ngcontent-c15 class="noCoupon">
                        <img
                          _ngcontent-c15
                          src="data:image/png;base64,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"
                        />
                        <label _ngcontent-c15>暂无可领优惠券</label>
                      </div>
                    </div>
                  </div>
                </cart-coupon>
              </div>
            </div>
          </div>
        </item-board>
      </shopping-cart-mobile>
    </section>

    <Tabbar :offset="2"></Tabbar>
  </div>
</template>

<script>
import Header2 from "../components/Header2.vue";
import Tabbar from "../components/tabbar.vue";
export default {
  inject: ['reload'],  //注入reload方法
  data() {
    return {
      isLogin: false,
      cartCount: 0,
      cartMoney: 0,
      editText: "编辑",
      btnText: "现在结算",
      isEdit: false,
      opacity: 0,
      cart: []
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push("/login");
      console.log("gotoLogin");
    },
    gotoIndex() {
      this.$router.push("/");
      console.log("gotoIndex");
    },
    edit() {
      this.isEdit = !this.isEdit;
      if (this.editText == "编辑") {
        this.editText = "完成";
        this.btnText = "删除所选";
      } else {
        this.editText = "编辑";
        this.btnText = "现在结算";
      }
      console.log("edit");
    },
    checkedOne(index) {
      console.log(index, JSON.parse(this.getToken("cart"))[index]);
    },
    gotoCheckout() {
      if (this.isEdit) {
        this.setToken('cart','');
        this.opacity = 1;
        // this.$router.push('/cart');   // 不刷新
        this.reload();       //调用reload方法刷新当前页面
      } else {
        this.$router.push("/checkout");
        console.log("gotoCheckout");
      }
    }
  },
  created: function() {
    // let cart = JSON.parse(localStorage.getItem("cart"));
    this.cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (this.cart) {
      this.cart.forEach(ele => {
        //更新购物车商品数量、价格
        this.cartCount += ele.num;
        this.cartMoney += ele.num * ele.price;
      });
      //从localstorage获取购物车商品数据
      /* this.cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []; */
      console.log(this.cart, this.cartCount, this.cartMoney);
    } else {
      this.cartCount = 0;
      this.cartMoney = 0;
    }
    let isLogin = this.$store.getters.isLogin;
    if (isLogin) {
      this.isLogin = true;
      console.log("this is cart");
    }
  },
  components: {
    Header2,
    Tabbar
  }
};
</script>

<style scoped>
header {
  height: 3.2rem;
  padding: 0 10px;
  font-size: 18px;
  line-height: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
}
.mint-header-title{
  margin-left: 5rem;
}
.mintui-back::before {
    content: "\E600";
    color: white;
}
h4 {
  margin: 0;
  padding: 0;
}
.mint-button-text {
  font-size: 0.9rem;
}
.main-wrapper.is-header-shown[_ngcontent-c0] {
  margin-top: 50px;
}

.main-wrapper.is-bottom-shown[_ngcontent-c0] {
  padding-bottom: 54px;
}

.main-wrapper[_ngcontent-c0] {
  overflow: scroll;
}
.page-cart.no-goods[_ngcontent-c8] {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-size: 100%; */
  background: #ededed;
}

.page-cart[_ngcontent-c8] {
  /* overflow: hidden; */
}
.empty-container[_ngcontent-c8] {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.empty-container[_ngcontent-c8] .img-container[_ngcontent-c8] {
  width: 88px;
  height: 114px;
  background: url("../assets/images/icart.png") no-repeat top;
  background-size: 88px auto;
  margin: 0 auto;
}
.empty-container[_ngcontent-c8] h3[_ngcontent-c8] {
  color: rgba(0, 0, 0, 0.15);
  margin: 25px 0 9px;
  font-size: 1rem;
}
.empty-container[_ngcontent-c8] p[_ngcontent-c8] {
  font-size: 0.65rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.15);
}
.empty-container[_ngcontent-c8] .buy-btn.login[_ngcontent-c8] {
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.2);
  background: #5e8bdd;
  background: linear-gradient(#6f94e8, #5178df);
  border-radius: 6px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
  color: #fff;
}

.empty-container[_ngcontent-c8] .buy-btn[_ngcontent-c8] {
  display: inline-block;
  width: 142px;
  height: 40px;
  z-index: 9999;
  line-height: 40px;
  font-size: 0.6rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  margin: 16px 1px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.01), hsla(0, 0%, 100%, 0.01));
  box-shadow: inset 0 2px 4px hsla(0, 0%, 100%, 0.3);
}

a[_ngcontent-c8] {
  color: #5079d9;
  text-decoration: none;
}
.empty-container[_ngcontent-c8] .buy-btn[_ngcontent-c8] {
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.box-border:before {
  /* content: ""; */
  position: absolute;
  top: 0;
  bottom: -42.85714%;
  left: 0;
  right: -42.85714%;
  /* border: 1px solid #f0f0f0; */
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.is-header-shown[_nghost-c9] .receive-coupon[_ngcontent-c9],
.is-header-shown [_nghost-c9] .receive-coupon[_ngcontent-c9] {
  top: 50px;
}
.receive-coupon[_ngcontent-c9] {
  z-index: 99;
  position: fixed;
  background: #ffe7e5;
  color: #d04f48;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.7rem;
  padding-right: 0.3rem;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 5px 13px rgba(0, 0, 0, 0.12),
    0 5px 13px rgba(0, 0, 0, 0.12);
}
.receive-coupon[_ngcontent-c9] i[_ngcontent-c9]:first-of-type {
  display: block;
  position: relative;
  width: 1.35rem;
  height: 1.35rem;
  background: url("../assets/images/youhuiquan.png");
  background-size: cover;
}
.receive-coupon[_ngcontent-c9] label[_ngcontent-c9] {
  position: absolute;
  left: 2.65rem;
  font-size: 0.75rem;
  font-weight: 700;
  height: 3rem;
  line-height: 3rem;
}
.receive-coupon[_ngcontent-c9] i[_ngcontent-c9]:nth-of-type(2) {
  display: block;
  position: relative;
  width: 1rem;
  height: 1rem;
  background: url("../assets/images/arrow2.png");
  background-size: cover;
}
.receive-coupon[_ngcontent-c9]:after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.05);
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.item-list.have-margin[_ngcontent-c8] {
  margin-bottom: 0;
}
.item-list[_ngcontent-c8] {
  margin-bottom: 67px;
  background: #f5f5f5;
  padding-bottom: 1px;
}
.item-list[_ngcontent-c8] .group[_ngcontent-c8] {
  margin-bottom: 6px;
  position: relative;
  background: #fff;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.1);
}
.item-list[_ngcontent-c8] .group[_ngcontent-c8]::before {
  top: 0;
  -webkit-transform-origin: top;
  transform-origin: top;
}
.item-list[_ngcontent-c8] .group[_ngcontent-c8]::after,
.item-list[_ngcontent-c8] .group[_ngcontent-c8]::before {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
}
.item-list[_ngcontent-c8] .group[_ngcontent-c8] .item[_ngcontent-c8] {
  position: relative;
}
.item-list[_ngcontent-c8] .group[_ngcontent-c8] .receive-coupon[_ngcontent-c8] {
  height: 4rem;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.05);
}
.cart-item[_ngcontent-c10] {
  display: flex;
  height: 114px;
  align-items: center;
}
.cart-item[_ngcontent-c10] .checkbox-container[_ngcontent-c10] {
  width: 44px;
  flex: 0 0 44px;
  text-align: center;
  line-height: 0;
}
.m-blue-checkbox-new.checkbox-on[_ngcontent-c12] {
  background-position: 0 0;
}
.m-blue-checkbox-new[_ngcontent-c12] {
  position: relative;
  display: inline-block;
  width: 23px;
  height: 23px;
  background: url("../assets/images/checkbox.png") no-repeat;
  background-size: 100% auto;
  background-position: 0 -80px;
}
.cart-item[_ngcontent-c10] .item-wrapper[_ngcontent-c10] {
  display: flex;
  flex: 1;
  padding: 0 5px 0 0;
  overflow: hidden;
  align-items: center;
}
.cart-item[_ngcontent-c10] .item-thumb[_ngcontent-c10] {
  width: 90px;
  height: 90px;
  flex: 0 0 90px;
  position: relative;
}
.item-info-container[_ngcontent-c10] {
  flex: 1;
  margin-left: 13px;
  padding: 0 5px 0 0;
  position: relative;
}
.item-info-container[_ngcontent-c10] .colorful-tag-container[_ngcontent-c10] {
  max-height: 18px;
}
.item-info-container[_ngcontent-c10]
  .colorful-tag-container[_ngcontent-c10]
  > colorful-tag[_ngcontent-c10] {
  display: block;
}
.colorful-tag[_ngcontent-c16],
[_nghost-c16] {
  font-size: 0.4rem;
}
.colorful-tag.red[_ngcontent-c16] {
  color: #cc3e39;
  background: #ffe7e5;
  border-color: #f0948d;
}
.colorful-tag[_ngcontent-c16] {
  position: relative;
  display: inline-block;
  padding: 0.2rem 0.53333rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 1.2rem;
  z-index: 89;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.item-info-container[_ngcontent-c10] > .item-info[_ngcontent-c10] {
  margin: 4px 0;
}
.item-info-container[_ngcontent-c10] .title[_ngcontent-c10] {
  font-size: 0.6rem;
  color: #000;
}
.item-info-container[_ngcontent-c10] .item-attrs[_ngcontent-c10] {
  font-size: 0.5rem;
  color: #7f7f7f;
  overflow: hidden;
  margin: 7px 0;
}
.item-info-container[_ngcontent-c10]
  .item-attrs[_ngcontent-c10]
  span[_ngcontent-c10]:first-child {
  padding-left: 0;
}
.item-info-container[_ngcontent-c10]
  .item-attrs[_ngcontent-c10]
  span[_ngcontent-c10] {
  padding: 0 5px;
}
.item-info-container[_ngcontent-c10]
  .item-attrs[_ngcontent-c10]
  span[_ngcontent-c10]
  span[_ngcontent-c10] {
  padding: 0;
  position: relative;
}
.item-info-container[_ngcontent-c10]
  .item-attrs[_ngcontent-c10]
  span[_ngcontent-c10]
  span[_ngcontent-c10]::before {
  content: "";
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #999;
  position: absolute;
  left: -8px;
  top: 4px;
}
.item-info-container[_ngcontent-c10] .item-price-container[_ngcontent-c10] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-info-container[_ngcontent-c10]
  .item-price-container[_ngcontent-c10]
  .quantity-container[_ngcontent-c10] {
  position: relative;
  left: -6px;
}
.quantity[_ngcontent-c17] {
  display: flex;
  height: 30px;
}
.quantity[_ngcontent-c17] .button[_ngcontent-c17] {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-indent: -9999em;
  position: relative;
  flex: 0 0 40px;
  margin: -2px 0;
}
.quantity[_ngcontent-c17] .button.down[_ngcontent-c17]::before {
  background: url("../assets/images/sub.png") no-repeat;
  background-size: 100% auto;
}
.quantity[_ngcontent-c17] .button[_ngcontent-c17]::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  left: 0;
  top: -7px;
  background: url("../assets/images/add.png") no-repeat;
  background-size: 100% auto;
  opacity: 1;
}
.quantity[_ngcontent-c17] .num[_ngcontent-c17] {
  height: 25px;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  flex: 0 0 22px;
}
.quantity[_ngcontent-c17] .button.down.disabled[_ngcontent-c17]::before,
.quantity[_ngcontent-c17] .button.up.disabled[_ngcontent-c17]::before {
  opacity: 0.3;
}
.item-info-container[_ngcontent-c10] .discount-price[_ngcontent-c10] {
  display: flex;
  align-items: center;
}
.item-info-container[_ngcontent-c10] .price[_ngcontent-c10] {
  color: #d44d44;
  font-size: 0.6rem;
  font-weight: 700;
  position: relative;
  top: -4px;
}
.item-info-container[_ngcontent-c10] .price[_ngcontent-c10] i {
  font-style: normal;
  font-size: 0.5rem;
  display: inline-block;
}
.item-info-container[_ngcontent-c10] .price[_ngcontent-c10] .sum {
  color: #999;
  position: relative;
  padding-left: 14px;
  display: inline-block;
}
.cart-item[_ngcontent-c10] .smartisan-icon.sum[_ngcontent-c10] {
  margin-left: 6px;
}
.cart-item[_ngcontent-c10] .smartisan-icon[_ngcontent-c10] {
  font-family: SmartisanIconFont;
}
.cart-item[_ngcontent-c10] .smartisan-icon.sum[_ngcontent-c10]::before {
  content: "X";
  position: absolute;
  left: 0;
  bottom: -1px;
}
.item-info-container[_ngcontent-c10]
  .discount-price[_ngcontent-c10]
  .original-price {
  font-size: 0.6rem;
  color: #7f7f7f;
  position: relative;
  margin-left: 20px;
  top: -4px;
}
.item-info-container[_ngcontent-c10]
  .discount-price[_ngcontent-c10]
  .original-price:before {
  content: "";
  height: 1px;
  background: #999;
  left: -3px;
  right: -3px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.item-info-container[_ngcontent-c10]
  .discount-price[_ngcontent-c10]
  .original-price
  i {
  font-style: normal;
  font-size: 0.5rem;
}
.recommend[_ngcontent-c8] {
  position: relative;
  margin-bottom: 67px;
  background: #fff;
}
.recommend[_ngcontent-c8]::before {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: top;
  transform-origin: top;
}
.recommend[_ngcontent-c8] .title[_ngcontent-c8] {
  position: relative;
  padding: 0 0.6rem;
}
.recommend[_ngcontent-c8] .title[_ngcontent-c8]::before {
  top: 0;
  -webkit-transform-origin: top;
  transform-origin: top;
}
.recommend[_ngcontent-c8] .title[_ngcontent-c8]::after,
.recommend[_ngcontent-c8] .title[_ngcontent-c8]::before {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.05);
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
}
.recommend[_ngcontent-c8] .title[_ngcontent-c8] h2[_ngcontent-c8] {
  height: 2rem;
  line-height: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.recommend[_ngcontent-c8] .title[_ngcontent-c8]::after {
  bottom: 0;
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}
.recommend[_ngcontent-c8] .recommend-container[_ngcontent-c8] {
  overflow: hidden;
  padding: 0.9rem 0.6rem 0;
}
.recommend[_ngcontent-c8]
  .recommend-container[_ngcontent-c8]
  .recommend-container-item[_ngcontent-c8] {
  width: calc(50% - 0.2rem);
  float: left;
}
.product-box-item[_ngcontent-c11] .item-img[_ngcontent-c11] {
  display: block;
  position: relative;
  padding-top: 100%;
  border-radius: 0.2rem;
}
.product-box-item[_ngcontent-c11] .item-img.box-border[_ngcontent-c11]::before {
  border-radius: 0.28571rem;
  z-index: 2;
  top: -21.42857%;
  left: -21.42857%;
  bottom: -21.42857%;
  right: -21.42857%;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  border-color: #f0f0f0;
}

.box-border::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: -42.85714%;
  left: 0;
  right: -42.85714%;
  border: 1px solid #f0f0f0;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.product-box-item[_ngcontent-c11]
  .item-img[_ngcontent-c11]
  img[_ngcontent-c11] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.product-box-item[_ngcontent-c11] colorful-tag[_ngcontent-c11] {
  position: absolute;
  left: 0.4rem;
  top: 0.4rem;
}

.colorful-tag[_ngcontent-c16],
[_nghost-c16] {
  font-size: 0.4rem;
}
.colorful-tag.yellow[_ngcontent-c16] {
  color: #e6b217;
  background: #fffbe5;
  border-color: #ffe57a;
}
.colorful-tag[_ngcontent-c16] {
  position: relative;
  display: inline-block;
  padding: 0.2rem 0.53333rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 1.2rem;
  z-index: 89;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.product-box-item[_ngcontent-c11]
  .item-img[_ngcontent-c11]
  .mask[_ngcontent-c11] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.06);
  display: block;
  z-index: 10;
  opacity: 0;
}
.product-box-item[_ngcontent-c11] .item-content[_ngcontent-c11] {
  margin: 0 auto;
  padding: 0.4rem 0.6rem 0.9rem;
}
.product-box-item[_ngcontent-c11]
  .item-content[_ngcontent-c11]
  h4[_ngcontent-c11] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  font-size: 0.6rem;
  color: #333;
}
.min-font-12px[_nghost-c11] .item-content[_ngcontent-c11] p[_ngcontent-c11],
.min-font-12px [_nghost-c11] .item-content[_ngcontent-c11] p[_ngcontent-c11] {
  width: 120%;
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
}
.product-box-item[_ngcontent-c11]
  .item-content[_ngcontent-c11]
  p[_ngcontent-c11] {
  margin-top: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.5rem;
  line-height: 1.2;
  color: #7f7f7f;
  min-height: 0.6rem;
}
.product-box-item[_ngcontent-c11]
  .item-content[_ngcontent-c11]
  goods-price[_ngcontent-c11] {
  position: relative;
  top: -0.15rem;
}
[_nghost-c18] {
  font-size: 0.6rem;
  line-height: 1;
}
.price[_ngcontent-c18] {
  color: #d44d44;
  display: inline-block;
  white-space: nowrap;
  font-weight: 700;
}
.min-font-12px[_nghost-c18] .price[_ngcontent-c18] i[_ngcontent-c18],
.min-font-12px [_nghost-c18] .price[_ngcontent-c18] i[_ngcontent-c18] {
  display: inline-block;
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: bottom right;
  transform-origin: bottom right;
}
.price[_ngcontent-c18] i[_ngcontent-c18] {
  font-style: normal;
  font-size: 0.5rem;
}
.price[_ngcontent-c18] > span[_ngcontent-c18] {
  font-size: 0.6rem;
}
.min-font-12px[_nghost-c18]
  .price[_ngcontent-c18]
  .origin-price[_ngcontent-c18],
.min-font-12px
  [_nghost-c18]
  .price[_ngcontent-c18]
  .origin-price[_ngcontent-c18] {
  display: inline-block;
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: bottom left;
  transform-origin: bottom left;
}
.price[_ngcontent-c18] .origin-price[_ngcontent-c18] {
  color: #7f7f7f;
  font-size: 0.5rem;
  position: relative;
}
.price[_ngcontent-c18] .origin-price[_ngcontent-c18]::after {
  content: "";
  display: block;
  height: 1px;
  background: #7f7f7f;
  position: absolute;
  top: 49%;
  -webkit-transform: translateY(-49%);
  transform: translateY(-49%);
  left: 0;
  right: 0;
}
.is-bottom-shown[_nghost-c8] .bottom-bar[_ngcontent-c8],
.is-bottom-shown [_nghost-c8] .bottom-bar[_ngcontent-c8] {
  bottom: 3.6rem;
}
.bottom-bar[_ngcontent-c8] {
  position: fixed;
  height: 54px;
  padding: 0 12px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  background: #fafafa;
  box-shadow: 0 -0.2rem 1rem rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.bottom-bar[_ngcontent-c8]:before {
  top: 0;
  -webkit-transform-origin: top;
  transform-origin: top;
}
.bottom-bar[_ngcontent-c8]::after,
.bottom-bar[_ngcontent-c8]::before {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
}
.bottom-bar[_ngcontent-c8] .select-info[_ngcontent-c8] {
  height: -webkit-fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
}
.bottom-bar[_ngcontent-c8]
  .select-info[_ngcontent-c8]
  .checkbox-container[_ngcontent-c8] {
  line-height: 0;
}
.m-blue-checkbox-new.checkbox-on[_ngcontent-c12] {
  background-position: 0 0;
}
.m-blue-checkbox-new[_ngcontent-c12] {
  position: relative;
  display: inline-block;
  width: 23px;
  height: 23px;
  background: url("../assets/images/checkbox.png") no-repeat;
  background-size: 100% auto;
  background-position: 0 -80px;
}
.bottom-bar[_ngcontent-c8] .select-info[_ngcontent-c8] span[_ngcontent-c8] {
  color: #999;
  margin-left: 8px;
}
.bottom-bar[_ngcontent-c8]
  .select-info[_ngcontent-c8]
  span[_ngcontent-c8]
  i.color-red[_ngcontent-c8] {
  color: #d44d44;
}
.bottom-bar[_ngcontent-c8]
  .select-info[_ngcontent-c8]
  span[_ngcontent-c8]
  i[_ngcontent-c8] {
  font-weight: 900;
  font-size: 0.7rem;
}
i[_ngcontent-c8] {
  font-style: normal;
}
.bottom-bar[_ngcontent-c8] .sum-info[_ngcontent-c8] {
  margin-right: 120px;
}
.bottom-bar[_ngcontent-c8] .sum-info[_ngcontent-c8] .total-price {
  font-weight: 700;
  color: #333;
  z-index: 10;
  position: relative;
  font-size: 10px;
  margin: 0;
}
.bottom-bar[_ngcontent-c8] .sum-info[_ngcontent-c8] .total-price span {
  color: #d44d44;
  font-size: 12px;
}
.bottom-bar[_ngcontent-c8] .sum-info[_ngcontent-c8] i {
  font-style: normal;
  font-size: 0.5rem;
}
.bottom-bar[_ngcontent-c8] .sum-info[_ngcontent-c8] .total-price span {
  color: #d44d44;
  font-size: 12px;
}
.bottom-bar[_ngcontent-c8] .sum-info[_ngcontent-c8] .delivery {
  margin-top: 8px;
}
.bottom-bar[_ngcontent-c8] .sum-info[_ngcontent-c8] .blue-btn {
  position: absolute;
  width: 110px;
  right: 11px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-weight: 700;
}
.blue-btn.edit-red[_ngcontent-c8] {
  background: #d9554c;
  background: linear-gradient(#db6962, #d0453d);
}
.blue-btn[_ngcontent-c8] {
  height: 40px;
  line-height: 40px;
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  display: block;
  background: #5e8bdd;
  background: linear-gradient(#6f94e8, #5178df);
  border-radius: 6px;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
  color: #fff;
}
.modal-wrap[_ngcontent-c7] {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 250;
}
.shadow[_ngcontent-c7] {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    z-index: 250;
    background-color: rgba(0,0,0,.8);
}
.container[_ngcontent-c7] {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 251;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.dialog[_ngcontent-c5] {
    width: 85vw;
    background: #fff;
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: hidden;
}
.dialog[_ngcontent-c5] .title[_ngcontent-c5] {
    height: 2.4rem;
    background: #eee;
    width: 100%;
    text-align: center;
    line-height: 2.4rem;
    font-weight: 700;
    font-size: .9rem;
    color: #666;
    position: relative;
}
.dialog[_ngcontent-c5] .title[_ngcontent-c5]::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e1e1e1;
    -webkit-transform: scaleY(.667);
    transform: scaleY(.667);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
}
.dialog[_ngcontent-c5] .content[_ngcontent-c5] {
    margin: .9rem;
    box-sizing: border-box;
    font-size: .675rem;
    line-height: 1rem;
    color: #8d8d8d;
    overflow: auto;
    word-break: break-all;
    max-height: 13rem;
}
.dialog-confirm-text {
    padding: 20px 0;
    text-align: center;
    color: #666;
    font-weight: 400;
    font-size: .95rem;
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] {
    height: 2.5rem;
    background: #f5f5f5;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 .1rem;
    box-shadow: inset 0 -1px 1px rgba(0,0,0,.12);
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5]::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background: #e1e1e1;
    -webkit-transform: scaleY(.667);
    transform: scaleY(.667);
    -webkit-transform-origin: top;
    transform-origin: top;
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] .button-cancel[_ngcontent-c5] {
    background: #f5f5f5;
    color: #8c8c8c;
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] button[_ngcontent-c5] {
    width: 47%;
    height: 1.5rem;
    border-radius: .2rem;
    background: inherit;
    font-size: .625rem;
    font-weight: 700;
    outline: none;
    border: none;
    flex-grow: 1;
    margin: .5rem .2rem 0;
    position: relative;
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] .button-cancel[_ngcontent-c5]::before {
    border-color: rgba(0,0,0,.12);
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] button[_ngcontent-c5]::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -100%;
    left: 0;
    right: -100%;
    border: 1px solid #e6e6e6;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border-radius: .4rem;
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] .button-confirm[_ngcontent-c5] {
    color: #fff;
    background: #5f7ed7;
    background: linear-gradient(#6e98f4,#4b77ee);
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] button[_ngcontent-c5] {
    width: 47%;
    height: 1.5rem;
    border-radius: .2rem;
    background: inherit;
    font-size: .625rem;
    font-weight: 700;
    outline: none;
    border: none;
    flex-grow: 1;
    margin: .5rem .2rem 0;
    position: relative;
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] .button-confirm[_ngcontent-c5]::before {
    border-color: #3f6aec;
}
.dialog[_ngcontent-c5] .button-wrapper[_ngcontent-c5] button[_ngcontent-c5]::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -100%;
    left: 0;
    right: -100%;
    border: 1px solid #e6e6e6;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border-radius: .4rem;
}


</style>