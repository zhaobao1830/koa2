const Koa3 = require('./index11')
const app = new Koa3()

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

app.use(async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '2'
})

app.use(async (ctx, next) => {
  ctx.body += '3'
  await delay()
  await next()
  ctx.body += '4'
})

app.use(async (ctx, next) => {
  ctx.body += '5'
})

app.listen(3003, function () {
  console.log('启动3003端口')
})