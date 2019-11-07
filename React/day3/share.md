一：Vue中的组件传值：

1.父传子：props；

2.子传父：$emit；

3.兄弟之间：Vuex；

4.另外一种：provide+inject

为什么使用provide+inject？       （一处注入，多处使用）

1. 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

```javascript
//App.vue 
provide(){
    return {
      reload: this.reload,
    }
  }

//cart.vue
inject: ['reload'],  //注入reload方法

methods:{
   gotoCheckout() {
      if (this.isEdit) {
        this.setToken('cart','');
        this.opacity = 1;
        // this.$router.push('/cart');   // 不刷新
        this.reload();       //调用reload方法刷新当前页面
      } else {
        this.$router.push("/checkout");
        console.log("gotoCheckout");
      }
    }   
 }
    
```

二：Vuex原理

为什么能实现所有的组件共享同一份数据？

因为vuex生成了一个store实例，并且把这个实例挂在了所有的组件上，所有的组件引用的都是同一个store实例。

store实例上有数据，有方法，方法改变的都是store实例上的数据。由于其他组件引用的是同样的实例，所以一个组件改变了store上的数据，

导致另一个组件上的数据也会改变，就像是一个对象的引用

```javascript
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
```

三：Dom和Virtual-Dom的区别

为什么要使用Virtual-DOM？                             jQuery->(Vue,React)

虚拟Dom不会进行排版与重绘操作

真实Dom频繁排版与重绘的效率是相当低

虚拟Dom进行频繁修改，然后一次性比较并修改真实Dom中需要改的部分，最后并在真实Dom中进行排版与重绘，减少过多Dom节点排版与重绘损耗

虚拟Dom有效降低的重绘与排版，因为最终与真实Dom比较差异，可以只渲染局部