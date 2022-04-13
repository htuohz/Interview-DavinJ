'use strict'; //v8 engine to restrict bad parts of javascript //node调参数后所有nodejs代码都要启动严格模式；或者局部启动严格模式
const fs = require('fs'); // Common JS
// fs的第一个参数向操作系统的磁盘读取文件，第二个参数是nodejs发起的把读取的数据流utf8
const content = fs.readFile('./text.txt','utf8',(err, data)=>{ //callback 的err是默认在第一个参数，实际数据在第二个参数
    if(!err){
        console.log(data);
    }else {
        console.log(err);
    }
}); //readFileSync代码是一行一行的 会被阻塞
//对于那些系统写好的function光看名字我是无法判断它是异步还是同步,必须看文档
// function hello () {
//     console.log('hello');
// }
// function say (fn) {
//     process.nextTick(fn);
// }

// say(hello);

console.log('readFile submitted!'); //buffer是二进制流数据 nodejs刚从磁盘上读出来的 // toString的默认参数是utf8



