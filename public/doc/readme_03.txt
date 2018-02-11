商品列表分页显示
(2)程序开发流程
   data/00_init.php          连接数据
   data/04_product_list.php  分页显示商品列表
   ?库 xuezi
   ?表 xz_laptop
   id/name/title/price
   ?创建分页sql语句
   SELECT id,name,title,price FROM xz_laptop
   ?总记录数  43
   SELECT count(*) AS c FROM xz_laptop;
   ?总页数    6       向上取整 ceil(43/8)
   ?当前页码  $pno

   [1][2][3]
          |
   [1][2][3][4][5]
             |
      [2][3][4][5][6]

   product_list.html  数据显示html
   product_list.js



错误集锦:
 (1)Unknown column 'id' in 'field list'
 查询表中不存在id列







