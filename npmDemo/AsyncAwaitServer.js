"use strict";

const fs = require("fs");


function readFile(filename, encoding) {
    const fn = (resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) =>
        {
        if (!err) {
            resolve(data);
        }else {
            reject(err);
        }
     });
    };
    return new Promise(fn);
}

(async ()=>{
    const content = await readFile('./roomTemperature/v116.json', 'utf8');
    const obj = JSON.parse(content);
    obj.feeds.forEach(feed => {
        let Temp116 = {
            time: feed.created_at,
            value: feed.field2,
        }
        console.log(Temp116);
    });
})();

(async ()=>{
    const content = await readFile('./roomTemperature/v131.json', 'utf8');
    const obj = JSON.parse(content);
    obj.feeds.forEach(feed => {
        let Temp131 = {
            time: feed.created_at,
            value: feed.field2,
        }
        console.log(Temp131);
    });
})();

(async ()=>{
    const content = await readFile('./roomLight/v110.json', 'utf8');
    const obj = JSON.parse(content);
    obj.feeds.forEach(feed => {
        let Light110 = {
            time: feed.created_at,
            value: feed.field2,
        }
        console.log(Light110);
    });
})();

(async ()=>{
    const content = await readFile('./roomLight/v111.json', 'utf8');
    const obj = JSON.parse(content);
    obj.feeds.forEach(feed => {
        let Light111 = {
            time: feed.created_at,
            value: feed.field1,
        }
        console.log(Light111);
    });
})();

(async ()=>{
    const content = await readFile('./PIR/v116.json', 'utf8');
    const obj = JSON.parse(content);
    obj.feeds.forEach(feed => {
        let PIR116 = {
            time: feed.created_at,
            value: feed.field1,
        }
        console.log(PIR116);
    });
})();

(async ()=>{
    const content = await readFile('./PIR/v131.json', 'utf8');
    const obj = JSON.parse(content);
    obj.feeds.forEach(feed => {
        let PIR131 = {
            time: feed.created_at,
            value: feed.field1,
        }
        console.log(PIR131);
    });
})();