商品列表分页显示-》显示商品对应图片

多表查询
xz_laptop      lid
xz_laptop_pic  laptop_id

lid;lname;price;title;spec {xz_laptop}
sm                         {xz_laptop_pic}

多表查询
a:将所有表名保存 FROM 后面并且用逗号分隔
  FROM xz_laptop,xz_laptop_pic
b:每一个表起一个别名
  FROM xz_laptop l,xz_laptop_pic p
c:WHERE l.lid = p.laptop_id

DISTINCT 去除重复项

SELECT l.lid,l.lname,l.price,l.title,l.spec,p.sm
FROM xz_laptop l,xz_laptop_pic p
WHERE l.lid = p.laptop_id
GROUP BY l.lid
LIMIT 0,8;

02_product_list.php
03_product_list.php


功能模块三:删除指定商品
04_product_del.php
a:向表中添加列
谨慎使用:生产环境表数据量多(单表 100w记录)
mysql标准语法
ALTER TABLE 表名 ADD  列名 类型;
ALTER TABLE xz_laptop ADD expire ENUM('0','1') NOT NULL DEFAULT '0';

UPDATE xz_laptop SET expire = '1'
WHERE lid = ?


ALTER TABLE xz_laptop ADD cuid INT NOT NULL DEFAULT 0;
ALTER TABLE xz_laptop ADD ctime DATETIME NOT NULL DEFAULT 0;
ALTER TABLE xz_laptop ADD muid INT NOT NULL DEFAULT 0;
ALTER TABLE xz_laptop ADD mtime DATETIME NOT NULL DEFAULT 0;
ALTER TABLE xz_laptop ADD v1 INT NOT NULL DEFAULT 0;
ALTER TABLE xz_laptop ADD v2 VARCHAR(255) NOT NULL DEFAULT '';

#极特殊情况：当前数据必须删除;
a:提前创建 超级管理员(拥有所有项目中权限)
b:删除数据
c:提前创一张删除历史表
  【删除数据据-》添加删除历史表->删除人id->删除时间】



expire
product_list_01.js

















