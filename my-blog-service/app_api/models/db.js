var mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'test',
    password:'123'
});

var query = function(sql,arr,callback){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
            return  ;
        }
        connection.query(sql,arr,function(error,result){
            if(error){
                throw error;
            } else{
                callback && callback(result);
            }
            pool.releaseConnection(connection);
        })
    })
};

module.exports.query = query;