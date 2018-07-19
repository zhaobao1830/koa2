function add(x, y) {
  return x + y
}
function double(z) {
  return z*2
}

const middlewares = [add, double]
let len = middlewares.length
function compose(midds) {
  console.log('midds:'+midds)
   return (...args) => {
    console.log(...args)
     // 初始值
     let res = midds[0](...args)
     console.log(res)
     for (let i = 1; i < len; i++) {
       res = midds[i](res)
     }
     return res
   }
}
const fn = compose(middlewares)
const res = fn(1,2)
console.log(res)
