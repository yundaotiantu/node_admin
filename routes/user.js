
const mysql = require("mysql");

//2.创建连接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"cent",
    port:3306,
    connectionLimit:25
})




//3.登录
exports.login = function(req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    var user = {
        uname: uname,
        upwd: upwd
    };
    var sql = " SELECT * FROM ct_user WHERE uname=? AND upwd=md5(?)";
    pool.getConnection((err, conn) => {
        if (err) throw err;
        conn.query(sql, [uname, upwd], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                req.session.user = user;
                req.session.user.uid = result[0].uid;
                res.json({"code": 1, "msg": "登录成功"});
            } else {
                res.json({"code": -1, "msg": "用户名或密码错误"});
            }
        });
        conn.release();
    })
}

//4.是否已经登录
exports.islogin =(req,res)=>{
    if(req.session.user){
        res.json({"code":1,"msg":req.session.user.uname});
    }else{
        res.json({"code":-1,"msg":"未登录"});
    }
}

//5.注销操作
exports.loginout =(req, res)=>{
    req.session.destroy();
    res.json({"code":-1,"msg":"未登录"});
}





