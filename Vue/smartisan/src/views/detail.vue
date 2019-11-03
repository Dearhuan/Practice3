<template>
  <div>
    <mt-header :title="skuTitle">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <section _ngcontent-c0 class="main-wrapper is-header-shown">
      <router-outlet _ngcontent-c0></router-outlet>
      <ng-component _nghost-c8 class="ng-tns-c8-3">
        <header-tab _ngcontent-c8 class="ng-tns-c8-3" _nghost-c10>
          <div _ngcontent-c10 class="fix-header-tabbox box-line">
            <ul _ngcontent-c10 class="box-border">
              <li _ngcontent-c10 class="box-line line-vertical active">
                <span _ngcontent-c10>商品</span>
                <div _ngcontent-c10 class="active-area"></div>
              </li>
              <li _ngcontent-c10 class="box-line line-vertical">
                <span _ngcontent-c10>详情</span>
                <div _ngcontent-c10 class="active-area"></div>
              </li>
              <li _ngcontent-c10 class="box-line line-vertical">
                <span _ngcontent-c10>参数</span>
                <div _ngcontent-c10 class="active-area"></div>
              </li>
              <li _ngcontent-c10 class="box-line line-vertical">
                <span _ngcontent-c10>推荐</span>
                <div _ngcontent-c10 class="active-area"></div>
              </li>
            </ul>
          </div>
        </header-tab>

        <div
          _ngcontent-c8
          class="item ng-tns-c8-3 ng-trigger ng-trigger-boardContainer"
          id="section-1"
        >
          <section _ngcontent-c8 class="section-floor banner">
            <item-bannerx
              _ngcontent-c8
              bannerheight="80vw"
              bannerwidth="100%"
              _nghost-c12
              class="ng-tns-c8-3"
            >
              <ul _ngcontent-c12 class="item-banner-container" style="height: 80vw; width: 100%;">
                <swiper :options="swiperOption" ref="mySwiper">
                  <swiper-slide v-for="(item, index) in res.ali_images" :key="index">
                    <img :src="item" alt />
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </ul>
            </item-bannerx>
          </section>
          <item-overview _ngcontent-c8 class="ng-tns-c8-3" _nghost-c13>
            <div _ngcontent-c13 class="min-font-12px">
              <section _ngcontent-c13 class="section-floor item-content">
                <div _ngcontent-c13 class="item-titlebox box-line">
                  <div _ngcontent-c13 class="title-content">
                    <h4 _ngcontent-c13>{{res.skuTitle}}</h4>
                    <p _ngcontent-c13></p>

                    <div _ngcontent-c13 class="price">
                      <i>¥</i>
                      <span>{{res.originalPrice}}</span>
                    </div>

                    <div _ngcontent-c13 class="price">
                      <div _ngcontent-c13 class="postage-price">满 99 元包邮</div>
                    </div>
                  </div>
                </div>

                <promotions-message _ngcontent-c13 _nghost-c25>
                  <section _ngcontent-c25 class="activities-wrapper clearfix">
                    <div _ngcontent-c25 class="activities">
                      <span _ngcontent-c25 class="activities-title">优惠信息</span>
                      <div _ngcontent-c25 class="activities-list">
                        <article _ngcontent-c25 class="activities-item link-item">
                          <figure _ngcontent-c25 class="tag-wrapper">
                            <span _ngcontent-c25 class="tag tag-red">满减</span>
                          </figure>

                          <label _ngcontent-c25>
                            <font
                              _ngcontent-c25
                              class="special-num-words"
                            >{{res.promotionList[1]?res.promotionList[1].title:'暂无满减活动'}}</font>

                            <a _ngcontent-c25 href="//www.smartisan.com/spromotion/2559">
                              <i _ngcontent-c25 class="arrow"></i>
                            </a>
                          </label>
                        </article>

                        <article _ngcontent-c25 class="activities-item">
                          <figure _ngcontent-c25 class="tag-wrapper">
                            <span _ngcontent-c25 class="tag tag-red">领券</span>
                          </figure>

                          <div _ngcontent-c25 class="couponItem">
                            <label _ngcontent-c25>【APP专享】10元锤子商城通用优惠券</label>
                            <div _ngcontent-c25>
                              <span _ngcontent-c25>1&nbsp;个优惠券</span>
                            </div>
                            <i _ngcontent-c25 class="arrow"></i>
                          </div>
                        </article>
                      </div>
                    </div>
                  </section>
                </promotions-message>
              </section>
              <section _ngcontent-c13 class="section-floor item-content">
                <div _ngcontent-c13 class="item-box-column box-line specs">
                  <h6 _ngcontent-c13>已选版本</h6>
                  <div _ngcontent-c13 class="item-box">
                    <p _ngcontent-c13>
                      <span _ngcontent-c13 class="attr-name">尺码：</span>
                      <span _ngcontent-c13 class="attr-value">S</span>
                    </p>
                    <p _ngcontent-c13>
                      <span _ngcontent-c13 class="attr-name">颜色：</span>
                      <span _ngcontent-c13 class="attr-value">白</span>
                    </p>

                    <p _ngcontent-c13>
                      <span _ngcontent-c13 class="attr-name">数量：</span>
                      <span _ngcontent-c13 class="attr-value">1</span>
                    </p>
                  </div>
                </div>
                <div _ngcontent-c13 class="item-instruction"></div>
              </section>
            </div>
          </item-overview>

          <item-detail _ngcontent-c8 class="ng-tns-c8-3" _nghost-c15>
            <section _ngcontent-c15 class="section-floor detail" id="section-2">
              <div _ngcontent-c15 class="title-header box-line">
                <div _ngcontent-c15 class="title-wrapper">
                  <h2 _ngcontent-c15>商品详情</h2>
                </div>
              </div>

              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_0/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_1/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_2/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_3/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_4/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_5/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_6/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_7/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
              <img
                _ngcontent-c15
                alt
                src="https://resource.smartisan.com/resource/9350cd75bbc40298a6391fb55071a0d3.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_8/format,webp"
                style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
              />
            </section>
          </item-detail>
          <item-specs _ngcontent-c8 class="ng-tns-c8-3" _nghost-c16>
            <section _ngcontent-c16 class="section-floor item-specs" id="section-3">
              <div _ngcontent-c16 class="title-header box-line">
                <div _ngcontent-c16 class="title-wrapper">
                  <h2 _ngcontent-c16>技术参数</h2>
                </div>
              </div>

              <div _ngcontent-c16 class="specs-main">
                <ul _ngcontent-c16>
                  <li _ngcontent-c16 class="specs-item">
                    <ul _ngcontent-c16>
                      <li _ngcontent-c16 class="box-line">
                        <h4 _ngcontent-c16></h4>
                        <span _ngcontent-c16></span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <section _ngcontent-c16 class="section-floor item-content">
              <div _ngcontent-c16 class="title-header box-line">
                <div _ngcontent-c16 class="title-wrapper">
                  <h2 _ngcontent-c16>服务说明</h2>
                </div>
              </div>
              <div _ngcontent-c16 class="item-box-column box-line service-note">
                <ul _ngcontent-c16>
                  <li _ngcontent-c16 class="return-policy">7 天无理由退货</li>

                  <li _ngcontent-c16 class="exchange-policy">15 天质量问题换货</li>
                </ul>
              </div>
            </section>
          </item-specs>
          <item-recommendation _ngcontent-c8 class="ng-tns-c8-3" _nghost-c17>
            <section _ngcontent-c17 class="section-floor item-recommendation" id="section-4">
              <div _ngcontent-c17 class="title-header box-line">
                <div _ngcontent-c17 class="title-wrapper">
                  <h2 _ngcontent-c17>相关推荐</h2>
                </div>
              </div>

              <div _ngcontent-c17 class="container">
                <div _ngcontent-c17 class="item-wrapper">
                  <sku-item-normal _ngcontent-c17 _nghost-c34>
                    <div _ngcontent-c34 class="product-box-item">
                      <a _ngcontent-c34 class="item-img box-border">
                        <img
                          _ngcontent-c34
                          alt
                          src="https://resource.smartisan.com/resource/6ff92d05a3bfab4fad489ca04d3eea5a.png?x-oss-process=image/resize,w_342/format,webp"
                          style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
                        />

                        <div _ngcontent-c34 class="mask"></div>
                      </a>
                      <div _ngcontent-c34 class="item-content">
                        <h4 _ngcontent-c34>畅呼吸智能空气净化器 · 标准版</h4>
                        <p _ngcontent-c34>超强净化能力、超低噪音、超长寿命</p>
                        <goods-price _ngcontent-c34 _nghost-c37>
                          <p _ngcontent-c37 class="price">
                            <i _ngcontent-c37>¥</i>
                            <span _ngcontent-c37>2,799.00</span>
                          </p>
                        </goods-price>
                      </div>
                    </div>
                  </sku-item-normal>
                </div>
                <div _ngcontent-c17 class="item-wrapper">
                  <sku-item-normal _ngcontent-c17 _nghost-c34>
                    <div _ngcontent-c34 class="product-box-item">
                      <a _ngcontent-c34 class="item-img box-border">
                        <img
                          _ngcontent-c34
                          alt
                          src="https://resource.smartisan.com/resource/13e91511f6ba3227ca5378fd2e93c54b.png?x-oss-process=image/resize,w_342/format,webp"
                          style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
                        />

                        <div _ngcontent-c34 class="mask"></div>
                      </a>
                      <div _ngcontent-c34 class="item-content">
                        <h4 _ngcontent-c34>坚果 3</h4>
                        <p _ngcontent-c34>漂亮得不像实力派</p>
                        <goods-price _ngcontent-c34 _nghost-c37>
                          <p _ngcontent-c37 class="price">
                            <i _ngcontent-c37>¥</i>
                            <span _ngcontent-c37>1,299.00</span>
                          </p>
                        </goods-price>
                      </div>
                    </div>
                  </sku-item-normal>
                </div>
                <div _ngcontent-c17 class="item-wrapper">
                  <sku-item-normal _ngcontent-c17 _nghost-c34>
                    <div _ngcontent-c34 class="product-box-item">
                      <a _ngcontent-c34 class="item-img box-border">
                        <img
                          _ngcontent-c34
                          alt
                          src="https://resource.smartisan.com/resource/b07b9765e272f866da6acda4ee107d88.png?x-oss-process=image/resize,w_342/format,webp"
                          style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
                        />

                        <div _ngcontent-c34 class="mask"></div>
                      </a>
                      <div _ngcontent-c34 class="item-content">
                        <h4 _ngcontent-c34>坚果 Pro 2S</h4>
                        <p _ngcontent-c34>双系统，无限屏</p>
                        <goods-price _ngcontent-c34 _nghost-c37>
                          <p _ngcontent-c37 class="price">
                            <i _ngcontent-c37>¥</i>
                            <span _ngcontent-c37>1,998.00</span>
                          </p>
                        </goods-price>
                      </div>
                    </div>
                  </sku-item-normal>
                </div>
                <div _ngcontent-c17 class="item-wrapper">
                  <sku-item-normal _ngcontent-c17 _nghost-c34>
                    <div _ngcontent-c34 class="product-box-item">
                      <a _ngcontent-c34 class="item-img box-border">
                        <img
                          _ngcontent-c34
                          alt
                          src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_342/format,webp"
                          style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
                        />

                        <colorful-tag _ngcontent-c34 _nghost-c36>
                          <span _ngcontent-c36 class="colorful-tag yellow">特惠直降</span>
                        </colorful-tag>
                        <div _ngcontent-c34 class="mask"></div>
                      </a>
                      <div _ngcontent-c34 class="item-content">
                        <h4 _ngcontent-c34>Smartisan 原装快充充电器 18W</h4>
                        <p _ngcontent-c34>18W 安全快充</p>
                        <goods-price _ngcontent-c34 _nghost-c37>
                          <p _ngcontent-c37 class="price">
                            <i _ngcontent-c37>¥</i>
                            <span _ngcontent-c37>45.00</span>

                            <span _ngcontent-c37 class="origin-price">
                              <i _ngcontent-c37>¥</i>
                              <span _ngcontent-c37>49.00</span>
                            </span>
                          </p>
                        </goods-price>
                      </div>
                    </div>
                  </sku-item-normal>
                </div>
                <div _ngcontent-c17 class="item-wrapper">
                  <sku-item-normal _ngcontent-c17 _nghost-c34>
                    <div _ngcontent-c34 class="product-box-item">
                      <a _ngcontent-c34 class="item-img box-border">
                        <img
                          _ngcontent-c34
                          alt
                          src="https://resource.smartisan.com/resource/84366aa98fd0659d7809e1b9eed62cb4.png?x-oss-process=image/resize,w_342/format,webp"
                          style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
                        />

                        <div _ngcontent-c34 class="mask"></div>
                      </a>
                      <div _ngcontent-c34 class="item-content">
                        <h4 _ngcontent-c34>坚果 Pro 2 特别版</h4>
                        <p _ngcontent-c34>漂亮得不像实力派</p>
                        <goods-price _ngcontent-c34 _nghost-c37>
                          <p _ngcontent-c37 class="price">
                            <i _ngcontent-c37>¥</i>
                            <span _ngcontent-c37>1,899.00</span>
                          </p>
                        </goods-price>
                      </div>
                    </div>
                  </sku-item-normal>
                </div>
                <div _ngcontent-c17 class="item-wrapper">
                  <sku-item-normal _ngcontent-c17 _nghost-c34>
                    <div _ngcontent-c34 class="product-box-item">
                      <a _ngcontent-c34 class="item-img box-border">
                        <img
                          _ngcontent-c34
                          alt
                          src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_342/format,webp"
                          style="opacity: 1; transition: opacity 0.3s ease-in-out 0s;"
                        />

                        <div _ngcontent-c34 class="mask"></div>
                      </a>
                      <div _ngcontent-c34 class="item-content">
                        <h4 _ngcontent-c34>畅呼吸智能空气净化器 · 超级除甲醛版</h4>
                        <p _ngcontent-c34>超强除甲醛能力，超低噪音，智能操控</p>
                        <goods-price _ngcontent-c34 _nghost-c37>
                          <p _ngcontent-c37 class="price">
                            <i _ngcontent-c37>¥</i>
                            <span _ngcontent-c37>2,999.00</span>
                          </p>
                        </goods-price>
                      </div>
                    </div>
                  </sku-item-normal>
                </div>
              </div>
            </section>
          </item-recommendation>
        </div>

        <item-footer _ngcontent-c8 _nghost-c18 class="ng-tns-c8-3">
          <ul _ngcontent-c18 class="item-footer box-line line-top">
            <li _ngcontent-c18 class="cart-entry">
              <a _ngcontent-c18 target="_self" href="/cart">
                <div _ngcontent-c18 class="tag">
                  <span _ngcontent-c18>{{cartCount}}</span>
                </div>
                <img
                  _ngcontent-c18
                  src="data:image/png;base64,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"
                />
              </a>
            </li>

            <li _ngcontent-c18 v-if="!isClicked">
              <span _ngcontent-c18 @click="buyNow" class="box-border">
                <a _ngcontent-c18>现在购买</a>
              </span>
            </li>

            <li _ngcontent-c18 v-if="!isClicked" class="highlight">
              <span _ngcontent-c18 @click="addToCart" class="box-border">
                <a _ngcontent-c18>加入购物车</a>
              </span>
            </li>

            <li _ngcontent-c18 v-if="isClicked" class="highlight">
              <span _ngcontent-c18 @click="confirm" class="box-border">
                <a _ngcontent-c18>确认</a>
              </span>
            </li>
          </ul>
        </item-footer>
        <item-board _ngcontent-c8 class="ng-tns-c8-3 ng-tns-c19-4" _nghost-c19>
          <div _ngcontent-c19 class="ng-tns-c19-4">
            <div
              _ngcontent-c19
              v-if="isClicked"
              @click="closeMask"
              class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
              :style="{'background-color': 'rgba(0, 0, 0, 0.8)','opacity':opacity}"
            ></div>
            <div
              _ngcontent-c19
              v-if="isClicked"
              :style="{'opacity':opacity}"
              class="item-board ng-trigger ng-trigger-itemBoardAnimate"
            >
              <div _ngcontent-c8 class="item-board-content ng-tns-c8-3">
                <board-content _ngcontent-c8 _nghost-c20 class="ng-tns-c8-3">
                  <div _ngcontent-c20 class="bottom-dialog">
                    <div _ngcontent-c20 class="dialog-header box-line">
                      <div _ngcontent-c20 class="goods-image box-border">
                        <img
                          _ngcontent-c20
                          alt
                          :src="res.images"
                        />
                      </div>
                      <div _ngcontent-c20 class="goods-info">
                        <h4 _ngcontent-c20>{{res.skuTitle}}</h4>
                        <p _ngcontent-c20>
                          <span _ngcontent-c20>S</span>
                          <span _ngcontent-c20>白</span>
                        </p>

                        <div _ngcontent-c20 class="price">
                          <i>¥</i>
                          <span>{{res.originalPrice}}</span>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-c20 class="dialog-main">
                      <iscroll-container _ngcontent-c20 _nghost-c35>
                        <div _ngcontent-c35 id="iscroll_wrapper" style="max-height: 14.3rem;">
                          <div
                            _ngcontent-c20
                            class="iscroll-content"
                            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
                          >
                            <div _ngcontent-c20 class="select-column box-line">
                              <div _ngcontent-c20 class="title box-line">
                                <h2 _ngcontent-c20>尺码选择</h2>
                              </div>
                              <div _ngcontent-c20 class="column">
                                <ul _ngcontent-c20 class="colum-attr">
                                  <li _ngcontent-c20 class="box-border active">
                                    <p _ngcontent-c20>S</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border">
                                    <p _ngcontent-c20>M</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border">
                                    <p _ngcontent-c20>L</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border">
                                    <p _ngcontent-c20>XL</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border">
                                    <p _ngcontent-c20>XXL</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border">
                                    <p _ngcontent-c20>XXXL</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div _ngcontent-c20 class="select-column box-line">
                              <div _ngcontent-c20 class="title box-line">
                                <h2 _ngcontent-c20>颜色选择</h2>
                              </div>
                              <div _ngcontent-c20 class="column">
                                <ul _ngcontent-c20 class="colum-attr">
                                  <li _ngcontent-c20 class="box-border color">
                                    <span _ngcontent-c20>
                                      <img
                                        _ngcontent-c20
                                        alt
                                        src="https://resource.smartisan.com/resource/e1eaeef0ff3ad6a3f5fb53bc8df496c0.png"
                                      />
                                    </span>

                                    <p _ngcontent-c20>黑</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border active color">
                                    <span _ngcontent-c20>
                                      <img
                                        _ngcontent-c20
                                        alt
                                        src="https://resource.smartisan.com/resource/056b44229a742b3db94cf7d114887ff7.png"
                                      />
                                    </span>

                                    <p _ngcontent-c20>白</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border color">
                                    <span _ngcontent-c20>
                                      <img
                                        _ngcontent-c20
                                        alt
                                        src="https://resource.smartisan.com/resource/772b70997f98b641b33f0000f96bff51.png"
                                      />
                                    </span>

                                    <p _ngcontent-c20>灰色</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border color">
                                    <span _ngcontent-c20>
                                      <img
                                        _ngcontent-c20
                                        alt
                                        src="https://resource.smartisan.com/resource/1788f55f0858bdf8c24baebcadb4d82f.png"
                                      />
                                    </span>

                                    <p _ngcontent-c20>深蓝</p>
                                  </li>
                                  <li _ngcontent-c20 class="box-border color">
                                    <span _ngcontent-c20>
                                      <img
                                        _ngcontent-c20
                                        alt
                                        src="https://resource.smartisan.com/resource/8fddd53085c80b5dabf40f1ba9dd2a30.png"
                                      />
                                    </span>

                                    <p _ngcontent-c20>天蓝色</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div _ngcontent-c20 class="select-column select-column-count box-line">
                              <div _ngcontent-c20 class="title box-line">
                                <h2 _ngcontent-c20>选择数量</h2>
                              </div>
                              <div _ngcontent-c20 class="column-count">
                                <div _ngcontent-c20 class="count-btn down disabled"></div>
                                <span _ngcontent-c20>1</span>
                                <div _ngcontent-c20 class="count-btn up"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </iscroll-container>
                    </div>
                  </div>
                </board-content>
              </div>
            </div>
          </div>
        </item-board>
        <dialog-prompt _ngcontent-c8 class="ng-tns-c8-3 ng-tns-c5-5" _nghost-c5>
          <modal-container _ngcontent-c5 class="ng-tns-c5-5 ng-tns-c7-11" _nghost-c7>
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
                <div _ngcontent-c5 class="dialog ng-tns-c5-5">
                  <div _ngcontent-c5 class="title">提示</div>
                  <div _ngcontent-c5 class="content center">
                    <div _ngcontent-c8 class="ng-tns-c8-3">优惠码无效</div>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >确定</button>
                  </div>
                </div>
              </div>
            </div>
          </modal-container>
        </dialog-prompt>
        <dialog-prompt _ngcontent-c8 class="ng-tns-c8-3 ng-tns-c5-6" _nghost-c5>
          <modal-container _ngcontent-c5 class="ng-tns-c5-6 ng-tns-c7-12" _nghost-c7>
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
                <div _ngcontent-c5 class="dialog ng-tns-c5-6">
                  <div _ngcontent-c5 class="title">设置到货通知</div>
                  <div _ngcontent-c5 class="content">
                    <div _ngcontent-c8 class="ng-tns-c8-3">
                      <div _ngcontent-c8 class="arrivemessage">该商品到货将第一时间短信通知您</div>
                      <div _ngcontent-c8 class="cellphone">
                        <input
                          _ngcontent-c8
                          class="ng-tns-c8-3 ng-untouched ng-pristine ng-valid"
                          placeholder="请输入手机号"
                          type="text"
                        />
                      </div>
                      <span _ngcontent-c8 class="star"></span>
                      <span _ngcontent-c8 class="warn"></span>
                    </div>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <button
                      _ngcontent-c5
                      class="button-cancel ng-trigger ng-trigger-buttonClick ng-tns-c5-6"
                      style="display: inline;"
                    >取消</button>
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >提交</button>
                  </div>
                </div>
              </div>
            </div>
          </modal-container>
        </dialog-prompt>
        <dialog-prompt _ngcontent-c8 class="ng-tns-c8-3 ng-tns-c5-7" _nghost-c5>
          <modal-container _ngcontent-c5 class="ng-tns-c5-7 ng-tns-c7-13" _nghost-c7>
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
                  <div _ngcontent-c5 class="title">提示</div>
                  <div _ngcontent-c5 class="content">
                    <div _ngcontent-c8 class="remindermessage ng-tns-c8-3">
                      <img
                        _ngcontent-c8
                        class="ng-tns-c8-3"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC1CAYAAAAZU76pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0VGQTgyM0FGQzFDMTFFNjkyNzFDRTY0QzJEOEMxN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0VGQTgyM0JGQzFDMTFFNjkyNzFDRTY0QzJEOEMxN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRUZBODIzOEZDMUMxMUU2OTI3MUNFNjRDMkQ4QzE3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRUZBODIzOUZDMUMxMUU2OTI3MUNFNjRDMkQ4QzE3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnzNBqEAABVYSURBVHja7J0JmBTl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"
                      />
                      <p _ngcontent-c8 class="ng-tns-c8-3">提交成功</p>
                      <p _ngcontent-c8 class="ng-tns-c8-3">该商品到货将第一时间短信通知您</p>
                    </div>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <button
                      _ngcontent-c5
                      class="button-cancel ng-trigger ng-trigger-buttonClick ng-tns-c5-7"
                      style="display: none;"
                    >取消</button>
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >继续购物</button>
                  </div>
                </div>
              </div>
            </div>
          </modal-container>
        </dialog-prompt>
        <dialog-prompt _ngcontent-c8 class="ng-tns-c8-3 ng-tns-c5-8" _nghost-c5>
          <modal-container _ngcontent-c5 class="ng-tns-c5-8 ng-tns-c7-14" _nghost-c7>
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
                <div _ngcontent-c5 class="dialog ng-tns-c5-8">
                  <div _ngcontent-c5 class="title">提示</div>
                  <div _ngcontent-c5 class="content">
                    <div _ngcontent-c8 class="remindermessage ng-tns-c8-3">
                      <img
                        _ngcontent-c8
                        class="ng-tns-c8-3"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC1CAYAAAAZU76pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTk5ODE5QUZGQzFDMTFFNjhDRTc5ODQ1Q0JBM0Y2MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTk5ODE5QjBGQzFDMTFFNjhDRTc5ODQ1Q0JBM0Y2MjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTk4MTlBREZDMUMxMUU2OENFNzk4NDVDQkEzRjYyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OTk4MTlBRUZDMUMxMUU2OENFNzk4NDVDQkEzRjYyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr6pEEwAABpUSURBVHja7J0HnBNl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"
                      />
                      <p _ngcontent-c8 class="ng-tns-c8-3">提交失败</p>
                      <p _ngcontent-c8 class="ng-tns-c8-3">很抱歉，发生未知错误，建议您重新提交</p>
                    </div>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <button
                      _ngcontent-c5
                      class="button-cancel ng-trigger ng-trigger-buttonClick ng-tns-c5-8"
                      style="display: inline;"
                    >取消</button>
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >重新提交</button>
                  </div>
                </div>
              </div>
            </div>
          </modal-container>
        </dialog-prompt>
        <item-big-picture _ngcontent-c8 class="ng-tns-c8-3 ng-tns-c21-9" _nghost-c21></item-big-picture>
        <item-board _ngcontent-c8 class="item-coupon ng-tns-c19-10" _nghost-c19>
          <div _ngcontent-c19 class="ng-tns-c19-10">
            <div
              _ngcontent-c19
              class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
              style="background-color: rgba(0, 0, 0, 0.8); display: none;"
            ></div>
            <div
              _ngcontent-c19
              class="item-board ng-trigger ng-trigger-itemBoardAnimate"
              style="display: none;"
            >
              <div _ngcontent-c8 class="item-board-content ng-tns-c8-3">
                <board-coupon _ngcontent-c8 _nghost-c22 class="ng-tns-c8-3">
                  <div _ngcontent-c22 class="coupon-dialog">
                    <div _ngcontent-c22 class="title-header box-line">
                      <div _ngcontent-c22 class="title-wrapper">
                        <h2 _ngcontent-c22>领取优惠券</h2>
                        <button _ngcontent-c22>取消</button>
                      </div>
                    </div>
                    <div _ngcontent-c22 class="coupon-list">
                      <ul _ngcontent-c22>
                        <li _ngcontent-c22>
                          <div _ngcontent-c22>
                            <label _ngcontent-c22>【APP专享】10元锤子商城通用优惠券</label>
                            <label _ngcontent-c22>适用于全品类（除保险外）使用</label>
                            <label _ngcontent-c22>有效期限：2019.10.24 - 2019.11.11</label>
                          </div>
                          <div _ngcontent-c22>
                            <button _ngcontent-c22>领取</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </board-coupon>
              </div>
            </div>
          </div>
        </item-board>
        <layout-gift _ngcontent-c8 class="ng-tns-c8-3" _nghost-c23>
          <div _ngcontent-c23 class="layout-gift">
            <modal-container _ngcontent-c23 _nghost-c7 class="ng-tns-c7-15">
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
                  <div _ngcontent-c23 class="gift-img">
                    <img
                      _ngcontent-c23
                      alt
                      src="https://resource.smartisan.com/resource/9c9683eb8ad75a32ea68d4b33ca2ec1e.png"
                    />
                  </div>
                </div>
              </div>
            </modal-container>
            <dialog-prompt _ngcontent-c23 _nghost-c5 class="ng-tns-c5-16">
              <modal-container _ngcontent-c5 class="ng-tns-c5-16 ng-tns-c7-18" _nghost-c7>
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
                    <div _ngcontent-c5 class="dialog ng-tns-c5-16">
                      <div _ngcontent-c5 class="title">提示</div>
                      <div _ngcontent-c5 class="content">
                        <article _ngcontent-c23 class="dialog-confirm-msg"></article>
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
            <modal _ngcontent-c23 _nghost-c24 class="ng-tns-c24-17">
              <section
                _ngcontent-c24
                class="mobile-modal-wrapper ng-trigger ng-trigger-shownState"
                style="opacity: 0; display: none;"
              >
                <div
                  _ngcontent-c24
                  class="mobile-modal-content"
                  style="background-color: rgb(235, 235, 235);"
                >
                  <div _ngcontent-c24 class="mobile-modal-header">
                    <h4 _ngcontent-c24 class="ng-tns-c24-17">新人礼券</h4>
                  </div>
                  <div _ngcontent-c24 class="mobile-modal-body">
                    <div _ngcontent-c23 class="modal-info-wrapper mobile-gift-result">
                      <div _ngcontent-c23 class="gift-result info">
                        <section _ngcontent-c23 class="section-floor gift-top-bar">
                          <div _ngcontent-c23>
                            <img
                              _ngcontent-c23
                              alt
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAABURJREFUeJzt3UtvG1UYxvFnPGMH32o3vdBKVIKqW1A3sOgCeZUPADvURIDYoapCAsQyEpsKkFCr7liUpsAOPkBXEUiVYFXBtipIILUl0OYytmvnjIeFbfXiSyg1c5Jz/j8pi2Ss+Jn4tX1m3vEbCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBTCGwHyMLNxqlxP65K2sw4Slb2SdoafrPSWJAkLS8vW4qTnch2AItO5uYKKhw6YDvHTHXX/lav0z0p6QfbWWzI2Q5g0VJYKtrOMHNhsShJp23nsMXXgn5J0ptOFnS5KElvSXrRchQrfCzo5yV9m6/XIgUOHkIEgfL1Wl7Sd5JesB0naz4VdE7SoqSfolr1RFgp2c7zvwkrJUW16glJP0paXFq96s3j7OBL1KibjVMrkhphqXgsrJSUKxRGbpNuGyXNppLWfaW9XvYh/4MgFygsFRWWywryo8f3vW5XSdxS0mr/Lmn1+Oq1pexTZsuXZ+7i3NHDx/Lz9QnFvK3OnbW2iVtn0l7vgPpP9F3/lfbSeRO3znTurN1PjRnZr1yhoPx8XXNHDx9T/93Jeb4UtIIwnLjNxC1Jek/SRUl3M4o0C/fUz/xR0t+Hsabtu2u8Kehpeq22JH1jO8dTuJS0Jhe0T7xprJj1TYWVkoJodJfTNJUe6qxJSif8mmCH7bO20/0Nt2+mvfE3SY3RtFdv1/hS0PMmbi6auPnp3JHDhSDa+S34meeOPvL9/T9uTd0+azvd3+Pbx0mNUef2WlfSB5K+mmG8XcuXgr4n6YKkYtJsnotq+2znycTglfnDlcbCBUnS6jWrebLg2xr6i6TZtp0hM0n/2OCK7RxZ8q2g4TjfCvqdwbUOXhhcq+LF+echX9bQ+9V/YD8Oy2XbWTITVkoycfOTpdWrqaQry/1jCaf5UtB3o0p5cNrOnyZDEEWaO3KokMSt8yZunpcHlzp4s+SI6vvGnoN2XRBFiup+nNWRPCpos76pcdc7uC41Rmbd1U+ajfKloOdN3Dzbub3WTU1iO0tmho0VEzfPSnLrs2YT+PIeTGNForHiIBorjvOtoOE43wqaxorjfFlD01ihseIUGis0VtxCY8UP3hQ0jRU/+FLQNFZorDiFxopEY8VBNFYc51tBw3G+FTSNFcf5soamseJJY8X5E+2SdLNxKn3QWBl9Dg9mXDz8t9hrg2YkKR03K2Q4aMbETR1fveb84+3LK/TU5kIQBErTtKoH05N2euCzLoyd7q8aTJh1PWysmLg5+1S7kG9r6LFy/bXmG7ZzPIW3w7K7866fhDcFnSaTGypRf/j555LelVTPKNIs1NXPfG7aAPdp++4aX5YcX3du/fnqpIHnQT6vuWcPFk3cuthrty9OGny42wS5QLliUdGEY4PHBp5/n33C7PlS0Kcl5ZJWezFptT+LatWDUbXyyA2CfF75/TVpf81OwhkzW7HMxtZfkt6XdGWlsdCjU+iWnqTLkl42G1s3XB4xm8QtmY2tG5JekXR5pbGwN/7Hxgz4VNBDv0l6fXt9wyjdG0uLJ5Km2l7f2Jb0mqRfbcfJmo8FLUk/S/pycK2DUwbXqlyS9IvlKFb4WtCStOJkQbfbkifDzcfx5aBwnOu9TvdfTcLfg67bDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgT/oHcBu67SdxYBgAAAAASUVORK5CYII="
                            />
                            <h2 _ngcontent-c23>
                              <span _ngcontent-c23>恭喜你获得新人专享红包</span>
                            </h2>
                            <p _ngcontent-c23>
                              请在
                              <em _ngcontent-c23>个人中心 - 我的优惠券</em> 查看礼券详情哦！
                            </p>
                          </div>
                        </section>
                        <section _ngcontent-c23 class="gift-coupon page-for-coupon">
                          <div _ngcontent-c23 class="gift-worn">
                            <span _ngcontent-c23>* 根据网络状况，优惠券到账可能有延迟</span>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <ul _ngcontent-c24 class="mobile-modal-footer box-line">
                    <li _ngcontent-c24 class="highlight-warn btn-primary">
                      <div _ngcontent-c24 class="box-border">
                        <div _ngcontent-c24 class="ng-tns-c24-17">去购物</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </modal>
          </div>
        </layout-gift>
      </ng-component>
    </section>

    <div _ngcontent-c0 _nghost-c4 class="ng-tns-c4-0 tipsbox">
      <h5
        _ngcontent-c4
        class="ng-tns-c4-0 ng-trigger ng-trigger-promptState"
        v-if="tips"
        :style="{'opacity': tips}"
      >
        <span _ngcontent-c4 class="ng-tns-c4-0">加入购物车成功</span>
      </h5>
    </div>
  </div>
</template>

<script>
// import Swiper from '../components/Swiper.vue'
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      skuTitle: "",
      res: {},
      isClicked: false,
      opacity: 0,
      tips: 0,
      cartCount: 0,
      swiperOption: {
        pagination: ".swiper-pagination1",
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //循环
        loop: true
      }
    };
  },
  created: function() {
    // console.log(this.$route);
    // const skuid = this.$route.params.skuid;
    const skuId = this.$route.query.skuId;
    console.log("detail", skuId);
    this.axios.get(`http://localhost/detail?skuId=${skuId}`).then(data => {
      this.skuTitle = data.data.item[0].skuTitle;
      this.res = data.data.item[0];
      console.log('商品数据：',this.res);
    });

    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    cart.forEach(ele=>{
      this.cartCount += ele.num;
    });
    console.log(this.cartCount);
  },
  methods: {
    buyNow() {
      this.isClicked = !this.isClicked;
      this.opacity = 1;
      this.$store.commit("isBuyNow", true); //设置是否购买的状态
      this.$store.commit("isAddToCart", false);
      console.log("buyNow", this.$route.query.skuId);
    },
    addToCart() {
      this.isClicked = !this.isClicked;
      this.opacity = 1;
      this.$store.commit("isAddToCart", true); //设置加入购物车的状态
      this.$store.commit("isBuyNow", false);
      console.log("addToCart", this.$route.query.skuId);
    },
    closeMask() {
      this.isClicked = !this.isClicked;
      this.opacity = 0;
      this.$store.commit("isBuyNow", false);
      this.$store.commit("isAddToCart", false);
      console.log("closeMask");
    },
    confirm() {
      let buyFlag = this.$store.state.isBuyNow,
        addFlag = this.$store.state.isAddToCart;
      console.log(buyFlag, addFlag);
      if (buyFlag) {
        this.$router.push("/checkout");
        console.log("confirmed,go to checkout");
      } else if (addFlag) {
        this.opacity = !this.opacity;
        this.isClicked = !this.isClicked;
        this.tips = 1;    //显示加入购物车提示框
        let timer = setTimeout(() => {
          this.tips = !this.tips;
          clearTimeout(timer);   //隐藏提示框
        }, 2000);
        /* let skuid = this.$route.query.skuId;
        console.log(skuid); */
        let flag = 0;
        let good = {
          username: JSON.parse(localStorage.getItem('username')),
          skuid: this.$route.query.skuId,
          skutitle: this.res.skuTitle,
          image: this.res.images,
          price: this.res.originalPrice,
          isChecked: true,
          num: 1
        };
        let goods = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        for(let i=0;i<goods.length;i++){
          let item = goods[i];
          if(item.skuid === good.skuid){
            item.num += good.num;
          }else{
            flag = flag+1;
          }
        };
        if(flag === goods.length){
          goods.push(good);
        };
        localStorage.setItem('cart',JSON.stringify(goods));
        console.log("addToCart success");
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
/* a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
} */
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
.swiper-container {
  width: 100%;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  height: 18.6rem;
}

.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 100%;
  border-radius: 0.6rem;
}
.main-wrapper.is-header-shown[_ngcontent-c0] {
  /* margin-top: 50px; */
}
.main-wrapper[_ngcontent-c0] {
  overflow: scroll;
}
.is-header-shown[_nghost-c10] .fix-header-tabbox[_ngcontent-c10],
.is-header-shown [_nghost-c10] .fix-header-tabbox[_ngcontent-c10] {
  top: 50px;
}
.fix-header-tabbox[_ngcontent-c10] {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0.45rem 0.3rem;
  z-index: 99;
  background: #f2f2f2;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.12);
  -webkit-user-select: none;
  user-select: none;
}
.fix-header-tabbox[_ngcontent-c10] ul[_ngcontent-c10] {
  font-size: 0.675rem;
  font-weight: 700;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  border-radius: 0.15rem;
}
.box-border {
  position: relative;
}
.fix-header-tabbox[_ngcontent-c10] li[_ngcontent-c10]:first-child {
  border-radius: 0.15rem 0 0 0.15rem;
}
.fix-header-tabbox[_ngcontent-c10] li.active[_ngcontent-c10] {
  background: #bfbfbf;
  background-image: linear-gradient(#aeaeae, #b3b3b3);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
  color: #fff;
}

.fix-header-tabbox[_ngcontent-c10] li[_ngcontent-c10] {
  flex-basis: 25%;
  padding: 0.4rem 0;
  position: relative;
  color: #606060;
}
.fix-header-tabbox[_ngcontent-c10]
  li[_ngcontent-c10]
  .active-area[_ngcontent-c10] {
  position: absolute;
  left: 0;
  right: 0;
  top: -0.45rem;
  bottom: -0.45rem;
}
.fix-header-tabbox[_ngcontent-c10] li[_ngcontent-c10]:after {
  background: #d4d4d4;
}
.box-line.line-vertical::after {
  width: 1px;
  height: 100%;
  top: 0;
  left: auto;
  right: 0;
  bottom: 0;
  -webkit-transform: scaleX(0.667);
  transform: scaleX(0.667);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.box-line::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ebebeb;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.item[_ngcontent-c8] {
  background: #f5f5f5;
  overflow: hidden;
  padding: 2.4rem 0 2.5rem;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-user-select: none;
  user-select: none;
}
.section-floor {
  position: relative;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
  background: #fff;
}
.item[_ngcontent-c8] {
  background: #f5f5f5;
  overflow: hidden;
  padding: 6rem 0 2.5rem;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-user-select: none;
  user-select: none;
}
.item-banner[_ngcontent-c12],
.item-banner-container[_ngcontent-c12] {
  width: 100%;
  height: 100%;

  overflow: hidden;
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.item-banner-container[_ngcontent-c12] {
  background: #fff;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  font-size: 0;
}
.item-banner[_ngcontent-c12] {
  display: inline-block;
  list-style: none;
  font-size: 14px;
  left: -100%;
  -webkit-backface-visibility: hidden;
  text-align: center;
}
.item-banner[_ngcontent-c12],
.item-banner-container[_ngcontent-c12] {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.item-banner[_ngcontent-c12] img[_ngcontent-c12] {
  /* height: 100%; */
  height: 80vw;
  margin: auto;
}
.item-nav-container[_ngcontent-c12] {
  position: absolute;
  bottom: 0.5rem;
  height: 10px;
  width: 100%;
  text-align: center;
}
.item-nav.active[_ngcontent-c12] {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}
.item-nav[_ngcontent-c12] {
  display: inline-block;
  position: relative;
  height: 6px;
  width: 6px;
  margin: 0 4px;
  border-radius: 50%;
  background: #ebebeb;
}
.item-nav.active[_ngcontent-c12]::before {
  border-color: #dbdbdb;
}
.item-nav[_ngcontent-c12]::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: -200%;
  left: 0;
  right: -200%;
  border: 1px solid #e0e0e0;
  -webkit-transform: scale(0.3333);
  transform: scale(0.3333);
  border-radius: 50%;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  z-index: 2;
}
.section-floor::after,
.section-floor::before {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #dbdbdb;
  -webkit-transform: scaleY(0.6667);
  transform: scaleY(0.6667);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.item-titlebox[_ngcontent-c13] {
  position: relative;
}
.item-titlebox[_ngcontent-c13] .title-content[_ngcontent-c13] {
  padding: 0.8rem 0.9rem;
  -webkit-user-select: text;
  user-select: text;
}
.item-titlebox[_ngcontent-c13]
  .title-content[_ngcontent-c13]
  h4[_ngcontent-c13] {
  font-size: 1rem;
  margin-bottom: 0.4rem;
  color: #333;
  margin: 0;
}
.item-titlebox[_ngcontent-c13]
  .title-content[_ngcontent-c13]
  p[_ngcontent-c13] {
  font-size: 0.6rem;
  color: #7f7f7f;
  margin-bottom: 0.4rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.item-titlebox[_ngcontent-c13] .price[_ngcontent-c13] {
  margin-right: 0.2rem;
  font-weight: 700;
}
.price[_ngcontent-c13] {
  color: #d44d44;
  font-size: 0.7rem;
  display: inline-block;
  white-space: nowrap;
}
.price[_ngcontent-c13] i {
  font-style: normal;
  font-size: 0.6rem;
}
.price[_ngcontent-c13] span {
  font-size: 0.9rem;
}
.item-titlebox[_ngcontent-c13] .price[_ngcontent-c13] {
  margin-right: 0.2rem;
  font-weight: 700;
}
.price[_ngcontent-c13] {
  color: #d44d44;
  font-size: 0.7rem;
  display: inline-block;
  white-space: nowrap;
}
.item-titlebox[_ngcontent-c13] .price[_ngcontent-c13] .postage-price {
  color: #7f7f7f;
  font-size: 0.6rem;
  position: absolute;
  font-weight: 400;
  right: 0.9rem;
  bottom: 0.88rem;
}
.box-line::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ebebeb;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.activities[_ngcontent-c25] {
  position: relative;
  padding: 0.8rem 0.9rem 0;
}
.activities-title[_ngcontent-c25] {
  font-size: 0.6rem;
  line-height: 1.2;
  padding: 0 0 0.65rem;
  color: #999;
  display: block;
}
.activities-item[_ngcontent-c25] {
  /* padding-bottom: .65rem; */
  display: flex;
  align-items: center;
}
.activities-item[_ngcontent-c25] figure[_ngcontent-c25] {
  display: inherit;
  margin-right: 0.4rem;
  margin-left: 0rem;
}
.tag.tag-red[_ngcontent-c25] {
  color: #d44d44;
  background: #fce9e8;
  border-color: #f0bab6;
}
.tag[_ngcontent-c25] {
  overflow: hidden;
  display: inline-block;
  text-align: center;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 13px;
  color: #7f7f7f;
  background: #f7f7f7;
  border: 1px solid #d3d3d3;
}
.activities-item[_ngcontent-c25] label[_ngcontent-c25] {
  position: relative;
  display: block;
  font-size: 0.65rem;
  word-break: break-all;
  line-height: 1;
  flex: 2;
}
.activities-item[_ngcontent-c25] .special-num-words[_ngcontent-c25] {
  display: inline-block;
  word-break: break-word;
}
.activities-item.link-item[_ngcontent-c25] .arrow[_ngcontent-c25],
.activities-item[_ngcontent-c25]:first-child .arrow[_ngcontent-c25] {
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.activities-item[_ngcontent-c25] .arrow[_ngcontent-c25] {
  display: block;
  position: absolute;
  right: -0.3rem;
  top: 50%;
  -webkit-transform: translateY(-0.6rem);
  transform: translateY(-0.6rem);
  width: 0.3rem;
  height: 0.5rem;
  background: url("../assets/images/arrow.png") no-repeat 50%;
  background-size: contain;
}
.activities-item[_ngcontent-c25] .couponItem[_ngcontent-c25] {
  position: relative;
  font-size: 0.65rem;
  display: flex;
  justify-content: space-between;
  min-height: 18px;
  flex: 1;
  align-items: center;
}
.activities-item[_ngcontent-c25]
  .couponItem[_ngcontent-c25]
  label[_ngcontent-c25]:first-of-type {
  display: block;
}
.activities-item[_ngcontent-c25] label[_ngcontent-c25] {
  position: relative;
  display: block;
  font-size: 0.65rem;
  word-break: break-all;
  line-height: 1;
  flex: 2;
}
.activities-item[_ngcontent-c25]
  .couponItem[_ngcontent-c25]
  div[_ngcontent-c25]:first-of-type {
  color: #d44d44;
  flex: 1;
  text-align: right;
  vertical-align: middle;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.4rem;
}
.activities-item[_ngcontent-c25]
  .couponItem[_ngcontent-c25]
  div[_ngcontent-c25]:first-of-type
  span[_ngcontent-c25] {
  width: 100%;
  text-align: right;
  display: inline-block;
}
.clearfix::after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.item-box-column[_ngcontent-c13] {
  position: relative;
  padding: 0.8rem 1.5rem 0.6rem 0.8rem;
}
.item-box-column.specs[_ngcontent-c13]::before {
  content: "";
  display: block;
  position: absolute;
  right: 0.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 0.3rem;
  height: 0.5rem;
  background: url("../assets/images/arrow.png") no-repeat 50%;
  background-size: contain;
}
.item-box-column[_ngcontent-c13] h6[_ngcontent-c13] {
  font-size: 0.6rem;
  line-height: 1.2;
  padding: 0 0 0.3rem;
  color: #999;
  margin: 0;
}
.item-box-column[_ngcontent-c13] .item-box[_ngcontent-c13] {
  font-size: 0.675rem;
}
.item-instruction[_ngcontent-c13] {
  font-size: 0.5rem;
  color: #7f7f7f;
  line-height: 1.6;
  padding: 0 0.8rem;
  -webkit-user-select: text;
  user-select: text;
}
.section-floor .title-header {
  position: relative;
}
.section-floor .title-wrapper {
  position: relative;
  padding: 0 0.6rem;
}
.section-floor h2 {
  height: 40px;
  line-height: 40px;
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
img[_ngcontent-c15] {
  display: block;
  width: 100%;
}
.item-specs[_ngcontent-c16] .specs-main[_ngcontent-c16] {
  padding: 1rem 1rem 2rem;
}
.item-specs[_ngcontent-c16] .specs-item[_ngcontent-c16]:last-child {
  margin-bottom: 0;
}
.item-specs[_ngcontent-c16]
  .specs-item[_ngcontent-c16]
  li[_ngcontent-c16]:nth-child(odd) {
  background: #fafafa;
}
.item-specs[_ngcontent-c16] .specs-item[_ngcontent-c16] li[_ngcontent-c16] {
  position: relative;
  font-size: 0.5rem;
  overflow: hidden;
  padding: 0.9rem 1rem;
  display: flex;
  justify-content: space-between;
}
.min-font-12px[_nghost-c16]
  .item-specs[_ngcontent-c16]
  .specs-item[_ngcontent-c16]
  li[_ngcontent-c16]
  h4[_ngcontent-c16],
.min-font-12px
  [_nghost-c16]
  .item-specs[_ngcontent-c16]
  .specs-item[_ngcontent-c16]
  li[_ngcontent-c16]
  h4[_ngcontent-c16],
.min-font-12px[_nghost-c16]
  .item-specs[_ngcontent-c16]
  .specs-item[_ngcontent-c16]
  li[_ngcontent-c16]
  span[_ngcontent-c16],
.min-font-12px
  [_nghost-c16]
  .item-specs[_ngcontent-c16]
  .specs-item[_ngcontent-c16]
  li[_ngcontent-c16]
  span[_ngcontent-c16] {
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
}
.item-specs[_ngcontent-c16]
  .specs-item[_ngcontent-c16]
  li[_ngcontent-c16]
  h4[_ngcontent-c16] {
  color: #333;
  font-weight: 700;
  flex-wrap: nowrap;
  flex-shrink: 0;
  margin-right: 0.5rem;
}
.item-specs[_ngcontent-c16]
  .specs-item[_ngcontent-c16]
  li[_ngcontent-c16]
  span[_ngcontent-c16] {
  color: #7f7f7f;
}
.item-box-column.service-note[_ngcontent-c16] {
  padding-bottom: 0.4rem;
}
.item-box-column[_ngcontent-c16] {
  position: relative;
  padding: 0.8rem 0.9rem 0.6rem;
}
.item-box-column.service-note[_ngcontent-c16] ul[_ngcontent-c16] {
  overflow: hidden;
  font-size: 0.5rem;
  font-weight: 700;
  color: #333;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
}
.item-box-column.service-note[_ngcontent-c16] li[_ngcontent-c16] {
  padding-left: 1rem;
  float: left;
  position: relative;
  box-sizing: border-box;
  width: 50%;
  flex: none;
  margin-bottom: 0.3rem;
}
.item-box-column.service-note[_ngcontent-c16] li[_ngcontent-c16]::before {
  content: "";
  display: block;
  width: 0.9rem;
  height: 0.9rem;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  background: url("../assets/images/jinglingtu.png") no-repeat;
  background-size: cover;
  background-position: 0 -0.1rem;
}
.item-box-column.service-note[_ngcontent-c16]
  li.exchange-policy[_ngcontent-c16]:before {
  background-position: -0.9rem -0.1rem;
}
.container[_ngcontent-c17] {
  overflow: hidden;
  padding: 0.9rem 0.6rem 0;
}
.container[_ngcontent-c17] .item-wrapper[_ngcontent-c17] {
  width: calc(50% - 0.2rem);
  float: left;
  margin-right: 0.2rem;
}
.product-box-item[_ngcontent-c34] .item-img[_ngcontent-c34] {
  display: block;
  position: relative;
  /* padding-top: 100%; */
  height: 46vw;
  width: 46vw;
  /* border: 1px solid #cccccc; */
  border-radius: 0.2rem;
}
.product-box-item[_ngcontent-c34] .item-img.box-border[_ngcontent-c34]::before {
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
.product-box-item[_ngcontent-c34]
  .item-img[_ngcontent-c34]
  img[_ngcontent-c34] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.product-box-item[_ngcontent-c34]
  .item-img[_ngcontent-c34]
  .mask[_ngcontent-c34] {
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
.product-box-item[_ngcontent-c34] .item-content[_ngcontent-c34] {
  margin: 0 auto;
  padding: 0.4rem 0.6rem 0.9rem;
}
.product-box-item[_ngcontent-c34]
  .item-content[_ngcontent-c34]
  h4[_ngcontent-c34] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  font-size: 0.6rem;
  color: #333;
}
.min-font-12px[_nghost-c34] .item-content[_ngcontent-c34] p[_ngcontent-c34],
.min-font-12px [_nghost-c34] .item-content[_ngcontent-c34] p[_ngcontent-c34] {
  width: 120%;
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
}
.product-box-item[_ngcontent-c34]
  .item-content[_ngcontent-c34]
  p[_ngcontent-c34] {
  margin-top: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.5rem;
  line-height: 1.2;
  color: #7f7f7f;
  min-height: 0.6rem;
}
.product-box-item[_ngcontent-c34]
  .item-content[_ngcontent-c34]
  goods-price[_ngcontent-c34] {
  position: relative;
  top: -0.15rem;
}
[_nghost-c37] {
  font-size: 0.6rem;
  line-height: 1;
}
.price[_ngcontent-c37] {
  color: #d44d44;
  display: inline-block;
  white-space: nowrap;
  font-weight: 700;
}
.min-font-12px[_nghost-c37] .price[_ngcontent-c37] i[_ngcontent-c37],
.min-font-12px [_nghost-c37] .price[_ngcontent-c37] i[_ngcontent-c37] {
  display: inline-block;
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: bottom right;
  transform-origin: bottom right;
}
.price[_ngcontent-c37] i[_ngcontent-c37] {
  font-style: normal;
  font-size: 0.5rem;
}
.price[_ngcontent-c37] > span[_ngcontent-c37] {
  font-size: 0.6rem;
}
ul.box-line[_ngcontent-c18] {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background: #fff;
  height: 2.75rem;
  padding: 0 0.4%;
  z-index: 202;
  box-shadow: 0 -11px 27px rgba(0, 0, 0, 0.08);
}
li.cart-entry[_ngcontent-c18] {
  flex-shrink: 0;
  flex-basis: 2.5rem;
}
li[_ngcontent-c18] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0.7%;
}
li.cart-entry[_ngcontent-c18] a[_ngcontent-c18] {
  display: inline-block;
  width: 100%;
  text-align: center;
  position: relative;
}
a[_ngcontent-c18] {
  text-decoration: none;
  color: inherit;
}
li.cart-entry[_ngcontent-c18] a[_ngcontent-c18] .tag[_ngcontent-c18] {
  position: absolute;
  box-sizing: border-box;
  left: 1.45rem;
  top: -0.61667rem;
  height: 2.6rem;
  min-width: 2.4rem;
  line-height: 1.6;
  text-align: center;
  padding: 0 0.783rem;
  border-radius: 1.2rem;
  background: #d44e45;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 -2px 0 rgba(0, 0, 0, 0.06);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transform: scale(0.33333);
  transform: scale(0.33333);
  box-shadow: 0 3px 8px rgba(212, 78, 69, 0.4);
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
}
li.cart-entry[_ngcontent-c18] a[_ngcontent-c18] .tag[_ngcontent-c18]::before {
  content: "";
  box-sizing: border-box;
  border: 1px solid rgba(3, 3, 3, 0.04);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 1.2rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.04),
    hsla(0, 0%, 100%, 0.04)
  );
}
li.cart-entry[_ngcontent-c18] a[_ngcontent-c18] img[_ngcontent-c18] {
  display: block;
  margin: 0.35rem auto;
  width: 1.35rem;
}
li[_ngcontent-c18] > span[_ngcontent-c18] {
  width: 98%;
  height: 1.9rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#fff, #fcfcfc);
  color: #8c8c8c;
}
li[_ngcontent-c18] > span[_ngcontent-c18]::before {
  border-color: #e0e0e0;
  border-radius: 0.28571rem;
}
li.highlight[_ngcontent-c18] > span[_ngcontent-c18] {
  color: #fff;
  background: #5f7ed7;
  background: linear-gradient(#6e98f4, #4b77ee);
}
li[_ngcontent-c18] > span[_ngcontent-c18] {
  width: 98%;
  height: 1.9rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#fff, #fcfcfc);
  color: #8c8c8c;
}
li.highlight[_ngcontent-c18] > span[_ngcontent-c18]:before {
  border-color: #3f6aec;
}
ul.box-line[_ngcontent-c18]:after {
  background: #dfdfdf;
}
.box-line.line-top:after {
  top: 0;
  bottom: auto;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.item-board[_ngcontent-c19],
.item-board-shade[_ngcontent-c19] {
  position: fixed;
  width: 100vw;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
}
.item-board-shade[_ngcontent-c19] {
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;
}
.item-board[_ngcontent-c19] {
  height: auto;
  bottom: 0;
  background: #fff;
  opacity: 0;
  z-index: 201;
}
.bottom-dialog[_ngcontent-c20],
.dialog-header[_ngcontent-c20] {
  position: relative;
  display: flex;
}
.bottom-dialog[_ngcontent-c20] {
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  flex-direction: column;
  -webkit-user-select: none;
  user-select: none;
}
.dialog-header[_ngcontent-c20] {
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.12);
  background: #f7f7f7;
  background-image: linear-gradient(#fefefe, #f6f6f6);
  flex-shrink: 0;
  height: 7.4rem;
}

.bottom-dialog[_ngcontent-c20],
.dialog-header[_ngcontent-c20] {
  position: relative;
  display: flex;
}
.dialog-header[_ngcontent-c20] .goods-image[_ngcontent-c20] {
  display: inline-block;
  position: relative;
  top: -1.2rem;
  width: 6.4rem;
  height: 6.4rem;
  background: #fff;
  margin: 0.6rem;
  padding: 0.5rem;
  flex-shrink: 0;
  border-radius: 0.2rem;
  box-sizing: border-box;
}
.dialog-header[_ngcontent-c20] .goods-image[_ngcontent-c20]::before {
  bottom: -43.85714%;
  border-radius: 0.28571rem;
  border-color: #f0f0f0;
}
.dialog-header[_ngcontent-c20]
  .goods-image[_ngcontent-c20]
  img[_ngcontent-c20] {
  width: 100%;
  height: 100%;
}
.dialog-header[_ngcontent-c20] .goods-info[_ngcontent-c20] {
  box-sizing: border-box;
  margin: 0.8rem 0.6rem 0.8rem 0.2rem;
  overflow: hidden;
  position: relative;
  flex-grow: 1;
}
.dialog-header[_ngcontent-c20] .goods-info[_ngcontent-c20] h4[_ngcontent-c20] {
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
}
.dialog-header[_ngcontent-c20] .goods-info[_ngcontent-c20] p[_ngcontent-c20] {
  font-size: 0.6rem;
  line-height: 0.8rem;
  margin-bottom: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.dialog-header[_ngcontent-c20]
  .goods-info[_ngcontent-c20]
  span[_ngcontent-c20] {
  color: #7f7f7f;
}
.dialog-header[_ngcontent-c20]
  .goods-info[_ngcontent-c20]
  span[_ngcontent-c20]::after {
  content: " \B7 ";
}
.dialog-header[_ngcontent-c20]
  .goods-info[_ngcontent-c20]
  .price[_ngcontent-c20] {
  position: absolute;
  left: 0;
  bottom: 4px;
  font-weight: 700;
}

.price[_ngcontent-c20] {
  color: #d44d44;
  font-size: 0.7rem;
  display: inline-block;
  white-space: nowrap;
}
.price[_ngcontent-c20] i {
  font-style: normal;
  font-size: 0.8rem;
}
.price[_ngcontent-c20] span {
  font-size: 0.8rem;
}
.dialog-header[_ngcontent-c20]:after {
  background: #d8d8d8;
}
.dialog-main[_ngcontent-c20] {
  overflow-y: hidden;
  max-height: 14.3rem;
  flex-grow: 1;
  margin-bottom: 2.5rem;
  box-sizing: border-box;
}

#iscroll_wrapper[_ngcontent-c35] {
  height: 100%;
  width: 100%;
}
.dialog-main[_ngcontent-c20] .select-column[_ngcontent-c20] {
  position: relative;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .title[_ngcontent-c20] {
  position: relative;
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  > div[_ngcontent-c20] {
  padding: 0 0.6rem;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .title[_ngcontent-c20]
  h2[_ngcontent-c20] {
  font-size: 0.75rem;
  float: left;
  color: #666;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20] {
  padding-top: 0.94737rem;
  padding-bottom: 0.3rem;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  ul[_ngcontent-c20] {
  overflow: hidden;
}
.colum-attr[_ngcontent-c20] {
  padding-top: 1px;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  li.color[_ngcontent-c20] {
  width: 31.3%;
  padding: 0.55rem 0;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  li[_ngcontent-c20] {
  text-align: center;
  padding: 0.475rem;
  box-sizing: border-box;
  float: left;
  margin-right: calc((100% - 31.3% * 3 - 1px) / 2);
  margin-bottom: 0.6rem;
  border-radius: 0.2rem;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  li[_ngcontent-c20]:before {
  border-radius: 0.28571rem;
  border-color: #e5e5e5;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  span[_ngcontent-c20] {
  display: block;
  width: 1rem;
  height: 1rem;
  margin: 0 auto 0.4rem;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  img[_ngcontent-c20] {
  width: 100%;
  height: 100%;
  display: block;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  li.color[_ngcontent-c20]
  p[_ngcontent-c20] {
  font-size: 0.5rem;
  line-height: 1;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  .column[_ngcontent-c20]
  p[_ngcontent-c20] {
  color: #666;
  font-size: 0.675rem;
  line-height: 1.6;
}
.dialog-main[_ngcontent-c20]
  .select-column.select-column-count[_ngcontent-c20]
  .column-count[_ngcontent-c20] {
  padding: 0.6rem;
  font-size: 0.75rem;
}
.dialog-main[_ngcontent-c20]
  .select-column[_ngcontent-c20]
  > div[_ngcontent-c20] {
  padding: 0 0.6rem;
}
.dialog-main[_ngcontent-c20]
  .select-column.select-column-count[_ngcontent-c20]
  .count-btn.down.disabled[_ngcontent-c20] {
  pointer-events: none;
  background-position: -3rem 0.1rem;
}

.dialog-main[_ngcontent-c20]
  .select-column.select-column-count[_ngcontent-c20]
  .count-btn.down[_ngcontent-c20] {
  background-position: 0 0.1rem;
}
.dialog-main[_ngcontent-c20]
  .select-column.select-column-count[_ngcontent-c20]
  .count-btn[_ngcontent-c20] {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-repeat: no-repeat;
  vertical-align: middle;
  background: url("../assets/images/number.png") no-repeat;
  background-size: 4.5rem;
}
.dialog-main[_ngcontent-c20]
  .select-column.select-column-count[_ngcontent-c20]
  span[_ngcontent-c20] {
  display: inline-block;
  width: 1.8rem;
  box-sizing: border-box;
  text-align: center;
  color: #666;
  font-weight: 700;
}
.dialog-main[_ngcontent-c20]
  .select-column.select-column-count[_ngcontent-c20]
  .count-btn.up[_ngcontent-c20] {
  background-position: 0 -1.4rem;
}
.tipsbox {
    position: fixed;
    left: 50%;
    bottom: 3.8rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 888;
}
.tipsbox {
    width: 38%;
    text-align: center;
}
.tipsbox h5 {
    position: relative;
    display: inline-block;
    padding: .7rem 1.008rem .6rem;
    font-size: .9rem;
    color: #996b3d;
}
.tipsbox h5::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 277.77778%;
    height: 277.77778%;
    -webkit-transform: scale(.36);
    transform: scale(.36);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border: 1px solid #954a00;
    border-radius: .98rem;
    box-shadow: inset 0 0 1px hsla(0,0%,100%,.3), 0 1.4815rem 3.7037rem 0 rgba(0,0,0,.15);
    background: linear-gradient(0deg,hsla(43,85%,89%,.95),rgba(255,249,233,.95));
}
.tipsbox h5 span {
    position: relative;
}
</style>