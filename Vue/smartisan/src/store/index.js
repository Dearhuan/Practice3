import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isLogin: false,
    isBuyNow: false,
    isAddToCart: false,
    isEdit: false,
    payMethod: 0
  },
  getters:{
    isLogin: state => state.isLogin,
    isBuyNow: state => state.isBuyNow,
    isAddToCart: state => state.isAddToCart,
    isEdit: state => state.isEdit,
    payMethod: state => state.payMethod
  },
  mutations:{
    isLogin(state,msg){
      state.isLogin = msg;
      // this.setToken('isLogin',msg);
      localStorage.setItem('isLogin',JSON.stringify(msg));
    },
    isBuyNow(state,msg){
      state.isBuyNow = msg;
    },
    isAddToCart(state,msg){
      state.isAddToCart = msg;
    },
    isEdit(state,msg){
      state.isEdit = msg;
    },
    payMethod(state,msg){
      state.payMethod = msg;
    }
  }
 /*  actions:{
    setUser({commit},flag){
      commit('userStatus',flag)
    }
  } */
})