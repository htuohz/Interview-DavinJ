"use strict";

const Koa = require("koa");
const { oas } = require("koa-oas3");
const path = require('path');
//const  oas  = require('koa-oas3').oas;
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const cors = require('@koa/cors');
//mongoose.connect('mongodb://localhost:27017/booking_demo', { useNewUrlParser: true, useUnifiedTopology: true }); //localhost:27017 决定了你要连接的database server是哪一个
//敏感信息不能放上面
const DATABASEURL = process.env.DATABASE_URL ? process.env.DATABASE_URL : 'mongodb://localhost:27017/booking_demo';
mongoose.connect(DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true });




//其他的mongodb的库是要将connect的链接写到connect的回调函数里面的 mongoose服务启动就自动connect因为
//绑定端口前已经发起了请求
const router = require("./router");
//数据模型定义：restful == state    mongoDB == collections     mongoose == model  不是写代码的过程 是经验总结和业务逻辑的需要
const app = new Koa();

app.use(
    oas({
      endpoint: "/openapi.json", //endpoint决定了yaml文件的json形式该被如何访问
      file: path.resolve(process.cwd(), "openapi.yaml"), //指定openapi specification的文件的地址
      uiEndpoint: "/oas", //访问那一个地址能看到openapi的界面
      validatePaths: ["/else"]  //生产模式下写需要校验的routers
    })
  );
// async function permissionCheck (ctx, next) {
//     if(true){
//         await next();
//     }else {
//         ctx.body = {
//             message: "No permission"
//         }
//         ctx.status = 403;
//     }
// }
// app.use(permissionCheck); //api健全
app.use(bodyParser()); //bodyParser要指定数据类型 //router注册之前用bodyparser // KOA的use是有先后顺序的
app.use(cors());
app.use(router.routes());


app.listen(process.env.PORT || 3000);


//self 配置docker不是很好吗？
//答：数据库跟用什么服务器或docker没有关系， 数据库得使得数据存储下来。
//要存储下来的话很多的云服务器提供商eg:heroku 无法确保数据是可用的 
//如果要self搭建一个数据库的话，under当今的云服务的厂商下其实是挺困难的
//起一个数据库简单 就用docker在heroku上make一个数据库 非常简单
//但是如何要数据库的数据persistent持久化且reliable？ 这很难
//像很多容器型的云服务商是绝对没有能力实现的 因为每一次deployment都会重新分配容器
//尤其像docker类似的容器，我每一次deployment后他就请求新的容器 它的数据就全丢了
//以上情况的容器称为stateless的容器； 我们现在写的此份restful api此套node服务都是stateless
//特点是一旦服务器deploy 以前的所有的服务器上的数据都没有了
//不能信任它的磁盘

//如何persistent数据？ 用云服务商 将数据已经提供好了 //一个就是数据库，用提供好的数据库,让它来持续化
//self搭建数据库然后让数据持久化的方案：
//亚马逊的s3可以存储持久化的文件
//数据库finally存到磁盘上的东西就是数据库文件啊
//数据库文件不能存放于云服务商的container而是存放于s3
//每一次新插入记录 我需要和s3同步一次 我要决定同步的频率
//数据存到数据库 //文件电影，附件，图片，文档存到s3 //写项目的时候就将material 存于s3返回链接后
//引入链接
