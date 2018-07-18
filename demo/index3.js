const http = require('http')

class application{
  constructor() {
    this.callback = () => {}
  }

  use(callback) {
    this.callback = callback
  }

  listen(...args) {
    const server = http.createServer((req,res) => {
      this.callback(req, res)
    })
    server.listen(...args)
  }
}

module.exports = application