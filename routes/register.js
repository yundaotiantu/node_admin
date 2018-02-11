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


//3. 注册核对用户名，手机号码 ， 邮箱是否已经存在
exports.rg_chk =(req,res)=>{
    pool.getConnection((err,conn)=>{
        var name = req.body.name;
        var value = req.body.value;
        if(err) throw err;
        var sql = "SELECT * FROM ct_user WHERE "+name+"=?";
        conn.query(sql,[value],(err,result)=>{
            if(err) throw err;
            if (result.length > 0) {
                res.json({"code": -1});
            } else {
                res.json({"code": 1});
            }
        })
        conn.release();
    });
}

//4. 注册
exports.register =(req,res)=>{
    pool.getConnection((err,conn)=>{
        let uname = req.body.uname;
        let upwd = req.body.upwd;
        let email = req.body.email;
        let phone = req.body.phone;
        if(err) throw err;
        var sql = "insert into ct_user (uname,upwd,email,phone) values (?,md5(?),?,?)";
        conn.query(sql,[uname,upwd,email,phone],(err,result)=>{
            if(err) throw err;
            if (result.affectedRows>0) {
                res.json({"code":1,"msg":"注册成功"});
            } else {
                res.json({"code":-1,"msg":"注册失败"});
            }
        })
        conn.release();
    });
}