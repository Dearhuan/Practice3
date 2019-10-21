/* ------------JQuery中的链式调用基本实现原理------------------ */
let $ = {
  css() {
    console.log('css');
    return this;
  },
  show() {
    console.log('show');
    return this;
  },
  html() {
    console.log('html');
    return this;
  },
  click() {
    console.log('click');
    return this;
  },
  animate() {
    console.log('animate');
    return this;
  }
}

// $.css().html().show().click().animate();


//为什么return this？
  //如果没有加上return this语句的话，那么执行完一个函数之后，会默认返回undefined，这个是js内部自己隐式添加的。返回undefined的时候，再调用另一个方法肯定就会报错，因为undefined是没有方法的。

//this的指向
  //因为在一个对象里面，this指向的是对象本身，而我们连续调用方法的时候，这些方法都是在对象内部定义的，所以this是可以访问到这些方法。

/* ------------------------异步编程的改进写法------------------------------------- */
//1.异步的回调地狱写法
/* function ajax(callback) {
  setTimeout(()=> {
      // console.log('hello');
      callback();
  }, 500)
}
ajax(() => {
  console.log('回调第1次')
  ajax(()=>{
      console.log('回调第2次')
      ajax(()=>{
          console.log('回调第3次')
          ajax(()=>{
              console.log('回调第4次')
          })
      })
  })
}); */

//2.通过Promise的的.then()方法实现异步
/* function delay(word) {
  return new Promise((resolve, reject) => {
      setTimeout(()=>{
          resolve(word)
      }, 500)
  })
}

delay('异步:No.1')
  .then((word)=>{
      console.log(word)
      return delay('异步:No.2')
  })
  .then((word)=>{
      console.log(word)
      return delay('异步:No.3')
  })
  .then((word) => {
      console.log(word)
  })
  .catch
console.log('同步先执行'); */

//3.使用Promise+async+await解决回调地狱，让异步操作变得同步化
function delay(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(word)
    }, 500)
  })
};

async function start() {
  const word1 = await delay('异步:No.1')
  console.log(word1)
  const word2 = await delay('异步:No.2')
  console.log(word2)
  const word3 = await delay('异步:No.3')
  console.log(word3)
};
start();



/* ---------------------ajax和axios的区别------------------------------ */
/* jQuery中的ajax是基于原生XMLhttprequest请求的封装；
   Axios是基于Promise对ajax的二次封装 */

/* $.ajax({
  url: 'http://jsonplaceholder.typicode.com/users',
  type: 'get',
  dataType: 'json',
  data: {
    //'a': 1,
    //'b': 2,
  },
  success: function (response) {
    console.log(response);
  }
});

axios({
  url: 'http://jsonplaceholder.typicode.com/users',
  method: 'get',
  responseType: 'json', // 默认的
  data: {
      //'a': 1,
      //'b': 2,
  }
}).then(function (response) {
  console.log(response);
  console.log(response.data);
}).catch(function (error) {
  console.log(error);
}); */