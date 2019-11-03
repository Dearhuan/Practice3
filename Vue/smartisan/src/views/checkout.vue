<template>
  <div>
    <mt-header :title="title">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <section _ngcontent-c0 class="main-wrapper is-header-shown">
      <router-outlet _ngcontent-c0></router-outlet>
      <ng-component _nghost-c8 class>
        <div _ngcontent-c8 class="order-wrapper">
          <div _ngcontent-c8 class="order-card order-address">
            <div _ngcontent-c8 class="card-header">
              <h2 _ngcontent-c8 class="title">收货信息</h2>
            </div>
            <div _ngcontent-c8 class="content">
              <div _ngcontent-c8 class="name">
                <span _ngcontent-c8>xxx</span>
                <span _ngcontent-c8>15666667777</span>
              </div>
              <h3 _ngcontent-c8 class="address">北京市 房山区 rew</h3>
            </div>
          </div>

          <order-payment _ngcontent-c8 _nghost-c9>
            <div _ngcontent-c9 class="order-card order-payment">
              <div _ngcontent-c9 class="card-header">
                <h2 _ngcontent-c9 class="title">支付方式</h2>
              </div>
              <ul _ngcontent-c9 class="payment-items">
                <li
                  _ngcontent-c9
                  v-for="(item, index) in payMent"
                  :key="index"
                  @click="selectPay(index)"
                  :class="['item', item.li ,{active: active == index}]"
                >
                  <span _ngcontent-c9 class="name">{{item.name}}</span>

                  <span _ngcontent-c9 :class="['payment-check' ,{active:  active == index}]"></span>
                </li>
              </ul>

              <div _ngcontent-c9 class="notes">
                <ul _ngcontent-c9>
                  <li _ngcontent-c9 class="note-title">重要提示：</li>

                  <li _ngcontent-c9 class="note-tip">我们将在您完成支付后的 72 小时内陆续发货。</li>
                </ul>
              </div>
              <item-board _ngcontent-c9 _nghost-c11 class="ng-tns-c11-15">
                <div _ngcontent-c11 class="ng-tns-c11-15">
                  <div
                    _ngcontent-c11
                    class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
                    style="background-color: rgba(0, 0, 0, 0.8); display: none;"
                  ></div>
                  <div
                    _ngcontent-c11
                    class="item-board ng-trigger ng-trigger-itemBoardAnimate"
                    style="display: none;"
                  >
                    <div _ngcontent-c9 class="item-board-content">
                      <order-instalment _ngcontent-c9 _nghost-c14>
                        <div _ngcontent-c14 class="board-instalment">
                          <div _ngcontent-c14 class="header">
                            <span _ngcontent-c14 class="title">选择分期</span>
                            <div _ngcontent-c14 class="btn-cancel">取消</div>
                          </div>
                          <ul _ngcontent-c14 class="instalment-list"></ul>
                        </div>
                      </order-instalment>
                    </div>
                  </div>
                </div>
              </item-board>
            </div>
          </order-payment>

          <div _ngcontent-c8 class="order-card order-goods">
            <div _ngcontent-c8 class="card-header">
              <h2 _ngcontent-c8 class="title">商品信息</h2>
              <h3 _ngcontent-c8 class="sub-title">{{`总计 ${allNum} 件商品`}}</h3>
            </div>

            <div v-for="(item, index) in order" :key="index" _ngcontent-c8 class="content">
              <div _ngcontent-c8 class="goods-img">
                <a _ngcontent-c8>
                  <img _ngcontent-c8 :src="item.image" />
                </a>
              </div>
              <div _ngcontent-c8 class="goods-info">
                <div _ngcontent-c8 class="title">{{item.skutitle}}</div>

                <div _ngcontent-c8 class="desc">精品配件 限时直降</div>

                <div _ngcontent-c8 class="summary">
                  <span _ngcontent-c8 class="price curr-price">
                    <i>¥</i>
                    <span>{{item.price - 10}}</span>
                  </span>
                  <span _ngcontent-c8 class="num">{{item.num}}</span>
                  <span _ngcontent-c8 class="price sale-price">
                    <i>¥</i>
                    <span>{{item.price}}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div _ngcontent-c8 class="order-options">
            <div _ngcontent-c8 class="option-item">
              <span _ngcontent-c8 class="name">发票信息</span>
              <ul _ngcontent-c8 class="invoice">
                <li _ngcontent-c8>电子发票</li>
                <li _ngcontent-c8>个人</li>
                <li _ngcontent-c8>商品明细</li>
              </ul>
            </div>

            <div _ngcontent-c8 class="option-item">
              <span _ngcontent-c8 class="name">优惠券</span>

              <span _ngcontent-c8 class="coupon">无可用券</span>
            </div>
          </div>
          <div _ngcontent-c8 class="order-card order-subtotal">
            <div _ngcontent-c8 class="card-header">
              <h2 _ngcontent-c8 class="title">商品金额</h2>
            </div>
            <ul _ngcontent-c8 class="subtotal-items">
              <li _ngcontent-c8 class="item">
                <span _ngcontent-c8 class="name">商品总计</span>
                <span _ngcontent-c8 class="price">
                  <i>¥</i>
                  <span>{{`${countMoney}.00`}}</span>
                </span>
              </li>

              <li _ngcontent-c8 class="item">
                <span _ngcontent-c8 class="name">优惠</span>
                <span _ngcontent-c8 class="price price-minus">
                  <i>¥</i>
                  <span>{{`${disCount}.00`}}</span>
                </span>
              </li>

              <li _ngcontent-c8 class="item">
                <span _ngcontent-c8 class="name">运费</span>
                <span _ngcontent-c8 class="price price-plus">
                  <i>¥</i>
                  <span>{{`${freight}.00`}}</span>
                </span>
              </li>

              <li _ngcontent-c8 class="item items-subtotal">
                <span _ngcontent-c8 class="name">应付金额</span>
                <span _ngcontent-c8 class="price">
                  <i>¥</i>
                  <span>{{`${payMoney}.00`}}</span>
                </span>
              </li>
            </ul>
          </div>
          <div _ngcontent-c8 class="order-card occupy-a-seat"></div>
          <div _ngcontent-c8 class="order-btns">
            <aside _ngcontent-c8 class="total-content">
              <span _ngcontent-c8 class="total-name">应付金额</span>
              <span _ngcontent-c8 class="total-price">
                <i>¥</i>
                <span>{{`${payMoney}.00`}}</span>
              </span>
            </aside>
            <button _ngcontent-c8 @click="payNow" class="payment-btn">现在支付</button>
          </div>
        </div>
        <dialog-prompt _ngcontent-c8 _nghost-c5 class="ng-tns-c5-3">
          <modal-container _ngcontent-c5 class="ng-tns-c5-3 ng-tns-c7-8" _nghost-c7>
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
                <div _ngcontent-c5 class="dialog ng-tns-c5-3">
                  <div _ngcontent-c5 class="title">提示</div>
                  <div _ngcontent-c5 class="content">
                    <article _ngcontent-c8 class="dialog-confirm-msg"></article>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >我知道了</button>
                  </div>
                </div>
              </div>
            </div>
          </modal-container>
        </dialog-prompt>
        <dialog-prompt _ngcontent-c8 _nghost-c5 class="ng-tns-c5-4">
          <modal-container _ngcontent-c5 class="ng-tns-c5-4 ng-tns-c7-9" _nghost-c7>
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
                  <div _ngcontent-c5 class="title">正在支付</div>
                  <div _ngcontent-c5 class="content">
                    <article _ngcontent-c8 class="dialog-confirm-msg">支付完成前请不要关闭本窗口</article>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <button
                      _ngcontent-c5
                      class="button-cancel ng-trigger ng-trigger-buttonClick ng-tns-c5-4"
                      style="display: inline;"
                    >重新选择支付方式</button>
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >已完成支付</button>
                  </div>
                </div>
              </div>
            </div>
          </modal-container>
        </dialog-prompt>
        <item-board _ngcontent-c8 class="item-coupon ng-tns-c11-5" _nghost-c11>
          <div _ngcontent-c11 class="ng-tns-c11-5">
            <div
              _ngcontent-c11
              class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
              style="background-color: rgba(0, 0, 0, 0.8); display: none;"
            ></div>
            <div
              _ngcontent-c11
              class="item-board ng-trigger ng-trigger-itemBoardAnimate"
              style="display: none;"
            >
              <div _ngcontent-c8 class="item-board-content">
                <order-coupon _ngcontent-c8 _nghost-c12>
                  <div _ngcontent-c12 class="order-coupon-wrap">
                    <div _ngcontent-c12 class="fix-header-tabbox box-line">
                      <div _ngcontent-c12 class="header-tabbox box-line">
                        <div _ngcontent-c12 class="button button-hide">说明</div>
                        <ul _ngcontent-c12 class="box-border">
                          <li _ngcontent-c12 class="box-line line-vertical active">
                            <span _ngcontent-c12>可用券（0）</span>
                            <a _ngcontent-c12 class="active-area"></a>
                          </li>
                          <li _ngcontent-c12 class="box-line line-vertical">
                            <span _ngcontent-c12>不可用券（0）</span>
                            <a _ngcontent-c12 class="active-area"></a>
                          </li>
                        </ul>
                        <div _ngcontent-c12 class="button">取消</div>
                      </div>

                      <div _ngcontent-c12 class="couponPrompt">
                        <label _ngcontent-c12>0 张优惠券可选</label>
                      </div>
                    </div>

                    <ul _ngcontent-c12 class="coupon-list"></ul>
                    <div _ngcontent-c12 class="have-no-coupon">
                      <h2 _ngcontent-c12>暂无可用优惠券</h2>
                      <p _ngcontent-c12>请关注近期锤子商城官方活动</p>
                    </div>

                    <div _ngcontent-c12 class="confirm-btn-wrap">
                      <button _ngcontent-c12 class="confirm-btn disabled">确定</button>
                    </div>
                  </div>
                  <dialog-prompt _ngcontent-c12 _nghost-c5 class="ng-tns-c5-10">
                    <modal-container _ngcontent-c5 class="ng-tns-c5-10 ng-tns-c7-11" _nghost-c7>
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
                          <div _ngcontent-c5 class="dialog ng-tns-c5-10">
                            <div _ngcontent-c5 class="title">提示</div>
                            <div _ngcontent-c5 class="content">
                              <article _ngcontent-c12 class="center-content"></article>
                            </div>
                            <div _ngcontent-c5 class="button-wrapper">
                              <button
                                _ngcontent-c5
                                class="button-confirm ng-trigger ng-trigger-buttonClick"
                              >我知道了</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </modal-container>
                  </dialog-prompt>
                </order-coupon>
              </div>
            </div>
          </div>
        </item-board>
        <item-board _ngcontent-c8 class="item-coupon ng-tns-c11-6" _nghost-c11>
          <div _ngcontent-c11 class="ng-tns-c11-6">
            <div
              _ngcontent-c11
              class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
              style="background-color: rgba(0, 0, 0, 0.8); display: none;"
            ></div>
            <div
              _ngcontent-c11
              class="item-board ng-trigger ng-trigger-itemBoardAnimate"
              style="display: none;"
            >
              <div _ngcontent-c8 class="item-board-content">
                <order-vouchercoupon _ngcontent-c8 _nghost-c13>
                  <div _ngcontent-c13 class="order-coupon-wrap">
                    <div _ngcontent-c13 class="fix-header-tabbox box-line">
                      <div _ngcontent-c13 class="header-tabbox box-line">
                        <div _ngcontent-c13 class="button button-hide">说明</div>
                        <ul _ngcontent-c13 class="box-border">
                          <li _ngcontent-c13 class="box-line line-vertical active">
                            <span _ngcontent-c13>可用券（0）</span>
                            <a _ngcontent-c13 class="active-area"></a>
                          </li>
                          <li _ngcontent-c13 class="box-line line-vertical">
                            <span _ngcontent-c13>不可用券（0）</span>
                            <a _ngcontent-c13 class="active-area"></a>
                          </li>
                        </ul>
                        <div _ngcontent-c13 class="button">取消</div>
                      </div>

                      <div _ngcontent-c13 class="couponPrompt">
                        <label _ngcontent-c13>请选择消费券</label>
                      </div>
                    </div>

                    <ul _ngcontent-c13 class="coupon-list"></ul>
                    <div _ngcontent-c13 class="have-no-coupon">
                      <h2 _ngcontent-c13>暂无可用消费券</h2>
                      <p _ngcontent-c13>请关注近期锤子商城官方活动</p>
                    </div>

                    <div _ngcontent-c13 class="confirm-btn-wrap">
                      <button _ngcontent-c13 class="confirm-btn disabled">确定</button>
                    </div>
                  </div>
                  <dialog-prompt _ngcontent-c13 _nghost-c5 class="ng-tns-c5-12">
                    <modal-container _ngcontent-c5 class="ng-tns-c5-12 ng-tns-c7-13" _nghost-c7>
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
                          <div _ngcontent-c5 class="dialog ng-tns-c5-12">
                            <div _ngcontent-c5 class="title">提示</div>
                            <div _ngcontent-c5 class="content">
                              <article _ngcontent-c13 class="center-content"></article>
                            </div>
                            <div _ngcontent-c5 class="button-wrapper">
                              <button
                                _ngcontent-c5
                                class="button-confirm ng-trigger ng-trigger-buttonClick"
                              >我知道了</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </modal-container>
                  </dialog-prompt>
                </order-vouchercoupon>
              </div>
            </div>
          </div>
        </item-board>
        <dialog-prompt _ngcontent-c8 _nghost-c5 class="ng-tns-c5-7">
          <modal-container _ngcontent-c5 class="ng-tns-c5-7 ng-tns-c7-14" _nghost-c7>
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
                <div _ngcontent-c5 class="dialog ng-tns-c5-7">
                  <div _ngcontent-c5 class="title">使用说明</div>
                  <div _ngcontent-c5 class="content">
                    <p _ngcontent-c8>你可以选择 “现在支付” 或 ”提交订单” 稍后支付。选择 “提交订单” 后，请在 24 小时内支付，超时订单将自动取消</p>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >我知道了</button>
                  </div>
                </div>
              </div>
            </div>
          </modal-container>
        </dialog-prompt>
      </ng-component>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "订单信息",
      order: [],
      allNum: 0,
      countMoney: 0,
      payMoney: 0,
      disCount: 0,
      freight: 0,
      active: 0,
      payMent: [
        {
          li: "wechat-pay",
          name: "微信支付"
        },
        {
          li: "ali-pay",
          name: "支付宝"
        },
        {
          li: "ant stages-pay",
          name: "蚂蚁花呗分期"
        }
      ]
    };
  },
  created() {
    this.order = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    console.log(this.order);
    if (this.order) {
      this.order.forEach(ele => {
        this.allNum += ele.num;   
        this.countMoney += ele.num * ele.price;     //商品总计
        this.disCount += ele.num * 10;                //优惠
      });
      this.payMoney = this.countMoney - this.disCount + this.freight;    //应付金额
      console.log(this.allNum, this.countMoney, this.payMoney);
    } else {
      this.allNum = 0;
      this.countMoney = 0;
    }
  },
  methods: {
    selectPay(index) {
      this.active = index;
      console.log(this.active);
    },
    payNow() {
      this.$router.push("/pay");
      console.log("payIndex", this.active);
      this.$store.commit('payMethod',this.active);    //设置支付方式  0：WeChat   1：AliPay   3：蚂蚁花呗
    }
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
h2,
h3 {
  margin: 0;
}
.main-wrapper.is-header-shown[_ngcontent-c0] {
  margin-top: 50px;
}
.main-wrapper[_ngcontent-c0] {
  overflow: scroll;
}
.order-wrapper[_ngcontent-c8] {
  background: #e4e4e4;
}
.order-wrapper[_ngcontent-c8] .order-card[_ngcontent-c8] {
  background: #fff;
  border-bottom: 1px solid #d1d1d1;
  border-top: 1px solid #d1d1d1;
}
.order-wrapper[_ngcontent-c8] .order-address[_ngcontent-c8] {
  background: #fff;
  box-shadow: 0 -2px 2px #f0f0f0;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .card-header[_ngcontent-c8] {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 40px;
  box-sizing: border-box;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  h2.title[_ngcontent-c8] {
  float: left;
  height: 40px;
  padding-left: 10px;
  color: #666;
  font-size: 0.75rem;
  font-weight: 700;
}
h2[_ngcontent-c8],
h3[_ngcontent-c8] {
  font-weight: 400;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .card-header[_ngcontent-c8]::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f2f2f2;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .content[_ngcontent-c8]:last-child {
  border-bottom: 0;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .content[_ngcontent-c8] {
  padding: 12px 18px;
  border-bottom: 1px solid #f0f0f0;
}

.order-wrapper[_ngcontent-c8]
  .order-address[_ngcontent-c8]
  .content[_ngcontent-c8] {
  position: relative;
}
.order-wrapper[_ngcontent-c8]
  .order-address[_ngcontent-c8]
  .content[_ngcontent-c8]::before {
  content: "";
  display: block;
  position: absolute;
  right: 0.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 0.3rem;
  height: 0.5rem;
  background: url("../assets/images/arrow12.png") no-repeat 50%;
  background-size: contain;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .content[_ngcontent-c8]
  .name[_ngcontent-c8] {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 12px;
  font-weight: 700;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .content[_ngcontent-c8]
  .address[_ngcontent-c8] {
  font-size: 0.6rem;
  color: #7f7f7f;
  line-height: 0.9rem;
  margin-right: 0.3rem;
}
h2[_ngcontent-c8],
h3[_ngcontent-c8] {
  font-weight: 400;
}
.order-payment[_ngcontent-c9] {
  margin-top: 5px;
}
.order-card[_ngcontent-c9] {
  background: #fff;
  border-bottom: 1px solid #d1d1d1;
}
.order-card[_ngcontent-c9] .card-header[_ngcontent-c9] {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 40px;
  box-sizing: border-box;
}
.order-card[_ngcontent-c9] h2.title[_ngcontent-c9] {
  float: left;
  height: 40px;
  padding-left: 10px;
  color: #666;
  font-size: 0.75rem;
}
.order-card[_ngcontent-c9] .card-header[_ngcontent-c9]::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f2f2f2;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.active[_ngcontent-c9] {
  font-weight: 700;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item[_ngcontent-c9] {
  position: relative;
  height: 48px;
  line-height: 48px;
  font-size: 0.95rem;
  color: #333;
  padding-left: 20px;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item[_ngcontent-c9]::before {
  position: absolute;
  content: "";
  display: block;
  background: url("../assets/images/gou.png") no-repeat 50%;
  width: 24px;
  height: 24px;
  background-size: 24px auto;
  background-position: 0 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item[_ngcontent-c9]
  .name[_ngcontent-c9] {
  margin-left: 40px;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item[_ngcontent-c9]
  .payment-check.active[_ngcontent-c9]::after {
  position: absolute;
  content: "";
  background: url("../assets/images/gou.png") no-repeat 50%;
  width: 0.75rem;
  height: 0.6rem;
  background-size: 1.2rem;
  background-position: 0 100%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  right: 1.15rem;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item[_ngcontent-c9]::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f2f2f2;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.ali-pay[_ngcontent-c9]::before {
  background-position: 0 -24px;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.stages-pay.ant[_ngcontent-c9]::before {
  background-position: 0 -72px;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.stages-pay[_ngcontent-c9]
  .stages[_ngcontent-c9] {
  position: relative;
  display: inline-block;
  margin-left: 40px;
  padding: 0.6rem 0.8rem 0.6rem 0;
  line-height: 1;
  font-size: 0.6rem;
  color: #666;
  border-top: 1px dotted #ebebeb;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.stages-pay[_ngcontent-c9]
  .stages[_ngcontent-c9]
  span[_ngcontent-c9] {
  font-weight: 700;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.stages-pay[_ngcontent-c9]
  .stages[_ngcontent-c9]
  em[_ngcontent-c9]
  i,
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.stages-pay[_ngcontent-c9]
  .stages[_ngcontent-c9]
  em[_ngcontent-c9]
  span {
  font-style: normal;
}
.order-payment[_ngcontent-c9]
  .payment-items[_ngcontent-c9]
  .item.stages-pay[_ngcontent-c9]
  .stages[_ngcontent-c9]:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 0.3rem;
  height: 1rem;
  background: url("../assets/images/arrow12.png") no-repeat 50%;
  background-size: contain;
}
.order-payment[_ngcontent-c9] .notes[_ngcontent-c9] {
  width: 100%;
  padding: 0.8rem 0.9rem;
  box-sizing: border-box;
}
.min-font-12px[_nghost-c9]
  .order-payment[_ngcontent-c9]
  .notes[_ngcontent-c9]
  li[_ngcontent-c9],
.min-font-12px
  [_nghost-c9]
  .order-payment[_ngcontent-c9]
  .notes[_ngcontent-c9]
  li[_ngcontent-c9] {
  -webkit-transform: scale(10/12);
  transform: scale(10/12);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.order-payment[_ngcontent-c9]
  .notes[_ngcontent-c9]
  li.note-title[_ngcontent-c9] {
  color: #666;
}
.order-payment[_ngcontent-c9] .notes[_ngcontent-c9] li[_ngcontent-c9] {
  font-size: 0.5rem;
  line-height: 1rem;
  color: #7f7f7f;
}
.order-payment[_ngcontent-c9]
  .notes[_ngcontent-c9]
  li[_ngcontent-c9]
  + li[_ngcontent-c9] {
  margin-top: 6px;
}
.order-payment[_ngcontent-c9] .notes[_ngcontent-c9] li.note-tip[_ngcontent-c9] {
  position: relative;
  padding-left: 8px;
}
.order-payment[_ngcontent-c9] .notes[_ngcontent-c9] li[_ngcontent-c9] {
  font-size: 0.5rem;
  line-height: 1rem;
  color: #7f7f7f;
}
.order-payment[_ngcontent-c9]
  .notes[_ngcontent-c9]
  li.note-tip[_ngcontent-c9]::before {
  position: absolute;
  content: "";
  left: 2px;
  top: 9px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #7f7f7f;
}
.order-wrapper[_ngcontent-c8] .order-goods[_ngcontent-c8] {
  margin-top: 5px;
}

.order-wrapper[_ngcontent-c8] .order-card[_ngcontent-c8] {
  background: #fff;
  border-bottom: 1px solid #d1d1d1;
  border-top: 1px solid #d1d1d1;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .card-header[_ngcontent-c8] {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 40px;
  box-sizing: border-box;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  h2.title[_ngcontent-c8] {
  float: left;
  height: 40px;
  padding-left: 10px;
  color: #666;
  font-size: 0.95rem;
  font-weight: 700;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  h3.sub-title[_ngcontent-c8] {
  float: right;
  margin-right: 10px;
  font-size: 0.9rem;
  color: #7f7f7f;
  padding-right: 7px;
}
h2[_ngcontent-c8],
h3[_ngcontent-c8] {
  font-weight: 400;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .content[_ngcontent-c8] {
  display: flex;
  align-items: center;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .content[_ngcontent-c8] {
  padding: 12px 18px;
  border-bottom: 1px solid #f0f0f0;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-img[_ngcontent-c8] {
  float: left;
  margin-right: 18px;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-img[_ngcontent-c8]
  img[_ngcontent-c8] {
  width: 83px;
  height: 83px;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8] {
  overflow: hidden;
  font-size: 0.9rem;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .title[_ngcontent-c8] {
  color: #333;
  font-weight: 700;
  line-height: 0.9rem;
  margin-bottom: 0.4rem;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .desc[_ngcontent-c8] {
  font-size: 0.6rem;
  line-height: 0.8rem;
  color: #7f7f7f;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .summary[_ngcontent-c8] {
  margin-top: 8px;
  font-weight: 700;
  font-size: 0;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .summary[_ngcontent-c8]
  .price[_ngcontent-c8] {
  display: inline-block;
  font-size: 0.75rem;
  color: #d44e43;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .summary[_ngcontent-c8]
  .price[_ngcontent-c8]
  i {
  font-style: normal;
  font-size: 0.5rem;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .summary[_ngcontent-c8]
  .num[_ngcontent-c8] {
  display: inline-block;
  font-size: 0.6rem;
  margin-left: 0.8rem;
  position: relative;
  color: #999;
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .summary[_ngcontent-c8]
  .num[_ngcontent-c8]::before {
  position: absolute;
  content: "x";
  left: -12px;
  font-size: 0.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.order-wrapper[_ngcontent-c8]
  .order-goods[_ngcontent-c8]
  .goods-info[_ngcontent-c8]
  .summary[_ngcontent-c8]
  .sale-price[_ngcontent-c8] {
  position: relative;
  margin-left: 12px;
  color: #999;
}
.order-wrapper[_ngcontent-c8] .order-options[_ngcontent-c8] {
  position: relative;
  margin-top: 5px;
  background: #fff;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .option-item[_ngcontent-c8] {
  position: relative;
  height: 3rem;
  line-height: 3rem;
  font-size: 0.7rem;
  padding-left: 18px;
  color: #333;
  box-sizing: border-box;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .option-item[_ngcontent-c8]:before {
  content: "";
  display: block;
  position: absolute;
  right: 0.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 0.3rem;
  height: 0.5rem;
  background: url("../assets/images/arrow12.png") no-repeat 50%;
  background-size: contain;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .name[_ngcontent-c8] {
  font-size: 0.85rem;
  font-weight: 700;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8],
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .name[_ngcontent-c8] {
  float: left;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8] {
  font-size: 0;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .coupon[_ngcontent-c8],
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8] {
  width: 12rem;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  white-space: nowrap;
  padding-left: 0.5rem;
  color: #999;
}

.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8],
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .name[_ngcontent-c8] {
  float: left;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8]
  li[_ngcontent-c8] {
  display: inline-block;
  font-size: 0.7rem;
  position: relative;
  margin-right: 0.9rem;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8]
  li[_ngcontent-c8]::after {
  position: absolute;
  content: "\B7";
  right: -0.5rem;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8]
  li[_ngcontent-c8]:last-child {
  margin-right: 0;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .option-item[_ngcontent-c8]:first-child::after,
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .option-item[_ngcontent-c8]:nth-last-child(2)::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f2f2f2;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .coupon[_ngcontent-c8],
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8] {
  width: 12rem;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  white-space: nowrap;
  padding-left: 0.5rem;
  color: #999;
}
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .coupon[_ngcontent-c8],
.order-wrapper[_ngcontent-c8]
  .order-options[_ngcontent-c8]
  .invoice[_ngcontent-c8] {
  margin-right: 1.2rem;
  float: right;
}
.order-wrapper[_ngcontent-c8] .order-subtotal[_ngcontent-c8] {
  margin-top: 5px;
}
.order-wrapper[_ngcontent-c8] .order-card[_ngcontent-c8] {
  background: #fff;
  border-bottom: 1px solid #d1d1d1;
  border-top: 1px solid #d1d1d1;
}
.order-wrapper[_ngcontent-c8]
  .order-card[_ngcontent-c8]
  .card-header[_ngcontent-c8] {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 40px;
  box-sizing: border-box;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .item[_ngcontent-c8] {
  font-size: 0.95rem;
  margin-left: 13px;
  padding-right: 13px;
  height: 2.4rem;
  line-height: 2.4rem;
  color: #333;
  position: relative;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .item[_ngcontent-c8]
  .name[_ngcontent-c8] {
  float: left;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .item[_ngcontent-c8]
  .price[_ngcontent-c8] {
  position: absolute;
  right: 13px;
  font-weight: 700;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .item[_ngcontent-c8]
  .price.price-plus[_ngcontent-c8]::before {
  position: absolute;
  content: "+";
  left: -12px;
  bottom: 0;
  font-size: 0.6rem;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .item[_ngcontent-c8]
  .price.price-minus[_ngcontent-c8]::before {
  position: absolute;
  content: "-";
  left: -12px;
  bottom: 0;
  font-size: 0.6rem;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .item[_ngcontent-c8]
  .price[_ngcontent-c8]
  i {
  font-size: 0.6rem;
  font-style: normal;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .item[_ngcontent-c8]::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 300%;
  height: 2px;
  background-image: linear-gradient(90deg, #e4e4e4 50%, hsla(0, 0%, 100%, 0) 0);
  background-position: bottom;
  background-size: 4px 2px;
  background-repeat: repeat-x;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.33333);
  transform: scale(0.33333);
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .items-subtotal[_ngcontent-c8] {
  position: relative;
  margin-left: 0;
  padding-left: 13px;
  font-weight: 700;
  border-bottom: none;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .items-subtotal[_ngcontent-c8]
  .price[_ngcontent-c8] {
  color: #d44d44;
}
.order-wrapper[_ngcontent-c8]
  .order-subtotal[_ngcontent-c8]
  .items-subtotal[_ngcontent-c8]::after {
  height: 0;
}
.order-wrapper[_ngcontent-c8] .occupy-a-seat[_ngcontent-c8] {
  margin-top: 2.8rem;
}
.order-wrapper[_ngcontent-c8] .order-card[_ngcontent-c8] {
  background: #fff;
  border-bottom: 1px solid #d1d1d1;
  border-top: 1px solid #d1d1d1;
}
.order-wrapper[_ngcontent-c8] .order-btns[_ngcontent-c8] {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.62rem;
  box-sizing: border-box;
  padding: 7px 6px 7px 18px;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
}
.order-wrapper[_ngcontent-c8]
  .order-btns[_ngcontent-c8]
  .total-content[_ngcontent-c8] {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-weight: 700;
}
.order-wrapper[_ngcontent-c8]
  .order-btns[_ngcontent-c8]
  .total-name[_ngcontent-c8] {
  margin-right: 5px;
  font-size: 0.9rem;
  color: #333;
}
.order-wrapper[_ngcontent-c8]
  .order-btns[_ngcontent-c8]
  .total-price[_ngcontent-c8] {
  font-size: 0.95rem;
  color: #c4564b;
}
.order-wrapper[_ngcontent-c8]
  .order-btns[_ngcontent-c8]
  .total-price[_ngcontent-c8]
  > i {
  font-size: 0.6rem;
  font-style: normal;
}
.order-wrapper[_ngcontent-c8]
  .order-btns[_ngcontent-c8]
  .payment-btn[_ngcontent-c8] {
  float: right;
  width: 8.33rem;
  height: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  border: 0;
  outline: none;
  border-radius: 6px;
  color: #fff;
  background: #5f7ed7;
  background: linear-gradient(#6e98f4, #4b77ee);
  box-shadow: inset 0 1px 2px 0 rgba(61, 102, 228, 0.3),
    0 2px 3px -1px rgba(0, 0, 0, 0.3);
  -webkit-user-select: none;
  user-select: none;
}
</style>