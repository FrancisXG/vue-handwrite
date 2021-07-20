(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  // vue核心代码 只是vue的一个声明
  function Vue(options) {
    // 进行vue的初始化操作
    this._init(options);
  }

  Vue.prototype._init = function () {}; // 通过引入文件的方式，给vue原型上添加方法

  return Vue;

})));
//# sourceMappingURL=vue.js.map
