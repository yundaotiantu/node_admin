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


//3.产品详情
exports.product_detail =(req,res)=>{
    var n = 0;
    var output = {};
    pool.getConnection((err,conn)=>{
        var sql = "SELECT * FROM ct_index_product WHERE pid=?";
        if(err) throw err;
        var pid = req.query.pid;
        conn.query(sql,[pid],(err,result)=>{
            if(err) throw err;
            n++;
            output.product = result[0];
            if(n==2){
                res.json(output);
            }
        });
        conn.release();
    });
    pool.getConnection((err,conn)=>{
        var sql = "select sm,md,lg from ct_index_pic where pid=?";
        if(err) throw err;
        var pid = req.query.pid;
        conn.query(sql,[pid],(err,result)=>{
            if(err) throw err;
            n++;
            output.imgs = result;
            if(n==2){
                res.json(output);
            }
        });
        conn.release();
    })
}

//4.搜索帮助
exports.searchHelp = (req,res)=>{
    var kw = req.query.term;
    let sql="select pid,title from ct_index_product ";
    if(kw){
        kws=kw.split("");
        for(var i=0; i<kws.length;i++){
            kws[i]=" title like '%"+kws[i]+"%' ";
        }
        sql+=" where "+kws.join(" and ");
    }
    sql+="limit 5";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.json(result);
        }else{
            res.json("");
        }
    })
}

//5.商品列表
exports.product_list = (req,res)=>{
    var output={count:0,      //总个数
        pageSize:6,   //每页6个
        pageCount:0,  //总页数
        pageNo:0,     //现在第几页
        data:[]      //商品列表
    };
    var pno = parseInt(req.query.pno);
    if (pno) output.pageNo=pno;
    var kw = req.query.kw;
    let sql="select pid as p,price,title,(select md from ct_index_pic where pid=p limit 1) as md from ct_index_product ";
    if(kw){
        kws=kw.split("");
        for(var i=0; i<kws.length;i++){
            kws[i]=" title like '%"+kws[i]+"%' ";
        }
        sql+=" where "+kws.join(" and ");
    }
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var products = result;
        output.count = products.length;
        output.pageCount= Math.ceil(output.count/output.pageSize);
        sql+=" limit "+(output.pageNo*output.pageSize)+","+output.pageSize;
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            output.data=result;
            res.json(output);
        })
    })

}



