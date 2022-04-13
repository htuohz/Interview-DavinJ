//nodejs api文档里面2/3 不需要了解
'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const LRU = require('lru-cache');     
const assert = require('assert');
const fetch = require('node-fetch');
//Terminal 创建heroku以及拉动remote后： heroku config:set APPID=fe83142bf56cee180b612645d1d1aae6
const APPID = process.env.APPID;//想法子写到操作系统的环境变量里面 eg: Terminal里的 export APPID=fe83142bf56cee180b612645d1d1aae6
//然后用到node的REPL的process.env.APPID来安全的得到系统的环境变量 //process 无需require
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const isHeroku = !!process.env.HEROKU; // !!强行让string成为bool //云部署平台1.Heroku 2.digitalOcean 3.Linode 4.AWS
assert(APPID, 'APPID must be set before use!');

const weatherRouter = new Router();
// free for 60 requests per seconds, so we need to cache the response data to save money
//const cache = new Map(); //JavaScript内部自带了对象Map；

const maxAge = isHeroku ? 60000 * 60 : 5000 

const cache = new LRU({
    maxAge,
    max:100
});
weatherRouter.get('/:city', async(ctx)=>{
    const { city } = ctx.params;
    if(cache.peek(city)){
        ctx.body = cache.get(city);
        console.log('fetch weather data from local cache!');
        return;
    } 

    const requestURL = `${weatherUrl}?q=${city}&appid=${APPID}`;
    const res = await fetch(requestURL);
    console.log('fetch weather data from remote server!');
    if(res.ok) {

        const weatherContent = await res.json();
        cache.set(city,weatherContent); //将远端服务器拿到的数据放到缓存里面
        ctx.body = weatherContent;
    }else{
        if(res.status === 404) {
            ctx.body = {
                message: `${city} not found! Please ensure the city name is correct!`
            };
            ctx.status = 404;
        }

        if(res.status === 500) {
            ctx.body = {
                message: `Service is not available now, please try again later!`,
                errorCode: 123456 //暗号
            };
            ctx.status = 200;
        }

    }
    console.log(res);
});


const app = new Koa();

app.use(weatherRouter.routes());

if (isHeroku) {
    assert(process.env.PORT, "PORT must exist");
}
const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=>{
    console.log(`App listens on PORT: ${PORT}`);
});