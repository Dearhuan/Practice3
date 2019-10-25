import Vue from 'vue'
import Vuex from 'vuex'

//显示调用
Vue.use(Vuex);

//定义一个state用来存放状态
const state = {
  showFooter: true,
  changebleNum: 0
};

//给store定义一个获取state的方法
const getters = {
  isShow(state){
    return state.showFooter    //是否显示
  },
  getChangedNum(){
    return state.changebleNum
  }
};

//定义设置state的mutations方法
const mutations = {
  show(state){
    state.showFooter = true
  },
  hide(state){
    state.showFooter = false
  },
  setNum(state,sum){
    state.changebleNum += sum;
  }
};

const actions = {
  hideFooter(context){
    context.commit('hide');
  },
  showFooter(context){
    context.commit('show');
  },
  getNewNum(context,num){
    context.commit('setNum',num)
  }
}

//实例一个仓库
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;