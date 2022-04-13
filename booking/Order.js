const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    price: Number,
    status: String
});

module.exports = mongoose.model('Order', OrderSchema); 
//社区规范就是model的名字首字母大写，文件名字大写
//以上是model的定义




/**
 *  Order
 * 
 * {
 *  price: Number,
 *  status: String
 * }
 * 
 */


 //为mongodb是shemaless（无model）我现在还需要在这里定义model？
 //实例化
 //我们现在写api的理论依据是restful，restful的核心是的概念是state  以及其操作
 //所以我们要分析出Schema来
 //技术可没有Schema 业务逻辑需要Schema