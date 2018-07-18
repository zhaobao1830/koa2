/**
 * Created by Administrator on 2018/7/18.
 */
const http = require('http')

const server = http.createServer((req,res) => {
  res.writeHead('200')
  res.end('hello node')
})
server.listen(3000, function () {
  console.log('启动了3000端口')
})