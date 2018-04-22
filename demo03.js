const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  //当请求时GET请求时，显示表单让用户填写
  if (ctx.url==='/' && ctx.method === 'GET') {
    let html = `
      <h1>Koa2 request post demo</h1>
      <form method="POST" action="/">
         <p>userName</p>
         <input name="userName" /><br/>
         <p>age</p>
         <input name="age" /><br/>
         <p>webSite</p>
         <input name='webSite' /><br/>
         <button type="submit">submit</button>
      </form>
    `
    ctx.body = html;
    // post请求
  } else if (ctx.url=== '/' && ctx.method=== 'POST') {
    let postData = await parsePostData(ctx)
    ctx.body = postData
  }else{
    // 其他请求
    ctx.body = '<h1>404!</h1>'
  }
})
function parsePostData (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = ''
      ctx.req.on('data',(data) => {
        postData += data
      })
      ctx.req.on('end',function () {
        let parseData = parseQueryStr(postData)
        resolve(parseData)
      })
    }catch(error) {
       reject(error)
    }
  })
}
function parseQueryStr(queryStr){
  let queryData={};
  console.log(queryStr)
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);
  console.log('ppppppppppp')
  console.log(queryStrList.entries())
  console.log('.............')
  for( let [index,queryStr] of queryStrList.entries() ){
    let itemList = queryStr.split('=');
    console.log(itemList);
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData
}
app.listen(3000,()=>{
  console.log('[demo] server is starting at port 3000');
})
