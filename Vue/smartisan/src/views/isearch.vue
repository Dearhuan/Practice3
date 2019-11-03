<template>
  <div>
    <div class="search-input-wrap">
      <div class="search-input-inline">
        <div class="search-input-form">
          <div class="form-item">
            <span class="search-btn"></span>
            <input
              type="text"
              v-model="msg"
              @click="checkInput"
              maxlength="30"
              placeholder="请输入搜索关键字"
              class="input-box pblur"
            />
            <!-- <figure></figure> -->
          </div>
          <span class="cancel" @click="cancel">取消</span>
        </div>
      </div>

      <ul class="search-matching-wrap" v-show="isShow">
        <li class v-for="(item, index) in filterData" :key="index">
          <span style="color:#5275db;font-weight:700">{{item.skuTitle}}</span> 
        </li>
      </ul>
    </div>
    <div class="hot-list">
      <h4>热门搜索</h4>
      <ul>
        <li class="color-0">坚果</li>
        <li class="color-1">卫衣</li>
        <li class="color-2">惠普</li>
        <li class="color-3">地平线</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      goods: [],
      isShow: false
    };
  },
  methods: {
    cancel() {
      this.msg = "";
      this.$router.push("/");
      console.log("cancel");
    },
    checkInput(){
      if(this.msg.length > 0){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    },
    close(){
      this.msg = '';
      this.isShow = false;
    }
  },
  created() {
    this.axios.get("http://localhost/goods").then(data => {
      console.log(data.data.goods);
      this.goods = data.data.goods;
    });
  },
  computed: {
    filterData(){
      let msg = this.msg;
      if(msg){
        return this.goods.filter(function(product){
          return Object.keys(product).some(function(key){
            return String(product[key]).toLowerCase().indexOf(msg) > -1;
          })
        })
      }
      return this.products;
    }
  }
};
</script>

<style scoped>
.search-input-wrap {
  padding-top: 2.4rem;
  overflow: hidden;
}
.search-input-inline {
  position: fixed;
  top: 0;
  left: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 2.8rem;
  padding: 0.46rem 0.3rem 0.46rem;
  z-index: 205;
  background-color: #f5f5f5;
  -webkit-box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
}
.search-input-form {
  position: relative;
  height: 100%;
}
.search-input-form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;
}

.search-input-form .form-item {
  overflow: hidden;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  height: 2.15rem;
  background: #fff;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 0.05rem 3px rgba(0, 0, 0, 0.02) inset,
    0 2px 4px rgba(0, 0, 0, 0.15) inset, 0 0 0 0.05rem rgba(0, 0, 0, 0.1) inset,
    0 0.05rem 0.05rem 0 hsla(0, 0%, 100%, 0.1);
  box-shadow: inset 0 0.05rem 3px rgba(0, 0, 0, 0.02),
    inset 0 2px 4px rgba(0, 0, 0, 0.15), inset 0 0 0 0.05rem rgba(0, 0, 0, 0.1),
    0 0.05rem 0.05rem 0 hsla(0, 0%, 100%, 0.1);
  color: #333;
}
.search-input-form .form-item {
  height: 2rem;
  border-radius: 0.8rem;
}
.search-input-form .search-btn {
  position: absolute;
  left: 0;
  top: 0;
  background: url("../assets/images/search.png") no-repeat;
  background-size: 0.7rem 0.7rem;
  background-position: 50% 50%;
  height: 2rem;
  width: 2rem;
  -webkit-transition: none;
  transition: none;
}
.search-input-form .form-item input.pblur {
  opacity: 0.7;
}

.search-input-form .form-item .input-box {
  font-size: 0.65rem;
  height: 100%;
  padding-left: 1.8rem;
  padding-right: 1.7rem;
}
.search-input-form .form-item input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 0.65rem;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.7rem;
}
.form-item input {
  color: #333;
}
input {
  border: 0;
  outline: none;
}
.form-item figure{
    position: absolute;
    top: 0;
    right: 0;
    width: 1.6rem;
    height: 100%;
    margin: 0;
    text-indent: -999999px;
    cursor: pointer;
}
.form-item figure::before {
    right: .4rem;
}
.form-item figure::before {
    position: absolute;
    content: "";
    top: 50%;
    right: .65rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: .9rem;
    height: .9rem;
    background: url('../assets/images/close.png') no-repeat;
    background-size: .9rem;
}
.search-input-form .cancel {
  position: relative;
  font-size: 0.65rem;
  font-weight: 700;
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  margin-left: 0.6rem;
  color: #626262;
}
.search-input-form .cancel::before {
  position: absolute;
  top: 0;
  bottom: -41.85714%;
  left: 0;
  right: -42.85714%;
  content: "";
  border: 1px solid #d7d7d7;
  border-radius: 0.3rem;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.search-input-inline::after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #cecece;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.search-matching-wrap {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 2.8
  rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f8f8f8;
  z-index: 100;
  overflow: scroll;
}
.search-matching-wrap li {
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.0rem;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 0.9rem 0;
  color: #333;
}
.search-matching-wrap li:after {
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
.hot-list {
  padding: 0 0.5rem;
}
.hot-list h4 {
  font-size: 0.7rem;
  line-height: 0.75rem;
  color: #8e8e8e;
  font-weight: 400;
  padding: 1.2rem 0 0.75rem 0.35rem;
}
.hot-list li.color-0,
.hot-list li.color-5 {
  color: #cd3f36;
  background-color: #ffe7e5;
}
.hot-list li {
  position: relative;
  font-size: 0.6rem;
  font-weight: 700;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0 16px 0;
  opacity: 1;
  -webkit-transition: opacity 0.15s ease-out;
  transition: opacity 0.15s ease-out;
  text-align: center;
  border-radius: 0.8rem;
  color: #696969;
  margin: 0 4.16px 8.33px 0;
  color: #e78612;
  background-color: #fff7e4;
}
.hot-list li.color-0::before,
.hot-list li.color-5::before {
  border: 1px solid #f1948c;
}
.hot-list li::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: -42.85714%;
  left: 0;
  right: -42.85714%;
  border: 1px solid #ffca6d;
  border-radius: 1.8rem;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
</style>