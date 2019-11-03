<template>
  <div>
    <mt-header title="登录官网">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="box">
      <div class="content ng-scope" ng-view ng-animate-children>
        <form
          class="login-form form-v2 ng-scope ng-pristine ng-invalid ng-invalid-required"
          name="form"
          novalidate
          autocomplete="off"
        >
          <ul class="common-form">
            <li class="username border-1p">
              <div class="input" i-animation="errAnimation.username">
                <span class="icon">
                  <i>手机号/邮箱</i>
                </span>
                <label
                  for="username"
                  class="placeholder ng-binding"
                  ng-class="{'indent': showCcc}"
                ></label>
                <input
                  type="text"
                  name="username"
                  aria-labelledby="u-required u-format-error u-not-exist"
                  autocomplete="username"
                  v-model="username"
                  required
                  i-input
                  i-focus
                  i-username
                  i-auto-focus
                  i-response
                  placeholder="手机号/邮箱"
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
                <label for="password" class="placeholder"></label>
                <input
                  type="password"
                  name="password"
                  aria-labelledby="p-required p-error"
                  autocomplete="current-password"
                  v-model="password"
                  required
                  ng-trim="false"
                  i-input
                  i-focus
                  i-enter="login()"
                  i-response
                  placeholder="密码"
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
            <li class="remember" ng-class="{'notes': isEmbedNotes}">
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
              <a class="forgotpassword ng-binding" ng-click="forgotPassword()">忘记密码</a>
              <a class="registercloud ng-binding" @click="gotoRegist">注册</a>
            </li>
          </ul>
          <div class="btn-wrapper">
            <div
              class="btn btn-primary disabled"
              ng-class="{'disabled':form.$invalid}"
              @click="login"
            >
              <a role="button">登录</a>
            </div>
          </div>
          <div class="info-wrapper clearfix">
            <ul>
              <li>
                <ul class="login-three ng-scope" ng-if="!isMiniprogram">
                  <li class="text">其他账号登录：</li>
                  <li role="button" class="wechat" ng-click="wechatLogin()"></li>
                  <li role="button" class="weibo" ng-click="weiboLogin()"></li>
                  <li role="button" class="qq" ng-click="qqLogin()"></li>
                  <li role="button" class="alipay" ng-click="alipayLogin()"></li>
                </ul>
              </li>
              <li>
                <a role="button" ng-click="switchModel()" class="ng-binding">
                  国际手机号登录
                  <span class="smartisan-icon gt"></span>
                </a>
              </li>
            </ul>
          </div>
          <!-- <div class="info-wrapper ng-hide" ng-show="is1111">
          <span>提示：为了确保账户的安全性，维护您的福袋兑换权益，请输入您的用户名和密码，点击【登录】即可兑换福袋。</span>
          </div>-->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    gotoRegist(){
      this.username = '';
      this.password = '';
      this.$router.push('regist');
    },
    login(){
      if(this.username === '' || this.password === ''){
        alert('请输入用户名或密码');
      }else{
        localStorage.setItem('username',JSON.stringify(this.username));
        localStorage.setItem('password',JSON.stringify(this.password));
        const loginUrl = 'http://localhost/login';
        let params = new URLSearchParams();
        params.append('username',this.username);
        params.append('password',this.password);
        this.axios({
          method: 'post',
          url: loginUrl,
          data: params
        }).then(res=>{
          console.log(res);
          if(res.data.status == 200){
            // localStorage.setItem('isLogin',JSON.stringify(true));
            this.setToken('isLogin',true);
            this.$store.commit('isLogin',true);
            this.$router.push('/');
          }
        })
      }
    }
  },
};
</script>
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
header {
  height: 3.2rem;
  padding: 0 10px;
  font-size: 18px;
  line-height: 20px;
}
.box {
  min-width: inherit;
  height: 100%;
  min-height: 660px;
  background-image: url('../assets/images/bg_66b2175241.jpg');
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
.common-form li {
  margin: 0 0 13.3px;
  position: relative;
}
.common-form li.username,
.auth-page .valid-question li:first-child,
.bind-password .common-form li.password {
  border-bottom: 0;
  border-radius: 6px 6px 0 0;
  margin-bottom: 0;
}
.common-form li.password,
.common-form li.username,
.common-form li .input,
.auth-page .valid-question li,
.bind-password .common-form li.password,
.bind-password .common-form li.password-repeat {
  background-color: #fff;
  border: 1px solid #d1d1d1;
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
.common-form li.username .input,
.auth-page .valid-question li .input,
.bind-password .common-form li.password .input {
  border-top: 0;
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
    -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
}

.common-form li.password .input,
.common-form li.username .input,
.auth-page .valid-question li .input,
.bind-password .common-form li.password .input,
.bind-password .common-form li.password-repeat .input {
  background: 0 0;
  border: none;
  border-top: 1px solid #ececec;
  border-radius: 0;
  box-shadow: -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset,
    1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
}
.common-form li .input {
  border-radius: 4px;
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
    -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
}
.common-form li.password,
.common-form li.username,
.common-form li .input,
.auth-page .valid-question li,
.bind-password .common-form li.password,
.bind-password .common-form li.password-repeat {
  background-color: #fff;
  border: 1px solid #d1d1d1;
}
.input {
  border: 0;
}
.input {
  height: 44px;
}
.bind-password .common-form li.password-repeat .icon,
.common-form li .icon,
.register .common-form li.password-repeat .icon {
  display: none;
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
.input .icon i {
  background: url("../assets/images/bg_icons_873c832874.png") no-repeat 11px
    10px;
  display: block;
  text-indent: -9999em;
  background-size: 192px;
}
.input .placeholder {
  color: #b2b2b2;
  font-size: 15px;
  padding: 1px 0 0;
  position: absolute;
  left: 44px;
  top: 0;
}
.bind-password .common-form li.password-repeat .placeholder,
.input .placeholder,
.register .common-form li.password-repeat .placeholder {
  line-height: 44px;
  left: 10px;
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
}
.common-form .input input {
  font-size: 15px;
}
.common-form .input input,
.common-form li.captcha .input > input,
.common-form li.username input.indent,
.common-form li.verification input {
  padding: 0 10px;
  width: 100%;
}
.input .warning {
  background: #d16d62;
  border-radius: 4px;
  color: #fff;
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
  background: linear-gradient(#ffebbd, #ffe7af);
  color: #6e5336;
  font-size: 13px;
  text-shadow: 0 -1px rgba(255, 255, 255, 0.2);
  border: 1px solid #cdbe9a;
  height: 34px;
  line-height: 37px;
  padding: 0 13px;
  -webkit-box-shadow: 0 2px 10px -4px rgba(0, 0, 0, 0.9),
    0 1px 20px -9px rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 10px -4px rgba(0, 0, 0, 0.9),
    0 1px 20px -9px rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.login-form .remember {
  margin: 16px 0 24px;
  height: 12px;
}

.common-form li {
  margin: 0 0 13.3px;
  position: relative;
}
.login-form .remember {
  margin: 14px 12px 20px;
  height: 14px;
  overflow: visible;
}
.login-form .remember {
  margin: 15px 5px 25px;
}
.common-form li {
  margin: 0 0 12px;
  overflow: hidden;
}
.login-form .remember .auto {
  color: #999;
  float: left;
  font-size: 12px;
  cursor: pointer;
  padding-left: 22px;
}
.form-v2 .info-wrapper li a,
.login-form .remember .auto,
.login-form .remember .forgotpassword,
.login-form .remember .registercloud {
  font-size: 14px;
  color: #7f7f7f;
}
form .remember .auto {
  color: #8f8f8f;
  padding-left: 30px;
}
.checkbox {
  background: url("../assets/images/checkbox.png") 0 0 no-repeat;
  float: left;
  height: 20px;
  width: 20px;
  position: relative;
  background-size: 20px;
}
.login-form .remember .auto .checkbox {
  position: absolute;
  top: -4px;
  left: -2px;
}
.checkbox.checked a {
  display: block;
}
.checkbox {
  background-position: 0 -18px;
}

.checkbox,
.checkbox a {
  background: url("../assets/images/checkbox.png") 0 2px no-repeat;
  background-image: -webkit-image-set(
    url("../assets/images/checkbox.png") 1x,
    url("../assets/images/checkbox.png") 2x
  );
}
/*  .checkbox {
    background-position: 0 -25px;
} */

.checkbox,
.checkbox a {
  background-image: url("../assets/images/checkbox.png");
  background-size: 22px auto;
  width: 22px;
  height: 22px;
}
.reg-form .btn-wrapper .agreement .checkbox,
form .remember .auto .checkbox {
  left: 0;
}
.form-v2.login-form .remember a {
  color: #787878;
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  transition: none;
}

.checkbox a {
  background-position: 0 0;
}
.login-form .remember .forgotpassword {
  position: absolute;
  right: 0;
  font-size: 12px;
}
.form-v2.login-form .remember .forgotpassword {
  float: right;
  margin-right: 3px;
}
.form-v2.login-form .remember .forgotpassword {
  margin-right: 0;
}

.form-v2 .info-wrapper li a,
.login-form .remember .auto,
.login-form .remember .forgotpassword,
.login-form .remember .registercloud {
  font-size: 14px;
  color: #7f7f7f;
}
.login-form .remember .registercloud {
  display: inline;
  position: absolute;
  right: 68px;
  font-size: 12px;
}
.form-v2.login-form .remember .registercloud {
  margin-left: 0;
  float: right;
}
.form-v2 .info-wrapper li a,
.login-form .remember .auto,
.login-form .remember .forgotpassword,
.login-form .remember .registercloud {
  font-size: 14px;
  color: #7f7f7f;
}
.login-form.form-v2 .remember .registercloud {
  right: 68px;
}
.login-form .btn-wrapper {
  position: relative;
}

.login-form .btn-wrapper {
  margin: 24px 0 12px;
}
.btn-wrapper {
  clear: both;
  margin: 48px 0 0;
}
.login-v2 .login-form .btn-wrapper {
  margin-top: 24px;
}
.login-v2 .login-form .btn-wrapper {
  margin: 30px 0 0;
}
.btn.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-primary {
  background: #4c68b0;
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.8);
  background: -webkit-linear-gradient(#6788d0, #4364bb);
  background: linear-gradient(#6788d0, #4364bb);
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
.form-v2 .btn-wrapper .btn,
.btn-wrapper .btn {
  height: 53px;
  line-height: 53px;
}

.login-form .btn {
  width: 100%;
}
.btn.disabled a {
  /* cursor: not-allowed; */
}
.btn-primary a {
  background: #81a8e4;
  background: -webkit-linear-gradient(#1256ef, #112be0);
  background: -moz-linear-gradient(#1256ef, #112be0);
  background: -ms-linear-gradient(#1256ef, #112be0);
  background: -o-linear-gradient(#1256ef, #112be0);
  background: linear-gradient(#1256ef, #112be0);
}

.btn a {
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 14px;
}
.form-v2 .btn-wrapper .btn a,
.btn-wrapper .btn a {
  font-size: 18px;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.2);
  height: 51px;
  line-height: 51px;
  border-radius: 6px;
}
.info-wrapper {
  text-align: center;
  font-size: 14px;
  margin-top: 76px;
  padding-top: 12px;
  border-top: 1px solid #e5e5e5;
  position: relative;
}
.info-wrapper,
.login-v2 .info-wrapper {
  margin: 30px 0 0;
  padding-top: 23px;
}
.mod-result .btn-wrapper,
.info-wrapper,
.login-v2 .info-wrapper {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  border-top: 1px solid #d9d9d9;
  padding-top: 24px;
}
.info-wrapper {
  margin: 14px 0 0;
  padding: 0;
  border: 0;
  box-shadow: none;
}
.login-v2 .info-wrapper {
  margin-top: 14px;
  padding-top: 0;
}

.mod-result .btn-wrapper,
.info-wrapper,
.login-v2 .info-wrapper {
  border: 0;
  box-shadow: none;
}
.login-v2 .info-wrapper {
  box-shadow: none;
}
.info-wrapper > ul > li:first-child {
  float: left;
}
.info-wrapper > ul > li {
  float: right;
}
.form-v2 .info-wrapper li,
.form-v2 .info-wrapper li a {
  color: #999;
  font-size: 12px;
  line-height: 17px;
}
.login-three {
  position: fixed;
  margin: 0 auto;
  width: 124px;
  margin-right: -62px;
  right: 50%;
  bottom: 24px;
}
.login-three li {
  width: 20px;
  height: 17px;
  margin-left: 15px;
  float: left;
  cursor: pointer;
  /* background-image: url(../img/v2/icons_c3a3154da5.png); */
  /* background-image: -webkit-image-set(url(../img/v2/icons_c3a3154da5.png) 1x,url(../img/v2/icons_c3a3154da5@2x.png) 2x); */
  background-size: 110px 17px;
  background-position: 1px 0;
  background-repeat: no-repeat;
  transition: all 1s ease;
}
.form-v2 .info-wrapper li,
.form-v2 .info-wrapper li a {
  color: #999;
  font-size: 12px;
  line-height: 17px;
}
.login-three li {
  background-image: url("../assets/images/icons_c3a3154da5.png");
  background-size: auto 40px;
  background-position: 0 0;
  width: 42px;
  height: 40px;
  margin: 0 10px;
}
.login-three li.text {
  display: none;
}
.login-three li.wechat {
  margin-left: 10px;
}

.form-v2 .info-wrapper li,
.form-v2 .info-wrapper li a {
  color: #999;
  font-size: 12px;
  line-height: 17px;
}
.login-three li.wechat {
  display: none;
}
.login-three li.weibo {
  background-position: -59px 0;
}
.login-three li.qq {
  background-position: -119px 0;
}
.login-three li.alipay {
  display: none;
}
</style>