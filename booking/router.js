"use strict";

const Router = require("koa-router");
const assert = require('assert');
const Order = require('./Order');
const { AssertionError } = require("assert");
const mongoose = require("mongoose");
const HttpError = require('koa').HttpError;
const createError = require('http-errors');


const router = new Router();
router.get("/", async ctx => {
    ctx.body = "Hello";
});


router.get("/order/:page/:pageSize", async ctx => {
    //前端的上一页 下一页就是page+1 page-1 重新render一下
    //total page也要传前端 // 100页 1。2。3 。。。 99，100 end /jump to page 
    let {page, pageSize} = ctx.params; // let和const不能被重复定义
    page = +page;
    pageSize = +pageSize;
    const skip = (page -1) * pageSize; //隐藏不查看的页面
    const total = await Order.find().count();
    //By adding a + sign before a String, it will be converted into a number if it follows the right format.
    const res = await Order.find({},{}).skip(skip).limit(pageSize);
    //skip()确定所处的page 根据某一个间隔limit（） 跳过内容
    ctx.body = {
        results: res,
        total,
    }; 
});

//POST GET PUT DELETE


router.post("/order", async (ctx) => {
    try {
        const body = ctx.request.body;
        // assert(body !== {}, 'request body must exist!');
        assert(body.price !== undefined, 'price must exist!');
        assert(body.status !== undefined, 'status must exist!');
        //id格式
        //await Order.insertOne(body); //下面2行
        const order = new Order(body);
        const res = await order.save(); //save()底层包含了insert（）和update（） 

        ctx.body={
            message: "Created",
            id: res._id,
        }
        ctx.status = 201;
    } catch (err) {
        if(err instanceof AssertionError) {
            ctx.body = err.message;
            ctx.status = 400;
        }
    }
});

// router.post("/batch/order", async ctx => {
    
// });
//从json对象改成了array对象
router.post("/bulk/order", async ctx => {
    // if (body.length==0){
    //     throw createError(400,`body must not be empty`);
    // }
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
  
        const orders = ctx.request.body;
        // const ids = [];
        //并行
        const saveOrders = orders.map(order=>{
            const newOrder = new Order(order);
            return newOrder.save();
        });
        //并发保存后的结果
        const res = await Promise.all(saveOrders); //await 实现了所有orders一起同时传到mongoDB
        ctx.body = {
            message: "Created",
            ids: res.map(r => r._id)
        }; 


//串行
/*
    for (const order of orders) {
        const newOrder = new Order(order);
        const res = await newOrder.save();
        ids.push(res._id);
    }

    ctx.body = {
        message: "Created",
        ids
    }
*/
});

router.get('/order/:id', async ctx=>{
    try{
        const { id } = ctx.params;
        assert(id, "id must exist!");
        //id格式
        const res = await Order.findOne({
            _id: new mongoose.Types.ObjectId(id) 
        });

        if(res){
            ctx.body = res;
        }else{
            ctx.body = {
                message:`${id} not found`
            };
            ctx.status = 404;
        }
    }catch(err) {
        if(err instanceof AssertionError) {
            ctx.body = err.message;
            ctx.status = 400;
        }
    }
       

    
});

// Middleware refer to koa-demo index.js
// function expandIds (ctx, next){
//     const { ids } = ctx.params;
//     ctx.params.ids = ids.split(',');
//     return next(); //koa 使得 next的结果一定返回promise 
        //不需要response就用了return next（）洋葱的左面
// }

async function errorHandler (ctx, next) {
    try{
        await next();
    }catch(err){
        if(err instanceof HttpError) {
            ctx.body = {
                message: err.message
            };
            ctx.status = 400;
        }else{
            console.log(err);
            ctx.body = {
                message: "Internal Server Error"
                 //服务器错误写的越笼统越好，不能外漏细节
            };
            ctx.status = 500;
           
        }
    }
}

async function expandIds (ctx, next){
    let { ids } = ctx.params;
    ids = ctx.params.ids = ids.split(',');
    //以上的代码在http request到达服务器后 但是被router async ctx=>{}真正处理前的处理
    //ctx是在此请求的生命周期里面是single instance单例 就是在一个请求的生命周期 
    //lifecycle：在http请求内 一个request到达服务器被处理再产生一个response 回到client的完整的一个大循环
    //request 区域
    for (let i = 0; i < ids.length; i++) {
        try{
            new mongoose.Types.ObjectId(ids[i]);
        }catch(err){
            throw createError(400,`id: ${ids[i]} ${err.message}`);
        }
        for (let j = 0; j < ids.length; j++) {
            if( i===j ) {
                continue; //略过当前循环,do nothing,跳到下一次循环
            }else{
                if(ids[i] === ids[j]){
                    throw createError(400,`ids: ${ids[i]} should not duplicated!`);
                }
            }
        }
    }
    //它的执行顺序为由外到内，外层循环执行一次，内层循环将完整的执行一次。
    //外层循环内的循环体执行完后，返回外层循环继续执行，直到外层循环结束。
    await next(); //下一个中间件
    // response 区域
    // ctx.body = 从router里面取
}

//'abc,cde,fgh'
router.get("/bulk/order/:ids", errorHandler, expandIds, async ctx => { //请求到达ctx前会被expandIds处理
    const { ids } = ctx.params;
    // console.log(ids);
    // console.log(typeof ids);
    // console.log(Array.isArray(ids));
    const res = await Order.find(
        {
            "_id":{"$in": ids.map(id => new mongoose.Types.ObjectId(id))}
        });

        if (res.length > 0) {
            for (const r of res) {
                const id = r["_id"].toString();
                const index = ids.indexOf(id);
                ids.splice(index, 1);
            }
            ctx.body = {
                results: res,
                notFound: ids
            };
        }else{
            ctx.body = {
                message:`${ids} not found` 
            };
            ctx.status = 404;
        }
       
});
router.delete('/order/:id', async ctx=>{
    try{
        const { id } = ctx.params;
        assert(id, "id must exist!");
        //id格式
        const res = await Order.deleteOne({
            _id: new mongoose.Types.ObjectId(id) 
        });
            ctx.body = res;
   
    }catch(err) {
        if(err instanceof AssertionError) {
            ctx.body = err.message;
            ctx.status = 400;
        }
    }
       

    
});
router.delete('/bulk/order/:ids',errorHandler, expandIds, async ctx=>{
    try{
        const { ids } = ctx.params;
        let res = [];
        for (const id of ids) {
            res.push(await Order.deleteOne({
                _id: new mongoose.Types.ObjectId(id) 
            }));
        }
        //id格式

            ctx.body = res;
   
    }catch(err) {
        if(err instanceof AssertionError) {
            ctx.body = err.message;
            ctx.status = 400;
        }
    }
       

    
});
router.put('/order/:id', async ctx=>{
    try{
        const { id } = ctx.params;
        assert(id, "id must exist!");
        const body = ctx.request.body;
        assert(body.price !== undefined, 'price must exist!');
        assert(body.status !== undefined, 'status must exist!');
        //id格式
        
        await Order.updateOne(
            { 
                _id: new mongoose.Types.ObjectId(id) 
            },
            body
        );
        ctx.body = {
            message: "Updated"
        };

        // const order = await Order.findOne({
        //     _id: new mongoose.Types.ObjectId(id) //先查询一次
        // });

        //upsert
        //404

    //     if(order){
    //        Object.assign(order, body);  //得到模型
    //        const newOrder = new Order(order);
    //        const res = await newOrder.save();
    //        console.log(res);
    //        ctx.body = {
    //            message: "Updated"
    //        };
    //     }else{
    //         ctx.body = {
    //             message:`${id} not found`
    //         };
    //         ctx.status = 404;
    //     }
    }catch(err) {
        if(err instanceof AssertionError) {
            ctx.body = err.message;
            ctx.status = 400;
        }
    }
       

    
});


//    批量可以使得多个数据递交给服务器 一次性处理 save resources 减少网络请求的往返 性能好
//    单个的话是一个一个递交给服务器 多次处理


router.put('/bulk/order/', async ctx=>{
    try{
        const documents = ctx.request.body;
        const res = [];
        for (const document of documents) {
            // assert(document.id !== undefined, 'id must exist!');
            if (!document.id){
                continue;
            }
            //id格式
    
            const order = await Order.findOne({
                _id: new mongoose.Types.ObjectId(document.id) //先查询一次
            });
    
            //upsert
            //404
    
            if(order){
              // delete document.id; 无需此行  看Order.js model的定义
               Object.assign(order, document);  //得到模型
               const newOrder = new Order(order);
               res.push(await newOrder.save());
          
            }
        }
        ctx.body = {
            updated: res
        };
    }catch(err) {
        if(err instanceof AssertionError) {
            ctx.body = err.message;
            ctx.status = 400;
        }
    }
       

    
});

module.exports = router;
