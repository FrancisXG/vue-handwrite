import { observe } from "./observer/index"

export function initState(vm){
  // vm.$options
  const opts = vm.$options
  if(opts.props){
    initProps(vm)
  }
  if(opts.methods){
    initMethods(vm)
  }
  if(opts.data){
    initData(vm)
  }
  if(opts.computed){
    initComputed(vm)
  }
  if(opts.watch){
    initWatch(vm)
  }

}

function initProps(){}
function initMethods(){}
function initData(vm){
  let data = vm.$options.data
  data = typeof data =='function'?data.call(vm):data

  // 数据的劫持方案，对象object.defineProperty
  // 数组 单独处理的
  observe(data)
  

}
function initComputed(){}
function initWatch(){}
