'use strict';
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');


const app = new Koa();
const userRouter = new Router();
const users = {
    kitty: {
        name: 'Kitty',
        age: 3
    },

};
// query ?user=userA是http下的功能    // /:name是基于restful api框架下面的写法 koa正是restful api
userRouter.get("/user/:name", async ctx => {
    const { name } = ctx.params;
    console.log(ctx.params); // restful
    console.log(ctx.query); // http
    if (users[name]) {
        ctx.body = users[name];
    }else {
        ctx.status = 404;
        ctx.body = {
            message: `${name} not found!`
        }; //ctx.body会将object识别为json 字符识别为string //比看文档更好的方法是看源代码
    }
    
});

userRouter.post("/user", async ctx => {
    const user = ctx.request.body;
    users[user.name] = user;
    ctx.status = 201; //所有新增的数据都在内存里面，如果重启node index1.js新增数据消失
});

userRouter.put("/user/:name", async ctx => {
    const user = ctx.request.body;
    const { name } = ctx.params;
    users[name] = user;
    ctx.status = 200; //所有新增的数据都在内存里面，如果重启node index1.js新增数据消失
});

userRouter.delete("/user/:name", async ctx => {
    const {name} = ctx.params;
    delete users[name];
    ctx.status = 200;
});


//只有app.use有顺序，其他代码无顺序一说
app.use(bodyParser()); //注册router之前用body parser 
app.use(userRouter.routes()); //注册router的地方

app.listen(3000);




