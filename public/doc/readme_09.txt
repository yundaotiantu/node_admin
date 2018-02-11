拖动上传商品图片

开发流程
1:data/08_product_upload.php   商品图片上传
2:product_list.html            创建div
3:product_list.js

拖动上传商品图片
1： document 阻止事件默认行为
2: 判断上传文件数量 = 0
3: 读取图片(磁盘读取网页中)并且显示网页上
   浏览器  FileReader*
   浏览器  webkitURL*
4:预览看看上传图片
5:通过ajax 上传
  *上传方式    post
  *设置请求头  X-Requested-With XMLHttpRequest
6:将上传图片保存FormData对象
7:再通过ajax上传






