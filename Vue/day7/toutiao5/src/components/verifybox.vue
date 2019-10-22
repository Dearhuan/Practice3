<template>
  <div class="verify-wrap v-box-mod">
    <a class="navigationbar_icon">
      <span class="cross-btn"></span>
    </a>
    <div class="verify-box">
      <p class="v-b-tit">登录注册更精彩</p>
      <p class="v-b-info">
        登录注册表示同意
        <a>用户协议</a>、
        <a>隐私条款</a>
      </p>
      <form>
        <div class="input-box">
          <span class="code-text">+86</span>
          <select class="box-select">
            <option value="86">中国大陆</option>
            <option value="852">香港地区</option>
            <option value="886">台湾地区</option>
            <option value="853">澳门地区</option>
            <option value="81">日本</option>
            <option value="82">韩国</option>
            <option value="65">新加坡</option>
            <option value="60">马来西亚</option>
            <option value="1">美国</option>
            <option value="1">加拿大</option>
            <option value="61">澳大利亚</option>
            <option value="44">英国</option>
            <option value="60">马来西亚</option>
            <option value="33">法国</option>
            <option value="49">德国</option>
            <option value="33">法国</option>
            <option value="7">俄罗斯</option>
            <option value="91">印度</option>
            <option value="66">泰国</option>
            <option value="55">巴西</option>
            <option value="62">印尼</option>
            <option value="855">柬埔寨</option>
            <option value="95">缅甸</option>
            <option value="673">文莱</option>
            <option value="63">菲律宾</option>
            <option value="84">越南</option>
            <option value="856">老挝</option>
            <option value="64">新西兰</option>
            <option value="39">意大利</option>
            <option value="34">西班牙</option>
          </select>
          <span class="select-icon m-font m-font-arrow-down"></span>
          <input type="text" placeholder="输入手机号" class="input-container font-20" />
          <span class="icon-cross" style="display: none;"></span>
        </div>
      </form>
      <div class="v-tip-box">
        <span class="v-font-cred"></span>
      </div>
      <a class="m-btn m-btn-block m-btn-default m-btn-blue">获取验证码</a>
      <div class="box-center">
        <a
          href="https://passport.weibo.cn/signin/login?entry=mweibo&amp;res=wel&amp;wm=3349&amp;r=https%3A%2F%2Fm.weibo.cn%2F%3Fjumpfrom%3Dweibocom"
          class="b-left"
        >用帐号密码登录</a>
      </div>
      <div class="box-bottom">
        <div class="box-title">
          <span class="text">其他登录方式</span>
        </div>
        <div class="share-icon">
          <a
            href="https://passport.weibo.com/othersitebind/authorize?entry=mweibo&amp;site=qq&amp;res=other&amp;callback=https%3A%2F%2Fm.weibo.cn%2F%3Fjumpfrom%3Dweibocom"
            class="share-qq"
          >
            <span class="icon-logo-qq"></span>
            <span class="icon-log-name">QQ</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.m-container-max[data-v-2ca4cc01] {
  background: #000;
}
.show[data-v-2ca4cc01] {
  display: block;
}
.hide[data-v-2ca4cc01] {
  display: none;
}
.page-modal[data-v-2ca4cc01] {
  height: 100%;
  width: 100%;
  position: absolute;
  background: #f8f8f8;
}
.page-modal .loading[data-v-2ca4cc01] {
  font-size: 1.1rem;
  color: #636363;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.page-modal-enter-active[data-v-2ca4cc01],
.page-modal-leave-active[data-v-2ca4cc01] {
  -webkit-transition: opacity 1s;
  transition: opacity 1s;
}
.page-modal-enter[data-v-2ca4cc01],
.page-modal-leave-to[data-v-2ca4cc01] {
  opacity: 0;
}
.loading[data-v-2ca4cc01] {
  position: relative;
  width: 12px;
  height: 12px;
  top: 46%;
  left: 46%;
  border-radius: 12px;
  -webkit-animation: loading-default-data-v-2ca4cc01 2s ease-in-out infinite;
  animation: loading-default-data-v-2ca4cc01 2s ease-in-out infinite;
}
.loading[data-v-2ca4cc01]:after {
  content: "";
  position: absolute;
  top: 0;
  left: 25px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  -webkit-animation: loading-after-data-v-2ca4cc01 2s ease-in-out infinite;
  animation: loading-after-data-v-2ca4cc01 2s ease-in-out infinite;
}
.loading[data-v-2ca4cc01]:before {
  content: "";
  position: absolute;
  top: 0;
  left: -25px;
  height: 12px;
  width: 12px;
  border-radius: 12px;
  -webkit-animation: loading-before-data-v-2ca4cc01 3s ease-in-out infinite;
  animation: loading-before-data-v-2ca4cc01 3s ease-in-out infinite;
}
@-webkit-keyframes loading-before-data-v-2ca4cc01 {
  0% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  25% {
    background-color: #1b9af4;
  }
  50% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  75% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  to {
    background-color: rgba(27, 154, 244, 0.2);
  }
}
@keyframes loading-before-data-v-2ca4cc01 {
  0% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  25% {
    background-color: #1b9af4;
  }
  50% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  75% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  to {
    background-color: rgba(27, 154, 244, 0.2);
  }
}
@-webkit-keyframes loading-default-data-v-2ca4cc01 {
  0% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  25% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  50% {
    background-color: #1b9af4;
  }
  75% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  to {
    background-color: rgba(27, 154, 244, 0.2);
  }
}
@keyframes loading-default-data-v-2ca4cc01 {
  0% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  25% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  50% {
    background-color: #1b9af4;
  }
  75% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  to {
    background-color: rgba(27, 154, 244, 0.2);
  }
}
@-webkit-keyframes loading-after-data-v-2ca4cc01 {
  0% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  25% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  50% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  75% {
    background-color: #1b9af4;
  }
  to {
    background-color: rgba(27, 154, 244, 0.2);
  }
}
@keyframes loading-after-data-v-2ca4cc01 {
  0% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  25% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  50% {
    background-color: rgba(27, 154, 244, 0.2);
  }
  75% {
    background-color: #1b9af4;
  }
  to {
    background-color: rgba(27, 154, 244, 0.2);
  }
}
.wrapper[data-v-2ca4cc01] {
  background-color: #fff;
}
.font-16[data-v-2ca4cc01] {
  font-size: 1rem;
}
.font-20[data-v-2ca4cc01] {
  font-size: 1.25rem;
}
.font-30[data-v-2ca4cc01] {
  font-size: 1.875rem;
}
.navigationbar_icon[data-v-2ca4cc01] {
  width: 1.875rem;
  height: 1.875rem;
  color: #959595;
  padding: 0.4375rem 0 0 0.625rem;
  display: block;
}
.icon-cross[data-v-2ca4cc01] {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 1.3rem;
  height: 1.3rem;
  background-size: 100%;
  background-image: url(../img/delete_icon.18f1902f.svg);
  background-repeat: no-repeat;
  vertical-align: middle;
}
.cross-btn[data-v-2ca4cc01] {
  width: 30px;
  height: 30px;
  position: absolute;
}
.cross-btn[data-v-2ca4cc01]:after,
.cross-btn[data-v-2ca4cc01]:before {
  content: "";
  position: absolute;
  background: #959595;
  height: 90%;
  width: 0.09375rem;
  left: 0.8125rem;
}
.cross-btn[data-v-2ca4cc01]:before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.cross-btn[data-v-2ca4cc01]:after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.code-cross[data-v-2ca4cc01] {
  right: auto;
}
.m-container-max[data-v-2ca4cc01],
.wrapper[data-v-2ca4cc01] {
  min-height: 100%;
}
.verify-box[data-v-2ca4cc01] {
  padding: 0 1.5rem;
}
.verify-box .m-btn-default[data-v-2ca4cc01] {
  border-radius: 1.3125rem;
  font-size: 1.0625rem;
  color: #fff;
  text-align: center;
}
.verify-box .m-btn-blue[data-v-2ca4cc01] {
  background: rgba(27, 154, 244, 0.5);
}
.verify-box .m-btn-blue-hover[data-v-2ca4cc01] {
  background: #1b9af4;
}
.verify-box .box-center[data-v-2ca4cc01] {
  margin-top: 0.9375rem;
  font-size: 0.875rem;
  color: #3c6e9e;
}
.verify-box .box-center .b-left[data-v-2ca4cc01] {
  float: left;
}
.verify-box .box-center .b-right[data-v-2ca4cc01] {
  float: right;
}
.verify-box .box-bottom[data-v-2ca4cc01] {
  position: relative;
  margin-top: 8rem;
  width: 100%;
}
.verify-box .box-bottom .box-title[data-v-2ca4cc01] {
  margin-bottom: 1.875rem;
  border-bottom: 1px solid #eee;
  position: relative;
}
.verify-box .box-bottom .box-title .text[data-v-2ca4cc01] {
  position: absolute;
  left: calc(50% - 2.75rem);
  left: -webkit-calc(50% - 2.75rem);
  top: -0.5rem;
  padding: 0 0.34375rem;
  background: #fff;
  font-size: 0.875rem;
  color: #939393;
  text-align: center;
}
.verify-box .box-bottom .share-icon[data-v-2ca4cc01] {
  text-align: center;
}
.verify-box .box-bottom .share-icon .icon-log-name[data-v-2ca4cc01] {
  display: block;
  margin-top: 0.3125rem;
  font-size: 0.6875rem;
  color: #939393;
}
.form-info-box[data-v-2ca4cc01] {
  margin-top: 3.75rem;
}
.form-info-box .input-box[data-v-2ca4cc01] {
  margin: 0;
}
.v-close[data-v-2ca4cc01] {
  padding-top: 0.625rem;
}
.v-b-info[data-v-2ca4cc01] {
  font-size: 0.9375rem;
  line-height: 1.3125rem;
  color: #636363;
}
.v-b-tit[data-v-2ca4cc01],
.v-s-tit[data-v-2ca4cc01] {
  text-align: left;
}
.v-b-tit[data-v-2ca4cc01] {
  padding: 1.375rem 0 0.625rem;
  font-size: 1.875rem;
  line-height: 2.625rem;
  color: #000;
}
.v-s-tit[data-v-2ca4cc01] {
  font-size: 0.9375rem;
  color: #636363;
}
.v-s-tcon[data-v-2ca4cc01] {
  display: inline-block;
  text-align: left;
}
.v-tip-desc[data-v-2ca4cc01] {
  text-align: center;
  font-size: 0.875rem;
  color: #939393;
  line-height: 1.2;
  padding-top: 0.625rem;
}
.v-tip-desc span[data-v-2ca4cc01] {
  text-align: center;
  display: inline-block;
}
.form-box[data-v-2ca4cc01] {
  margin-top: 3.4375rem;
}
.form-box + .m-btn[data-v-2ca4cc01] {
  margin-top: 1.4375rem;
}
.code-text[data-v-2ca4cc01] {
  position: absolute;
  top: 0.9375rem;
}
.box-select[data-v-2ca4cc01] {
  width: 3.2rem;
  height: auto;
  color: transparent;
  margin-top: 0.6875rem;
  font-size: 1rem;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  background: transparent;
}
.select-icon[data-v-2ca4cc01] {
  margin-left: -0.8rem;
  top: 1.05rem;
  position: absolute;
  font-size: 0.8rem;
  color: #5a5a5a;
}
.input-box[data-v-2ca4cc01] {
  margin-top: 3.75rem;
  height: 2.8125rem;
  position: relative;
}
.input-box[data-v-2ca4cc01]:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(50%, #ddd),
    color-stop(50%, transparent),
    to(transparent)
  );
  background-image: linear-gradient(
    180deg,
    #ddd 50%,
    transparent 0,
    transparent
  );
  background-image: -webkit-linear-gradient(
    180deg,
    #ddd 50%,
    transparent 0,
    transparent
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.5, #ddd),
    color-stop(0.5, transparent),
    to(transparent)
  );
  background-position: 0 0;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  bottom: 0;
  left: 0;
}
.input-container[data-v-2ca4cc01] {
  display: inline-block;
  color: #000;
  letter-spacing: 0.2rem;
  height: 2rem;
  width: 58%;
  border: 0;
  margin-left: 0.3rem;
}
.input-container[data-v-2ca4cc01]::-webkit-input-placeholder {
  color: #bdbdbd;
  font-size: 1rem;
  letter-spacing: 0;
  line-height: 1.8rem;
}
.number-code[data-v-2ca4cc01] {
  color: #000;
  border: none;
  letter-spacing: 0.6rem;
  text-align: left;
  display: inline-block;
  width: 46%;
  margin-top: 0.53125rem;
}
.number-code[data-v-2ca4cc01]::-webkit-input-placeholder {
  color: #bdbdbd;
  font-size: 1rem;
  vertical-align: bottom;
}
.number-code[data-v-2ca4cc01]:-ms-input-placeholder {
  color: #bdbdbd;
  font-size: 1rem;
  letter-spacing: 0.069375rem;
  vertical-align: bottom;
}
.number-code[data-v-2ca4cc01]::-ms-input-placeholder {
  color: #bdbdbd;
  font-size: 1rem;
  letter-spacing: 0.069375rem;
  vertical-align: bottom;
}
.number-code[data-v-2ca4cc01]::placeholder {
  color: #bdbdbd;
  font-size: 1rem;
  letter-spacing: 0.069375rem;
  vertical-align: bottom;
}
.v-desc[data-v-2ca4cc01] {
  padding-top: 1.25rem;
  font-size: 0.875rem;
}
.v-desc span[data-v-2ca4cc01] {
  color: #939393;
}
.v-desc a[data-v-2ca4cc01] {
  color: #507daf;
}
.v-text-center[data-v-2ca4cc01] {
  text-align: center;
}
.v-text-right[data-v-2ca4cc01] {
  text-align: right;
}
.v-box-right[data-v-2ca4cc01] {
  position: absolute;
  right: 0;
  top: 45%;
  font-size: 0.8rem;
  color: #939393;
  display: inline-block;
}
.v-box-right a[data-v-2ca4cc01] {
  display: block;
}
.info-text[data-v-2ca4cc01] {
  color: #507daf;
}
.count-text[data-v-2ca4cc01] {
  color: #939393;
}
.input-tit[data-v-2ca4cc01] {
  font-size: 1rem;
  color: #333;
}
.verify-wrap[data-v-2ca4cc01] {
  height: 100%;
}
.verify-wrap .verify-box[data-v-2ca4cc01] {
  position: relative;
  height: 100%;
  background: #fff;
}
.v-box-mod[data-v-2ca4cc01] {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.v-tip-box[data-v-2ca4cc01] {
  font-size: 0.875rem;
  height: 1.25rem;
  padding-top: 0.4375rem;
}
.v-tip-box + .m-btn[data-v-2ca4cc01] {
  margin-top: 2.1875rem;
}
.v-font-cred[data-v-2ca4cc01] {
  line-height: 1.25rem;
  color: #e14123;
}
.jump-page[data-v-2ca4cc01] {
  height: 43.75rem;
  width: 100%;
  margin-top: 3.125rem;
}
.account-page[data-v-2ca4cc01] {
  margin-top: 0;
}
.nav-fixed[data-v-2ca4cc01] {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 2.75rem;
  background: #f8f8f8;
}
.iframe-wrap[data-v-2ca4cc01] {
  background: #fff;
}
.wrap-login[data-v-2ca4cc01] {
  background: #f8f8f8;
}
</style>