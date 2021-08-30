class Observer {
  constructor(value) {
    this.walk(value)
  }
  walk(data) {
    let keys = Object.keys(data)
    keys.forEach(key => {
      defineReactive(data, key, data[key])
    })
  }

}
function defineReactive(data, key, value) {
  // defineProperty(obj,prop,{})
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      console.log("访问")
      return value
    },
    set(newVal) {
      console.log("修改")
      if (newVal == value) return
      observe(newVal)
      value = newVal
    }

  })
}

export function observe(data) {
  if (typeof data !== 'object' || data == null) return
  return new Observer(data)
}

