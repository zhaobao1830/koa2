const Koa3 = require('./index7')
const app = new Koa3()

app.use(async (ctx) => {
  ctx.body = 'hello Koa2 '+ ctx.url
})

app.listen(3003, function () {
  console.log('启动3003端口')
})