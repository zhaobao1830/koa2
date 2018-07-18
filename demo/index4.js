const Koa3 = require('./index3')
const app = new Koa3()

app.use((req,res) => {
  res.writeHead(200)
  res.end('hello Koa3')
})

app.listen(3003, function () {
  console.log('启动3003端口')
})