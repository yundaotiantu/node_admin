
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

//3.楼层
exports.floors =(req,res)=>{
    var output = {};
    var promise=0;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM ct_index_calo limit 0,3";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            promise++;
            output.pc_hot = result;
            if(promise==6){
                res.json(output);
            }
        })
        conn.release();
    });
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM ct_index_calo limit 3,3";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            promise++;
            output.ct_ts = result;
            if(promise==6){
                res.json(output);
            }
        })
        conn.release();
    });
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM ct_index_calo limit 6,5";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            promise++;
            output.ar_qt= result;
            if(promise==6){
                res.json(output);
            }
        })
        conn.release();
    });
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM ct_index_calo limit 11,5";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            promise++;
            output.floor1 = result;
            if(promise==6){
                res.json(output);
            }
        })
        conn.release();
    });
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM ct_index_calo limit 16,5";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            promise++;
            output.floor2 = result;
            if(promise==6){
                res.json(output);
            }
        })
        conn.release();
    });
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM ct_index_calo limit 21,5";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            promise++;
            output.floor3 = result;
            if(promise==6){
                res.json(output);
            }
        })
        conn.release();
    });
}



//4.轮播
exports.lunbo =(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM ct_lunbo";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
        conn.release();
    });
}