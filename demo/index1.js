/**
 * Created by Administrator on 2018/7/18.
 */
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  ctx.body = 'hello koa2'
})

app.listen(3000, function () {
  console.log('启动3000端口')
})