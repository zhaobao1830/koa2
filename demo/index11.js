const http = require('http')

//req是http模块里的
let request = {
  get url () {
    return this.req.url
  }
}

let response = {
  get body () {
    return this._body
  },
  set body (val) {
    this._body = val
  }
}

// 把上面定义的request和response挂载到context对象中
let context = {
  get url () {
    return this.request.url
  },
  get body () {
    return this.response.body
  },
  set body (val) {
    this.response.body = val
  }
}


class application{
  constructor() {
    // 把上面定义的context，request，response挂载到application中
    this.context = context
    this.request = request
    this.response = response
    this.middlewares = []
  }

  use(callback) {
    this.middlewares.push(callback)
    // this.callback = callback
  }
  compose (middlewares) {
    return function (context) {
      return dispatch(0)

        function dispatch(i) {
          let fn = middlewares[i]
          if(!fn) {
            return Promise.resolve()
          }
          // 这俩行是compose的核心代码
          return Promise.resolve(fn(context, function next() {
            return dispatch(i+1)
          }))
        }
    }
  }
  listen(...args) {
    const server = http.createServer(async (req, res) => {
      let ctx = this.createCtx(req,res)
      const fn = this.compose(this.middlewares)
      await fn(ctx)
      ctx.res.end(ctx.body)
    })
    server.listen(...args)
  }
  createCtx (req, res) {
    let ctx = Object.create(this.context)
    ctx.request = Object.create(this.request)
    ctx.response = Object.create(this.response)
    // 把http里的req赋值给ctx.request的req和ctx.req上
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.req = res
    return ctx
  }
}

module.exports = application