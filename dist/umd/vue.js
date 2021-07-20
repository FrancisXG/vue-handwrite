(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  function observe(data) {
    console.log(data);
  }

  function initState(vm) {
    // vm.$options
    var opts = vm.$options;

    if (opts.props) ;

    if (opts.methods) ;

    if (opts.data) {
      initData(vm);
    }

    if (opts.computed) ;

    if (opts.watch) ;
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = typeof data == 'function' ? data.call(vm) : data; // 数据的劫持方案，对象object.defineProperty
    // 数组 单独处理的

    observe(data);
  }

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      vm.$options = options;
      /* 
      vue组件中有很多状态，data props watch computed    
      */
      // 初始化状态（将数据做一个初始化的劫持，当我改变数据时应该更新视图）

      initState(vm); // vue里面核心特性，响应式数据原理
      // vue 是一个什么样的框架 MVVM

      /* 
      数据变化视图会更新，视图变化数据会被影响
      MVVM不能跳过数据去更新视图
      $ref 直接操作DOM
        
      */
    };
  }

  function Vue(options) {
    this._init(options);
  } // 写成一个个的插件进行对原型的扩展


  initMixin(Vue); // 初始化方法

  return Vue;

})));
//# sourceMappingURL=vue.js.map
