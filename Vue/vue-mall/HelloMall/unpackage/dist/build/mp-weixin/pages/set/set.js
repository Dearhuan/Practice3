(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"09f5":function(t,n,e){"use strict";var o=e("a145"),u=e.n(o);u.a},"0e57":function(t,n,e){"use strict";e.r(n);var o=e("cf11"),u=e("4e1b");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("09f5");var r=e("2877"),a=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports},"1e07":function(t,n,e){"use strict";(function(t){e("c370"),e("921b");o(e("66fd"));var n=o(e("0e57"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"4e1b":function(t,n,e){"use strict";e.r(n);var o=e("b5fc"),u=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=u.a},a145:function(t,n,e){},b5fc:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r={data:function(){return{}},methods:u({},(0,o.mapMutations)(["logout"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=r}).call(this,e("543d")["default"])},cf11:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})}},[["1e07","common/runtime","common/vendor"]]]);