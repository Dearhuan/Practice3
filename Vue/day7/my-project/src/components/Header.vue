<template>
  <div class="lite-topbar main-top">
    <div class="nav-top">
      <div class="nav-left unlogin-logo"></div>
      <a class="nav-search unlogin-search">
        <aside>
          <label @click="navToSearch" class="m-search">
            <i class="m-font m-font-search"></i>
            <div class="m-text-cut">大家都在搜：#师傅回应咏春大师74秒被KO#</div>
          </label>
        </aside>
      </a>
      <div class="nav-right">
        <div class="lite-iconf lite-iconf-releas"></div>
      </div>
    </div>
    <div class="nav-main">
      <div class="m-box">
        <div class="m-box-col inner-box">
          <div class="scroll-box slide-container">
            <div class="slide-wrap">
              <ul class="nav_item">
                <li class="item_li cur">
                  <span>
                    热门
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    新鲜事
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    同城
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    搞笑
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    情感
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    明星
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    社会
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    数码
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    体育
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    汽车
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    电影
                    <em></em>
                  </span>
                </li>
                <li class="item_li">
                  <span>
                    游戏
                    <em></em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="nav-plus m-box-center m-box-center-a">
          <i class="m-font m-font-arrow-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navToSearch() {
      this.$router.push({
        name: 'search'
      })
    }
  }
}
</script>