const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

let home = new Router()
home.get('/zb', async(ctx)=>{
  ctx.body = 'hello zb1'
}).get('/zy', async(ctx)=>{
  ctx.body = 'hello zy1'
})

let page = new Router()
page.get('/zb', async(ctx)=>{
  ctx.body = 'hello zb2'
}).get('/zy', async(ctx)=>{
  ctx.body = 'hello zy2'
})

// 加载所有子路由
let router = new Router()
router.use('/home',home.routes(),router.allowedMethods())
router.use('/page',page.routes(),router.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods)

app.listen(3000, () => {
  console.log('starting at 3000')
})
