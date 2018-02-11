#15:35-15:40
#1:进入xuezi库中
USE xuezi;
#2:创建管理员用户表 t_admin
CREATE TABLE t_admin(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
#3:添加三条记录    uid uname upwd
INSERT INTO t_admin VALUES(null,'tom',md5('123'));
INSERT INTO t_admin VALUES(null,'jerry',md5('123'));
INSERT INTO t_admin VALUES(null,'james',md5('123'));







