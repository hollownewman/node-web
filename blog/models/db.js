// // var settings = require('../settings'),
// // Db = require('mongodb').Db,
// // Connection = require('mongodb').Connection,
// // Server = require('mongodb').Server;
// // module.exports = new Db(settings.db,new Server(settings.host,settings.port),{safe:true});

// var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://localhost:27017/gomall'; # 数据库为 runoob
 
// var insertData = function(db, callback) {  
//     //连接到表 site
//     var collection = db.collection('site');
//     //插入数据
//     var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
//     collection.insert(data, function(err, result) { 
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }     
//         callback(result);
//     });
// }
 
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     insertData(db, function(result) {
//         console.log(result);
//         //db.close();
//     });
// });

var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/gomall';

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});