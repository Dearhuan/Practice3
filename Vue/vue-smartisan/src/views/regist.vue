<template>
  <div>
    <mt-header title="注册 Smartisan ID">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="box">
      <div class="content ng-scope" ng-view ng-animate-children>
        <form
          class="reg-form ng-scope ng-pristine ng-invalid ng-invalid-required"
          name="form"
          novalidate
          autocomplete="off"
        >
          <ul class="common-form">
            <li class="country-region">
              <div class="input">
                <span class="icon">
                  <i>国家和地区</i>
                </span>
                <span class="cr">国家和地区</span>
                <span
                  role="button"
                  class="country ng-binding"
                  title="中国"
                  ng-click="showList($event)"
                  ng-bind="country"
                >中国</span>
              </div>
            </li>
            <li class="username">
              <div class="input" i-animation="errAnimation.mobile">
                <span class="icon">
                  <i>手机号</i>
                </span>
                <span class="ccc ng-binding" ng-bind="ccc">+86</span>
                <label for="mobile" class="placeholder indent">手机号</label>
                <input
                  type="text"
                  name="mobile"
                  aria-labelledby="m-required m-format-error m-registered"
                  ng-model="user.mobile"
                  required
                  i-input
                  i-focus
                  i-mobile
                  i-auto-focus
                  i-response
                  ng-blur="validateMobile()"
                  class="indent ng-pristine ng-invalid ng-invalid-required ng-valid-mobile-registered ng-valid-mobile"
                />
                <span
                  id="m-required"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.mobile.$submitted &amp;&amp; form.mobile.$error.required"
                >请输入手机号</span>
                <span
                  id="m-format-error"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.mobile.$blurred &amp;&amp; form.mobile.$error.mobile"
                >手机号格式错误</span>
                <span
                  id="m-registered"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.mobile.$blurred &amp;&amp; form.mobile.$error.mobileRegistered"
                >该手机已经注册</span>
              </div>
            </li>
            <!-- ngIf: captchaNeeded -->
            <li class="verification">
              <div class="input" i-animation="errAnimation.verification">
                <span class="icon">
                  <i>短信验证码</i>
                </span>
                <label for="verification" class="placeholder">短信验证码</label>
                <input
                  type="text"
                  name="verification"
                  aria-labelledby="v-required v-error v-error2 v-again"
                  ng-model="user.verification"
                  required
                  i-input
                  i-focus
                  limit-length="6"
                  i-response
                  ng-blur="validateMobileCaptcha()"
                  class="ng-pristine ng-invalid ng-invalid-required ng-valid-mobile-captcha-valid ng-valid-mobile-captcha-reload"
                />
                <span
                  id="v-required"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.verification.$submitted &amp;&amp; form.verification.$error.required"
                >请输入验证码</span>
                <span
                  id="v-error"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.verification.$blurred &amp;&amp; form.verification.$error.limitlength"
                >验证码错误</span>
                <span
                  id="v-error2"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.verification.$blurred &amp;&amp; form.verification.$error.mobileCaptchaValid"
                >验证码错误</span>
                <span
                  id="v-again"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.verification.$blurred &amp;&amp; form.verification.$error.mobileCaptchaReload"
                >请重新获取验证码</span>
              </div>
              <div
                class="btn btn-default disabled"
                ng-class="{disabled: form.mobile.$invalid || form.captcha.$invalid || captchaSubmitted}"
                ng-show="showBtn"
              >
                <a role="button" ng-click="resend()">获取验证码</a>
              </div>
              <!-- <div class="btn btn-default disabled ng-hide" ng-show="!showBtn">
                <a role="button">
                  重新发送
                  <b class="ng-binding"></b>
                </a>
              </div> -->
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
                  id="password"
                  aria-labelledby="p-required p-format-error p-format"
                  ng-model="user.password"
                  required
                  i-input
                  i-focus
                  i-password
                  ng-trim="false"
                  ng-focus="needRePassword = true"
                  autocomplete="off"
                  class="ng-pristine ng-invalid ng-invalid-required"
                />
                <span class="m-eye"></span>
                <span
                  id="p-required"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.password.$submitted &amp;&amp; form.password.$error.required"
                >请输入密码</span>
                <!-- ngIf: !isMobile -->
                <!-- ngIf: isMobile -->
                <span
                  id="p-format"
                  aria-live="assertive"
                  ng-if="isMobile"
                  class="warning minWidth ng-scope"
                  i-warning="form.password.$blurred &amp;&amp; form.password.$error.password"
                >密码长度 6~16 位，数字、字母和符号至少包含两种</span>
                <!-- end ngIf: isMobile -->
              </div>
              <div
                class="tips"
                i-show="form.password.$focused || password_mousedown"
                i-label="password"
                style="opacity: 0; display: none;"
              >
                <span class="delta"></span>
                <span class="deltapatch"></span>
                <span class="warningicon"></span>
                <div class="verifycon">
                  <p>密码长度 6~16 位，数字、字母和符号至少包含两种</p>
                </div>
              </div>
            </li>
            <li class="password-repeat" slide-down-register-repeat="needRePassword">
              <div class="input" i-animation="errAnimation.repassword">
                <span class="icon">
                  <i>重复密码</i>
                </span>
                <label for="repassword" class="placeholder">重复密码</label>
                <input
                  type="password"
                  autocomplete="off"
                  name="repassword"
                  id="repassword"
                  aria-labelledby="rp-required rp-format-error rp-format rp-not-same"
                  ng-model="user.repassword"
                  required
                  i-input
                  i-focus
                  i-password-format
                  i-repassword
                  ng-trim="false"
                  i-enter="register()"
                  class="ng-pristine ng-invalid ng-invalid-required"
                />
                <span
                  id="rp-required"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.repassword.$submitted &amp;&amp; form.repassword.$error.required"
                >请重复输入密码</span>
                <!-- ngIf: !isMobile -->
                <!-- ngIf: isMobile -->
                <span
                  id="rp-format"
                  aria-live="assertive"
                  ng-if="isMobile"
                  class="warning minWidth ng-scope"
                  i-warning="form.repassword.$blurred &amp;&amp; form.repassword.$error.pwdFormat"
                >密码长度 6~16 位，数字、字母和符号至少包含两种</span>
                <!-- end ngIf: isMobile -->
                <span
                  id="rp-not-same"
                  aria-live="assertive"
                  class="warning"
                  i-warning="form.repassword.$blurred &amp;&amp; form.repassword.$error.repassword"
                >两次密码输入不一致</span>
              </div>
              <div
                class="tips"
                i-show="form.repassword.$focused || repassword_mousedown"
                i-label="repassword"
                style="opacity: 0; display: none;"
              >
                <span class="delta"></span>
                <span class="deltapatch"></span>
                <span class="warningicon"></span>
                <div class="verifycon">
                  <p>密码长度 6~16 位，数字、字母和符号至少包含两种</p>
                </div>
              </div>
            </li>
          </ul>
          <div class="btn-wrapper">
            <p class="agreement" ng-click="agreed = !agreed" i-animation="animationTip">
              <span
                role="checkbox"
                aria-checked="false"
                class="checkbox"
                ng-class="{checked : agreed}"
              >
                <a></a>
              </span>我已阅读并同意遵守
              <a href="https://www.smartisan.com/support/#/agreement" target="_blank">法律声明</a> 和
              <a href="https://www.smartisan.com/support/#/privacy" target="_blank">隐私条款</a>
            </p>
            <div
              class="btn btn-primary disabled"
              ng-class="{'disabled':form.$invalid}"
              ng-show="!clicked"
              ng-click="register()"
            >
              <a role="button">注册</a>
            </div>
           <!--  <div class="btn btn-primary ng-hide" ng-show="clicked">
              <a>
                <span class="btn-loading"></span>
              </a>
            </div> -->
            <p class="tologin">
              <a @click="gotoLogin">
                如果您已拥有 Smartisan ID，则可在此
                <span>登录</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    gotoLogin(){
      this.$router.push('login');
    }
  },
};
</script>

<style scoped>
header {
  height: 3.2rem;
  padding: 0 10px;
}
.box {
  min-width: inherit;
  height: 100%;
  min-height: 660px;
  background-image: url("../assets/images/bg_66b2175241.jpg");
}
.content {
  margin: 0px 12px 0;
  padding: 1rem 0 0 0;
}
ol,
ul {
  list-style: none;
}
a,
button,
div,
img,
input,
span,
textarea {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
ol,
ul {
  list-style: none;
}
.common-form li {
  margin: 0 0 13.3px;
  position: relative;
}
.common-form li {
  margin: 0 0 12px;
  overflow: hidden;
}
.input {
  border: 1px solid #c2c3c6;
  border-radius: 6px;
  height: 33px;
  line-height: 33px;
  opacity: 1 !important;
  overflow: hidden;
  position: relative;
}
.common-form li .input {
  border-radius: 4px;
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
    -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
}

.login .common-form li.password,
.login .common-form li.username,
.common-form li .input,
.auth-page .valid-question li,
.bind-password .common-form li.password,
.bind-password .common-form li.password-repeat {
  background-color: #fff;
  border: 1px solid #d1d1d1;
}
.input {
  height: 44px;
}
.input .icon {
  background: url("../assets/images/bg_repeat_x_e6541e8c57.png") repeat-x;
  border-radius: 6px 0 0 6px;
  border-right: 1px solid #d7d7d7;
  width: 32px;
  position: absolute;
  top: 0;
  left: 0;
}
.bind-password .common-form li.password-repeat .icon,
 .common-form li .icon,
.register .common-form li.password-repeat .icon {
  display: none;
}
.input .icon i {
  background: url("../assets/images/bg_icons_873c832874.png") no-repeat 11px
    10px;
  display: block;
  text-indent: -9999em;
  background-size: 192px;
}
.common-form li.country-region .icon i {
  background-position: -231px 10px;
}
.common-form li.country-region .cr {
  position: absolute;
  left: 10px;
  line-height: 44px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
}
.common-form li.country-region .country {
    position: absolute;
    right: 10px;
    font-size: 15px;
    line-height: 44px;
    display: inline-block;
    max-width: 76px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 20px;
    text-align: right;
    background-image: url('../assets/images/ichange.png');
    background-size: auto 9px;
    background-repeat: no-repeat;
    background-position: right center;
    cursor: pointer;
    z-index: 100;
}
.input {
    border: 1px solid #C2C3C6;
    border-radius: 6px;
    height: 33px;
    line-height: 33px;
    opacity: 1!important;
    overflow: hidden;
    position: relative;
}
 .common-form li .input {
    border-radius: 4px;
    box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
}

.login .common-form li.password, .login .common-form li.username,  .common-form li .input, .auth-page .valid-question li, .bind-password .common-form li.password, .bind-password .common-form li.password-repeat {
    background-color: #fff;
    border: 1px solid #d1d1d1;
}
 .input {
    height: 44px;
}
.common-form li.username .ccc {
    position: absolute;
    left: 32px;
    display: inline-block;
    width: 55px;
    text-align: center;
}
 .common-form li.username .ccc {
    left: 0;
    line-height: 44px;
}
.input .placeholder {
    color: #b2b2b2;
    font-size: 15px;
    padding: 1px 0 0;
    position: absolute;
    left: 44px;
    top: 0;
}
.bind-password .common-form li.password-repeat .placeholder,  .input .placeholder, .register .common-form li.password-repeat .placeholder {
    line-height: 44px;
    left: 10px;
}
 .common-form li.username .placeholder.indent {
    left: 55px;
}
.input input {
    background: 0 0;
    border: 0;
    box-sizing: border-box;
    font-size: 14px;
    padding: 0 15px 0 44px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
} .input input {
    height: 44px;
} .common-form .input input {
    font-size: 15px;
} .common-form li.username input.indent {
    padding-left: 55px;
}
 .common-form .input input,  .common-form li.captcha .input>input,  .common-form li.username input.indent,  .common-form li.verification input {
    padding: 0 10px;
    width: 100%;
}
.bind-account .common-form li.username input.indent, .modify-mobile .valid-user li.username input.indent, .register .common-form li.username input.indent {
    top: auto;
}
.input .warning {
    background: #d16d62;
    border-radius: 4px;
    color: #FFF;
    display: none;
    font-size: 12px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    opacity: 0;
    padding: 0 8px;
    position: absolute;
    top: 6px;
    right: 8px;
}
 .input .warning {
    position: fixed;
    top: auto;
    bottom: 48px;
    left: 50%;
    right: auto;
    width: auto;
    transform: translateX(-50%);
    text-align: center;
    background: #ffe8b4;
    background: linear-gradient(#ffebbd,#ffe7af);
    color: #6e5336;
    font-size: 13px;
    text-shadow: 0 -1px rgba(255,255,255,.2);
    border: 1px solid #cdbe9a;
    height: 34px;
    line-height: 37px;
    padding: 0 13px;
    -webkit-box-shadow: 0 2px 10px -4px rgba(0,0,0,.9), 0 1px 20px -9px rgba(0,0,0,.7);
    box-shadow: 0 2px 10px -4px rgba(0,0,0,.9), 0 1px 20px -9px rgba(0,0,0,.7);
    z-index: 100;
}
 .common-form li.captcha .input,  .common-form li.verification .input {
    width: 60.6%;
}
.common-form li.verification .icon i {
    background-position: -109px 10px;
}
.btn.disabled {
    cursor: not-allowed;
    opacity: .6;
}
.btn-default {
    background: #96989C;
}
.btn {
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
    height: 33px;
    line-height: 34px;
    overflow: hidden;
    text-align: center;
    width: 153px;
}
.common-form .verification .btn-default {
    width: 28.3333%;
    position: absolute;
    top: 0;
    right: 0;
}
 .common-form li.verification .btn-default {
    width: 130px;
    box-shadow: none;
}
 .common-form li.verification .btn-default {
    height: 46px;
    line-height: 46px;
    background: 0 0;
    border: 1px solid #d1d1d1;
}
 .common-form li.captcha .tips-verifycon,  .common-form li.verification .btn-default {
    width: 36%;
    box-sizing: border-box;
}
 .common-form .verification .btn-default a,  .common-form .verification .btn-default a:hover {
    font-size: 14px;
    color: #000;
    background: #CACDD1;
    background: -webkit-linear-gradient(#fcfcfc,#f7f7f7);
    background: -moz-linear-gradient(#fcfcfc,#f7f7f7);
    background: -ms-linear-gradient(#fcfcfc,#f7f7f7);
    background: -o-linear-gradient(#fcfcfc,#f7f7f7);
    background: linear-gradient(#fcfcfc,#f7f7f7);
    box-shadow: none;
}
.bind-account .reg-form .btn-wrapper, .bind-password .reg-form .btn-wrapper,  .btn-wrapper {
    margin: 0;
}
.reg-form .btn-wrapper .agreement {
    cursor: pointer;
    margin: 20px 0 0;
    position: relative;
}

.reg-form .btn-wrapper p {
    color: #7f7f7f;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
}
 .reg-form .btn-wrapper .agreement {
    text-align: left;
    margin: 10px 0 20px;
    padding: 0 11px;
}
 .reg-form .btn-wrapper .agreement .checkbox {
    top: -2px;
    left: 24px;
}
 .checkbox {
    background-position: 0 -18px;
}
.checkbox {
    background: url('../assets/images/checkbox.png') 0 0 no-repeat;
    float: left;
    height: 20px;
    width: 20px;
    position: relative;
    background-size: 20px;
}

 .checkbox,  .checkbox a {
    background-image: url('../assets/images/checkbox.png');
    background-size: 22px auto;
    width: 22px;
    height: 22px;
}
 .reg-form .btn-wrapper .agreement .checkbox {
    margin-right: 8px;
}
 .reg-form .btn-wrapper .agreement .checkbox,  form .remember .auto .checkbox {
    left: 0;
}
a {
    color: #5079d9;
    cursor: pointer;
    text-decoration: none;
    -moz-transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
.btn.disabled {
    cursor: not-allowed;
    opacity: .6;
}
.btn-primary {
    background: #4C68B0;
    box-shadow: 0 1px 1px -1px rgba(0,0,0,.8);
    background: -webkit-linear-gradient(#6788d0,#4364bb);
    background: linear-gradient(#6788d0,#4364bb);
    padding: 1px;
    box-sizing: border-box;
}
.btn {
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
    height: 33px;
    line-height: 34px;
    overflow: hidden;
    text-align: center;
    width: 153px;
}
.form .btn-wrapper .btn,  .btn-wrapper .btn {
    height: 53px;
    line-height: 53px;
}

.reg-form .btn-wrapper .btn {
    width: 100%;
}
.btn.disabled a {
    cursor: not-allowed;
}

.btn-primary a {
    background: #81A8E4;
    background: -webkit-linear-gradient(#6f94e8,#5178df);
    background: -moz-linear-gradient(#6f94e8,#5178df);
    background: -ms-linear-gradient(#6f94e8,#5178df);
    background: -o-linear-gradient(#6f94e8,#5178df);
    background: linear-gradient(#6f94e8,#5178df);
}
.btn a {
    color: #FFF;
    cursor: pointer;
    display: block;
    font-size: 14px;
}
.form .btn-wrapper .btn a,  .btn-wrapper .btn a {
    font-size: 18px;
    text-shadow: 0 -1px rgba(0,0,0,.2);
    height: 51px;
    line-height: 51px;
    border-radius: 6px;
}
 .reg-form .btn-wrapper .tologin {
    margin: 35px 0 0;
    padding-bottom: 20px;
}
.reg-form .btn-wrapper .tologin a {
    color: #7f7f7f;
    display: block;
}
 .reg-form .btn-wrapper .tologin a span {
    background: 0 0;
    color: #5079d9;
    margin: 0;
    padding: 0 4px;
    border-radius: 0;
}
</style>