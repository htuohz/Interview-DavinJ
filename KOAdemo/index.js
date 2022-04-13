'use strict';
const Koa = require('koa');
const app = new Koa();
//Middleware == 洋葱的层
app.use(async(ctx, next) => {
    ctx.tex = "Hello"; // request //text不是api是临时加的properties
    await next(); // 洋葱的下一层 app.use自动识别下一个app.use
    ctx.body += "!"; // response
});

app.use(async(ctx, next) => {
    ctx.tex = "Hello"; // request //text不是api是临时加的properties
    await next(); // 洋葱的下一层 app.use自动识别下一个app.use
    ctx.body += "!"; // response
});

app.use(async (ctx, next) =>{
    ctx.body = `${ctx.tex}, World`
});

app.listen(3001);