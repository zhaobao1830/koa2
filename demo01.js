/**
 * Created by Administrator on 2018/4/18.
 */

function getSomething(){
  return 'something';
}

async function testAsync(){
  return 'Hello async';
}

async function test(){
  const v1=getSomething();
  const v2=testAsync();
  console.log(v1,v2);
}

test();