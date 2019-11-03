<template>
  <div>
    <mt-header title="个人中心">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <section _ngcontent-c0 class="main-wrapper is-header-shown is-bottom-shown">
        <router-outlet _ngcontent-c0></router-outlet>
        <my-user _nghost-c16 class>
          <div class="ibox" _ngcontent-c16>
            <router-outlet _ngcontent-c16></router-outlet>
            <ng-component _nghost-c17>
              <div _ngcontent-c17 class="wrapper page-for-center">
                <div
                  _ngcontent-c17
                  @click="mineToLogin"
                  class="common-box arrow-right-icon box-userinfo"
                >
                  <div _ngcontent-c17 class="avatar">
                    <img
                      _ngcontent-c17
                      src="//static.smartisanos.cn/account/asset/img/default-user-avatar.png"
                    />
                  </div>登录/注册
                </div>

                <ul _ngcontent-c17 class="common-box menu-list-parallel box-order">
                  <li _ngcontent-c17>
                    <a
                      _ngcontent-c17
                      class="icons icon-order"
                      target="_self"
                      href="/user/order/list"
                    ></a>
                    <span>全部订单</span>
                  </li>
                  <li _ngcontent-c17>
                    <a
                      _ngcontent-c17
                      class="icons icon-unpay"
                      target="_self"
                      href="/user/order/list?status=unpay"
                    ></a>
                    <span>待付款</span>
                    <div _ngcontent-c17 class="tag-container"></div>
                  </li>
                  <li _ngcontent-c17>
                    <a
                      _ngcontent-c17
                      class="icons icon-undone"
                      target="_self"
                      href="/user/order/list?status=undone"
                    ></a>
                    <span>待收货</span>
                    <div _ngcontent-c17 class="tag-container"></div>
                  </li>
                  <li _ngcontent-c17>
                    <a
                      _ngcontent-c17
                      class="icons icon-aftersale"
                      target="_self"
                      href="/user/aftersale/apply"
                    ></a>
                    <span>售后</span>
                  </li>
                </ul>

                <ul _ngcontent-c17 class="common-box menu-list-vertical">
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a _ngcontent-c17 target="_self" href="/user/address/list">地址管理</a>
                  </li>
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a _ngcontent-c17 target="_self" href="/user/coupon">我的优惠券</a>
                  </li>
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a _ngcontent-c17 target="_self" href="/ucode">优先购买码</a>
                  </li>
                </ul>

                <ul _ngcontent-c17 class="common-box menu-list-vertical">
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a
                      _ngcontent-c17
                      href="//shopapi.smartisan.com/store/index.php?r=PhoneRecycle/Auth&amp;from=h5"
                      target="_self"
                    >以旧换新</a>
                  </li>
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a
                      _ngcontent-c17
                      href="//www.smartisan.com/support/#/self-service/9?from=shop"
                      target="_self"
                    >常见问题</a>
                  </li>
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a
                      _ngcontent-c17
                      href="//www.smartisan.com/support/#/servicecenter?from=shop"
                      target="_self"
                    >服务支持</a>
                  </li>
                </ul>

                <ul _ngcontent-c17 class="common-box menu-list-vertical">
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a
                      _ngcontent-c17
                      href="//www.smartisan.com/service/#/insurance/info/broken?from=shop"
                      target="_self"
                    >意外碎屏保修服务</a>
                  </li>
                  <li _ngcontent-c17 class="arrow-right-icon">
                    <a
                      _ngcontent-c17
                      href="//www.smartisan.com/service/#/insurance/info/broken?from=shop#delay"
                      target="_self"
                    >延长保修服务</a>
                  </li>
                </ul>
              </div>
            </ng-component>
            <dialog-prompt _ngcontent-c16 _nghost-c5 class="ng-tns-c5-13">
              <modal-container _ngcontent-c5 class="ng-tns-c5-13 ng-tns-c7-14" _nghost-c7>
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
                    <div _ngcontent-c5 class="dialog ng-tns-c5-13">
                      <div _ngcontent-c5 class="title">提示</div>
                      <div _ngcontent-c5 class="content">
                        <article _ngcontent-c16 class="dialog-confirm-msg"></article>
                      </div>
                      <div _ngcontent-c5 class="button-wrapper">
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
          </div>
        </my-user>
      </section>
    </div>
    <Tabbar :offset="3"></Tabbar>
  </div>
</template>

<script>
import Header2 from "../components/Header2.vue";
import Tabbar from "../components/tabbar.vue";
export default {
  data() {
    return {
     
    };
  },
  components: {
    Tabbar
  },
  methods: {
    mineToLogin() {
      this.$router.push("/login");
      console.log("goto login");
    }
  }
};
</script>

<style scoped>
ol,
ul {
  list-style: none;
}
header{
  height: 3.2rem;
  padding: 0 10px;
}
.main-wrapper.is-bottom-shown[_ngcontent-c0] {
  padding-bottom: 54px;
}
.main-wrapper[_ngcontent-c0] {
  overflow: scroll;
}
.page-for-center[_ngcontent-c17] {
  padding: 0.7rem 0.6rem 0;
}
.wrapper[_ngcontent-c17] {
  height: 100%;
  width: 100%;
  background: #e5e5e5;
  /* background: url(//static.smartisanos.cn/mobile/assets/images/bg-layout@2x.5611bdd….png) repeat; */
  background-size: 5rem;
  box-sizing: border-box;
  min-height: 100vh;
}
.common-box[_ngcontent-c17] {
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  background: #fff;
  margin-bottom: 0.7rem;
  margin-top: 0;
  padding-left: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1),
    0 18px 20px -10px rgba(0, 0, 0, 0.03), 0 18px 20px -10px rgba(0, 0, 0, 0.03),
    0 10px 20px -10px rgba(0, 0, 0, 0.03);
}
.page-for-center[_ngcontent-c17] .box-userinfo[_ngcontent-c17] {
  position: relative;
  height: 5.2rem;
  line-height: 5.2rem;
  padding-left: 4.35rem;
  margin-bottom: 0;
  border-bottom: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  font-size: 0.95rem;
  color: #333;
  box-shadow: none;
}

.page-for-center[_ngcontent-c17]
  .box-userinfo[_ngcontent-c17]
  .avatar[_ngcontent-c17] {
  position: absolute;
  left: 0.9rem;
  top: 50%;
  width: 2.66rem;
  height: 2.66rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.page-for-center[_ngcontent-c17]
  .box-userinfo[_ngcontent-c17]
  .avatar[_ngcontent-c17]:before,
.page-for-center[_ngcontent-c17]
  .box-userinfo[_ngcontent-c17]
  .avatar[_ngcontent-c17]
  img[_ngcontent-c17] {
  width: 2.96rem;
  height: 2.96rem;
  border-radius: 50%;
}
.page-for-center[_ngcontent-c17] .box-order[_ngcontent-c17] {
  border-radius: 0 0 0.4rem 0.4rem;
}

.page-for-center[_ngcontent-c17] .box-order[_ngcontent-c17] a[_ngcontent-c17],
.page-for-center[_ngcontent-c17] .box-order[_ngcontent-c17] li[_ngcontent-c17] {
  font-size: 0.5rem;
}

.menu-list-parallel[_ngcontent-c17] li[_ngcontent-c17] {
  float: left;
  width: 25%;
  height: 4rem;
  text-align: center;
}
.menu-list-parallel[_ngcontent-c17] li[_ngcontent-c17],
.menu-list-vertical[_ngcontent-c17] li[_ngcontent-c17] {
  position: relative;
  font-size: 0.85rem;
  box-sizing: border-box;
}
.min-font-12px[_nghost-c17]
  .page-for-center[_ngcontent-c17]
  .box-order[_ngcontent-c17]
  a[_ngcontent-c17],
.min-font-12px
  [_nghost-c17]
  .page-for-center[_ngcontent-c17]
  .box-order[_ngcontent-c17]
  a[_ngcontent-c17] {
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

.page-for-center[_ngcontent-c17] .box-order[_ngcontent-c17] a[_ngcontent-c17],
.page-for-center[_ngcontent-c17] .box-order[_ngcontent-c17] li[_ngcontent-c17] {
  font-size: 0.5rem;
}

.menu-list-parallel[_ngcontent-c17] li[_ngcontent-c17] a[_ngcontent-c17] {
  padding: 0.2rem 0 0.2rem;
}

.menu-list-parallel[_ngcontent-c17] a[_ngcontent-c17],
.menu-list-vertical[_ngcontent-c17] a[_ngcontent-c17] {
  position: relative;
  display: block;
  text-decoration: none;
  color: #333;
}
.menu-list-vertical[_ngcontent-c17] li[_ngcontent-c17] {
  height: 3.6rem;
  line-height: 3.6rem;
}
.menu-list-parallel[_ngcontent-c17] li[_ngcontent-c17],
.menu-list-vertical[_ngcontent-c17] li[_ngcontent-c17] {
  position: relative;
  font-size: 0.95rem;
  box-sizing: border-box;
}
.menu-list-parallel[_ngcontent-c9]
  li[_ngcontent-c9]
  .icons[_ngcontent-c9]:before {
  top: 0.4rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.page-for-center[_ngcontent-c17]
  .menu-list-vertical[_ngcontent-c17]
  li[_ngcontent-c17]
  a[_ngcontent-c17] {
  padding-left: 0;
  text-indent: 0.93rem;
}

.menu-list-vertical[_ngcontent-c17] li[_ngcontent-c17] a[_ngcontent-c17] {
  height: 100%;
  padding-left: 3rem;
  text-indent: 0.6rem;
}

.menu-list-parallel[_ngcontent-c17] a[_ngcontent-c17],
.menu-list-vertical[_ngcontent-c17] a[_ngcontent-c17] {
  position: relative;
  display: block;
  text-decoration: none;
  color: #333;
}
.box-order li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.box-order .icons {
  display: block !important;
  width: 1.2rem;
  top: 30%;
  height: 1.2rem;
  transform: translateY(-50%);
}
.box-order span {
  padding: 0 0 0.4rem 0;
}
.icons.icon-order {
  background: url("../assets/images/order.png") no-repeat 50%;
  background-size: 0.8rem;
}
.icons.icon-unpay {
  background: url("../assets/images/pay.png") no-repeat 50%;
  background-size: 0.8rem;
}
.icons.icon-undone {
  background: url("../assets/images/huo.png") no-repeat 50%;
  background-size: 0.8rem;
}
.icons.icon-aftersale {
  background: url("../assets/images/shouhou.png") no-repeat 50%;
  background-size: 0.8rem;
}
</style>