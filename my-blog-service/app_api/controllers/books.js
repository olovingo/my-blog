var connection = require('../models/db')

var dictionary = require('../dictionary/dictionary')

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
//新建一个首页项目
module.exports.postLearn = function (req, res) {
    var params = req.body;
    var form = req.body.form;
    var sql = [
        'insert into homelist(type,subType,title,website,descrp,img)',
        'value("',
        params.type+'","',
        params.subType+'","',
        form.title+'","',
        form.website+'","',
        form.desc+'","',
        form.img+'")',
    ].join('');
    connection.query(sql,[],function(result){
        sendJSONresponse(res,200,{msg:'success'});
    })
}
//首页获取当前点击类型数据
module.exports.getLearn = function(req,res){
    var type = req.body.type;
    var sql = 'select * from homelist where type= "'+type+'"';
    connection.query(sql,[],function(result){
        var websiteList = [];
        var blogList = [];
        result.forEach(value => {
            if(value.subType == 'website'){
                websiteList.push(value)
            }else{
                blogList.push(value)
            }
        });
        var resData = {
            websiteList:websiteList,
            blogList:blogList
        }
        sendJSONresponse(res,200,resData);
    })
}
module.exports.newArticle = function(req,res){
    var params = req.body;
    var sql = [
        'insert into articles(title,content,createTime,type)',
        'value("',
        params.title+'","',
        params.content+'","',
        params.createTime+'","',
        params.type+'")',
    ].join('');
    connection.query(sql,[],function(result){
        sendJSONresponse(res,200,{msg:'success'});
    })
}
module.exports.getArticles = function(req,res){
    var type = req.body.type;
    var sql = 'select * from articles where type= "'+type+'"';
    connection.query(sql,[],function(result){
        sendJSONresponse(res,200,result);
    })
}
module.exports.getDetail = function(req,res){
    var id=  req.body.id;
    var sql = 'select * from articles where id='+id;
    connection.query(sql,[],function(result){
        sendJSONresponse(res,200,result);
    })
}