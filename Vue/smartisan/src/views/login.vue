<template>
  <div>
    <Header2>{{msg}}</Header2>
    <div id="box">
      <div class="dialog dialog-shadow">
        <div class="title" ng-class="loginLogoClass">
          <div ng-show="is1111" class="return-btn ng-hide" ng-click="backToLast()"></div>
          <h4 ng-bind="dialogTitle" class="ng-binding">登录官网</h4>
          <a class="close"></a>
        </div>
        <!-- ngView:  -->
        <div class="content ng-scope" ng-view ng-animate-children>
          <form
            class="login-form form-v2 ng-scope ng-pristine ng-invalid ng-invalid-required"
            name="form"
            novalidate
            autocomplete="off"
          >
            <ul class="common-form">
              <!-- ngIf: showCcc -->
              <li class="username border-1p">
                <div class="input" i-animation="errAnimation.username">
                  <span class="icon">
                    <i>手机号/邮箱</i>
                  </span>
                  <!-- ngIf: showCcc -->
                  <label
                    for="username"
                    class="placeholder ng-binding"
                    ng-class="{'indent': showCcc}"
                  >手机号/邮箱</label>
                  <input
                    type="text"
                    name="username"
                    aria-labelledby="u-required u-format-error u-not-exist"
                    autocomplete="username"
                    ng-model="user.username"
                    required
                    i-input
                    i-focus
                    i-username
                    i-auto-focus
                    i-response
                    ng-class="{'indent': showCcc}"
                    class="ng-pristine ng-invalid ng-invalid-required ng-valid-name-valid"
                  />
                  <span
                    id="u-required"
                    aria-live="assertive"
                    class="warning ng-binding"
                    i-warning="form.username.$submitted &amp;&amp; form.username.$error.required"
                  >请输入手机号/邮箱</span>
                  <span
                    id="u-format-error"
                    aria-live="assertive"
                    class="warning ng-binding"
                    i-warning="form.username.$blurred &amp;&amp; form.username.$error.username"
                  >手机号/邮箱格式错误</span>
                  <span
                    id="u-not-exist"
                    aria-live="assertive"
                    class="warning ng-binding"
                    i-warning="form.username.$blurred &amp;&amp; form.username.$error.nameValid"
                  >手机号/邮箱不存在</span>
                </div>
              </li>
              <li class="password">
                <div class="input" i-animation="errAnimation.password">
                  <span class="icon">
                    <i>密码</i>
                  </span>
                  <label for="password" class="placeholder">密码</label>
                  <input
                    type="password"
                    name="password"
                    aria-labelledby="p-required p-error"
                    autocomplete="current-password"
                    ng-model="user.password"
                    required
                    ng-trim="false"
                    i-input
                    i-focus
                    i-enter="login()"
                    i-response
                    select-on="focus.password"
                    class="ng-pristine ng-invalid ng-invalid-required ng-valid-password-valid"
                  />
                  <span class="m-eye"></span>
                  <span
                    id="p-required"
                    aria-live="assertive"
                    class="warning"
                    i-warning="form.password.$submitted &amp;&amp; form.password.$error.required"
                  >请输入密码</span>
                  <span
                    id="p-error"
                    aria-live="assertive"
                    class="warning"
                    i-warning="form.password.$submitted &amp;&amp; form.password.$error.passwordValid"
                  >密码错误</span>
                </div>
              </li>
              <!-- ngIf: captchaNeeded -->
              <li class="remember" ng-class="{'notes': isEmbedNotes}">
                <!-- ngIf: !isMiniprogram -->
                <div
                  class="auto ng-binding ng-scope"
                  ng-click="remembered = !remembered"
                  ng-if="!isMiniprogram"
                >
                  <span
                    role="checkbox"
                    aria-checked="true"
                    class="checkbox checked"
                    ng-class="{'checked' : remembered}"
                  >
                    <a></a>
                  </span> 自动登录
                </div>
                <!-- end ngIf: !isMiniprogram -->
                <a class="forgotpassword ng-binding" ng-click="forgotPassword()">忘记密码</a>
                <a class="registercloud ng-binding" ng-click="toRegister()">注册</a>
              </li>
            </ul>
            <div class="btn-wrapper">
              <div
                class="btn btn-primary disabled"
                ng-class="{'disabled':form.$invalid}"
                ng-click="login()"
              >
                <a role="button">登录</a>
              </div>
            </div>
            <div class="info-wrapper clearfix">
              <ul>
                <li>
                  <!-- ngIf: !isMiniprogram -->
                  <ul class="login-three ng-scope" ng-if="!isMiniprogram">
                    <li class="text">其他账号登录：</li>
                    <li role="button" class="wechat" ng-click="wechatLogin()"></li>
                    <li role="button" class="weibo" ng-click="weiboLogin()"></li>
                    <li role="button" class="qq" ng-click="qqLogin()"></li>
                    <li role="button" class="alipay" ng-click="alipayLogin()"></li>
                  </ul>
                  <!-- end ngIf: !isMiniprogram -->
                </li>
                <li>
                  <a role="button" ng-click="switchModel()" class="ng-binding">
                    国际手机号登录
                    <span class="smartisan-icon gt"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="info-wrapper ng-hide" ng-show="is1111">
              <span>提示：为了确保账户的安全性，维护您的福袋兑换权益，请输入您的用户名和密码，点击【登录】即可兑换福袋。</span>
            </div>
          </form>
          <!-- ngIf: showCcc -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/Header2.vue";
export default {
  data() {
    return {
      msg: "登录官网"
    };
  },
  components: {
    Header2
  }
};
</script>