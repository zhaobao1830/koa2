const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router({
  prefix: '/zhaobao'
})

router.get('/', (ctx, next) => {
  ctx.body = 'hello zy'
})
router.get('/todo', (ctx, next) => {
  ctx.body = 'hello zb'
})

app
  .use(router.routes())
  // .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('starting at 3000')
})
