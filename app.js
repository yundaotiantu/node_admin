//nodejs 央视商城网
//1:加载对应模块
//  http
//  express
//  mysql
//  body-parser  处理post请求参数
const http = require("http");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');

var user = require("./routes/user");
var floor = require("./routes/floors");
var product = require('./routes/product');
var register = require('./routes/register');
var cart = require('./routes/cart');



//2.创建连接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"cent",
    port:3306,
    connectionLimit:25
})

//3.创建服务器8080
var app = express();
var server = http.createServer(app);
server.listen(8080);

//4.加载静态目录 public
app.use(express.static("public"));

//5.配置body.parser
app.use(bodyParser.urlencoded({extended:false}));


app.use(session({
    secret: 'express ',
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000*60*30
    }
}));
app.use(cookieParser());


//6.登录
app.post("/login",user.login);

//7.是否已经登录
app.post("/islogin",user.islogin);

//8.注销操作
app.post('/loginout',user.loginout);


//9.注册确定唯一性
app.post('/rg_chk',register.rg_chk);

//10.注册
app.post('/register',register.register);

//11.楼层加载
app.get('/floors',floor.floors);

//12. lunbo加载
app.get('/lunbo',floor.lunbo);

//13.商品详情
app.get("/product_detail",product.product_detail);

//14.加入购物车
app.get("/addCart",cart.addCart);

//14.获取购物车商品
app.get("/getCart",cart.getCart);

//15.更新购物车商品
app.get("/updateCart",cart.updateCart);

//16.全选购物车商品
app.get("/selectAll",cart.selectAll);

//17.选购物车个别商品
app.get("/selectOne",cart.selectOne);

//18.选购物车个别商品
app.get("/del",cart.del);


//19.搜索帮助
app.get("/searchHelp",product.searchHelp);

//20.商品列表
app.get("/product_list",product.product_list);

//21.清空购物车
app.get("/clearCart",cart.clearCart);
