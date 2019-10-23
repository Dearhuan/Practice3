<template>
  <div class="verify-wrap v-box-mod">
    <router-link :to="{ name: 'wechat'}" class="navigationbar_icon">
      <span class="cross-btn"></span>
    </router-link>
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
export default {
  name: 'login',
};
</script>

