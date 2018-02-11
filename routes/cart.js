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

//3.加入购物车
exports.addCart =(req,res)=>{
    let uid = req.session.user.uid ;
    let product_id = req.query.pid;
    let count = req.query.count;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "select * from ct_shoppingcart_item where user_id=? and product_id=?";
        conn.query(sql,[uid,product_id],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                var sql = "update ct_shoppingcart_item set count=count+"+count+" where user_id=? and product_id=?"
                conn.query(sql,[uid,product_id],(err,result)=>{
                    if(err) throw err;
                    if(result.affectedRows>0){
                        res.json({"code":1});
                    }
                })
            }else{
                var sql = "insert into ct_shoppingcart_item (user_id,product_id,count,is_checked) values (?,?,?,0)"
                conn.query(sql,[uid,product_id,count],(err,result)=>{
                    if(err) throw err;
                    if(result.affectedRows>0){
                        res.json({"code":1});
                    }
                })
            }
        })
        conn.release();
    });
}

//4.获取购物车的商品列表
exports.getCart =(req,res)=>{
    let uid = req.session.user.uid ;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "select iid , product_id , title , price , count ,(select sm from ct_index_pic where pid=product_id limit 1) as sm , is_checked from ct_shoppingcart_item inner join ct_index_product on product_id=pid where user_id=?";
        conn.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
        conn.release();
    });
}

//5.更新购物车列表
exports.updateCart =(req,res)=>{
    let iid = req.query.iid;
    let count = req.query.count;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        if(count==0){
            var sql = "delete from ct_shoppingcart_item where iid=?";
            conn.query(sql,[iid],(err,result)=>{
                if(err) throw err;
                res.json({"code":1});
            })
        }else{
            var sql="update ct_shoppingcart_item set count="+count+" where iid=?";
            conn.query(sql,[iid],(err,result)=>{
                if(err) throw err;
                res.json({"code":1});
            })
        }
        conn.release();
    });
}

//6.选中所有的用户购物车的商品
exports.selectAll =(req,res)=>{
    let uid = req.session.user.uid ;
    let chkAll= req.query.chkAll;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "update ct_shoppingcart_item set is_checked=? where user_id=?";
        conn.query(sql,[chkAll,uid],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0) {
                res.json({"code": 1});
            }
        })
        conn.release();
    });
}

//7.选中所有的用户购物车的一个商品
exports.selectOne =(req,res)=>{
    let iid = req.query.iid ;
    let chkOne= req.query.chkOne;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "update ct_shoppingcart_item set is_checked=? where iid=?";
        conn.query(sql,[chkOne,iid],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0) {
                res.json({"code": 1});
            }
        })
        conn.release();
    });
}


//8.删除商品
exports.del =(req,res)=>{
    let uid = req.session.user.uid ;
    let iid = req.query.iid ;
    let sel = req.query.select;
    let value='';
    let sql=0;
    if(sel==1){
        value = iid;
        sql="delete from ct_shoppingcart_item where iid=?";
    }else{
        value = uid;
        sql="delete from ct_shoppingcart_item where user_id=? and is_checked=1";
    };
    pool.query(sql,[value],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.json({"code": 1});
        }else{
            res.json({"code": -1});
        }
    })
}

//9.清除购物车
exports.clearCart =(req,res)=>{
    let uid = req.session.user.uid ;
    sql="delete from ct_shoppingcart_item where user_id=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.json({"code": 1});
        }else{
            res.json({"code": -1});
        }
    })
}
