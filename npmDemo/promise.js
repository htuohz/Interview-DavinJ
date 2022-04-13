'use strict';
const fs = require ('fs');
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

readFile('./text.txt','utf8')
    .then(data=>{
        console.log(data);
    }).catch(err =>{
        console.error(err);
    });



console.log('readFile submitted!');