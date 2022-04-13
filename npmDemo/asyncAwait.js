'use strict';
const fs = require ('fs');
//看一看23课时的后面
//callback定义：
//狭义的就是第一个参数是error
//callback, fn=(err,data)=>{};
//反例 fs的exists的函数签名  //很久前写的 很多人骂它
//广义上 一旦一个函数接受一个参数成为callback那就是callback
//eg: array.map(fn); //不需要第一个参数是err参数
function readFile(filename, encoding) {
    const fn = (resolve, reject)=>{
      fs.readFile(filename,encoding,(err, data)=>{
            if(!err){
                resolve(data);
            }else {
                reject(err);
            }
        }); 
    };
    return new Promise(fn); //promise是v8引擎的全局对象了，不需要库 
}
(async ()=>{
    try{
        const content = await readFile('./text.txt', 'utf8');
        console.log(content);
        console.log('readFile submitted!');
    }catch(err){
        console.log(err);
    }
})();

// promise and callback 不能用try catch 因为是JavaScript原生的    但是await promise.all ok 
// 因为try只能针对同步的作用域