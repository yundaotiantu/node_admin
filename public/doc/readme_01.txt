管理员后台登录


(1)为了安全性考虑用户密码需要加密保存
md5加密算法
"123"===>"202cb962ac59075b964b07152d234b70"
"_@@kais+3)   __#0@!__*&"=>

(2)程序开发流程
              data/00_init.php
  a:先写 php  data/01_admin_login.php
常见错误:
  a出错现象:下载php
     原因:header写错误
  b出错现象:Undefined index: uname1
     原因:参数拼写错误
  c出错现象:mysqli_fetch_assoc() expects parameter 1 to be mysqli_result
     原因:sql语句拼写错误

  b:再写 html login.html(*)
  c:再写 js   login.js








