// let weux = {};
// // 这次换成一个对象类型的缓存列表
// weux.list = {
//     // 存着很多回调的函数 保存着回调函数队列，不执行，异步队列
//     setSearchText: [() => { }],
// };
// // 监听帮助存着回调函数
// weux.on = function (key, fn) {
//     if (!this.list[key]) {
//         this.list[key] = [];
//     }
//     this.list[key].push(fn);
// };
// // 触发
// weux.emit = function (key, param) {
//     let fns = this.list[key];
//     if (!fns || fns.length === 0) {
//         return false;
//     }
//     fns.forEach(fn => {
//         fn(param);
//     });
// };

class Observer {
    constructor() {
        this.list = {};
    }
    // 原型链上
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    }
    emit(key, param) {
        let fns = this.list[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        fns.forEach(fn => {
            fn(param);
        });
    };
}

export default new Observer()