SET NAMES UTF8;

DROP DATABASE IF EXISTS cent;

CREATE DATABASE cent CHARSET=UTF8;

USE cent;

create table ct_user(
  uid int(11) NOT NULL auto_increment primary key,
  uname varchar(32) NOT NULL default '',
  upwd varchar(32) NOT NULL default '',
  email varchar(64) NOT NULL default '',
  phone varchar(16) NOT NULL default '',
  avatar varchar(128) default NULL,
  user_name varchar(32) default NULL,
  gender int(11) default NULL
);


INSERT INTO ct_user VALUES ('1', 'dingding', md5('123456'), 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0');
INSERT INTO ct_user VALUES ('2', 'dangdang', md5('133456'), 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1');
INSERT INTO ct_user VALUES ('3', 'doudou', md5('166456'), 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1');
INSERT INTO ct_user VALUES ('4', 'yaya', md5('123456'), 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
INSERT INTO ct_user VALUES ('5', '1111', md5('111111'), '441977193@qq.com', '18357100796', null, null, null);
INSERT INTO ct_user VALUES ('6', 'ABCD', md5('123456'), '123@qq.com', '13538894495', null, null, null);
INSERT INTO ct_user VALUES ('7', 'mohk', md5('123456'), '11@qq.com', '13512312312', null, null, null);
INSERT INTO ct_user VALUES ('8', '121123', md5('w13945128995'), '491000888@qq.com', '13213389258', null, null, null);
INSERT INTO ct_user VALUES ('9', '555555', md5('5555555'), '55555555@163.com', '13400000000', null, null, null);
INSERT INTO ct_user VALUES ('10', 'xuyong', md5('123456'), '123456789@qq.com', '15525623622', null, null, null);
INSERT INTO ct_user VALUES ('11', 'admin', md5('cxy930123'), 'mail@xingyu1993.cn', '13580510164', null, null, null);
INSERT INTO ct_user VALUES ('12', 'siyongbo', md5('900427'), '616188545@qq.com', '18447103998', null, null, null);
INSERT INTO ct_user VALUES ('13', 'qwerty', md5('123456'), '1091256014@qq.com', '15617152367', null, null, null);
INSERT INTO ct_user VALUES ('14', 'dingziqiang', md5('456456'), '996534706@qq.com', '15567502520', null, null, null);



CREATE TABLE ct_lunbo(
  ld_id INT PRIMARY KEY AUTO_INCREMENT,	#商品编号
  pid INT,				#商品编号
  title VARCHAR(64) default NULL,	#标题
  t_detail VARCHAR(128) default NULL,   #标题详情
  subtitle VARCHAR(64) default NULL ,	#副标题
  s_detail VARCHAR(128) default NULL,   #副标题详情
  pic VARCHAR(128) default NULL,	#图片
  sm VARCHAR(128) default NULL,		#小图片
  bg VARCHAR(128) default NULL		#背景图片
);

INSERT INTO `ct_lunbo` VALUES 
(NULL,1,'冰苦荞','灵丘县国春苦荞食品有限责任公司创建于1998年，是专门从事苦荞麦种植、食品研发、生产、销售的股分制企业，是山西省农业产业化龙头企业，灵丘县最具发展潜力的农产品加工企业。','品牌名称<br><span>灵丘县国春苦荞</span>','选用拥有“中国苦荞麦之乡”的大同市灵丘县苦荞麦，辅以纯净水、木糖醇、膳食纤维、乳酸链球菌等原料，在保有富硒、黄硐、芦丁的特色同时，采用生物科技和传统工艺相结合精制而成。……','picture/9ea2f9d24d5942aba4e53b85831ef914.jpg','picture/d92849c2403143edb1a5c98fd17354aa.jpg','picture/b868c9b52dde48ac8707b57f2c0f3ddd.jpg'),
(NULL,2,'太白无闲草—养心茶','杨凌毅泰生物科技有限公司成立于2016年7月20日，注册资金500万元。是一家从事中草药研究、开发、种植、收购、生产、加工、销售；茶叶、代用茶的加工、销售；食品、保健品、药品、医疗器械的研究、开发、生产及销售的高科技企业。','品牌名称<br><span>杨凌毅泰生物</span>','太白草医第25代传人穆毅据多年中草医药临床经验，结合中医养生理念及太白草医理论，选用太白山野生药茶白毛银露梅（观音茶）、决明子、淡竹叶等药材。……
','picture/b78a804b29a84cf890bd89cce1507991.jpg','picture/193e24b6df7c4358a239ea4b8cab3267.jpg','picture/d12417fc4af14b18b416c966fa147f8e.jpg'),
(NULL,3,'净颜舒缓修护霜','山东曲氏祖方生物科技有限公司“曲方净颜“品牌是一家针对各种皮肤问题的品牌，以顾客的需求为导向，用健康绿色的产品，专注解决问题性皮肤。','品牌名称<br><span>山东曲氏</span>','我们一定要妥善选择一款增强肌肤活力及快速补充养分的修护产品来“对抗”肌肤问题，唤醒肌肤光彩。……','picture/88aed0650ff443e9ba305eb981dae727.jpg','picture/bfc14951057f43d7992c903ddbebd580.jpg','picture/0926731d598d4e8f89ca3d24bbef803f.jpg'),
(NULL,5,'和谐圣汇清润套','和谐之源品牌自04年创立至今，一直坚持和奉行“五大核心”战略，扎实稳步的发展。目前已经在市场上赢得养生爱好者及众多孕产妇的一致好评与信赖。','品牌名称<br><span>和谐之源</span>','和谐圣汇清润套适用于各种肤质，和谐圣汇清润油、清润液、清润膏三样产品，依据顺序使用，能够有效打开肌肤吸收通道，深入肌肤底层。……','picture/d4f3e423801749b3a3da6e4fdf4cec98.jpg','picture/a559fbe66cb949649ea5a87df6b5099d.jpg','picture/b38ae9076ba74761b38b8c72586a7d85.jpg'),
(NULL,6,'美加盈净颜膜液','美加盈公司成立于2003年，主要致力于高科技美容项目、特色功效、美容化妆品的研发、生产、营销、设计、培训和代加工业务。','品牌名称<br><span>美加盈</span>','美加盈净颜膜液添加人参根粉、甘草根粉等多种萃取，坚持使用，令皮肤保持白里透红，富有光泽和弹性。……','picture/856d788aad5c4aec8d93814f3c8563ec.jpg','picture/088fe2f0e93946f7a1bcf183235d1775.jpg','picture/7d7784050be349d4a345bd8e6f98fa4a.jpg'),
(NULL,7,'乌金石果蔬净','河北梓熙科技有限公司成立于2009年6月4日，是一家集科学技术研发，科技成果转化推广和应用，科技产品生产及销售的科、工、贸一体的科技型企业。公司注册资金300万元，现有员工70余人，其中具有中高级职称的工程技术人员45人。','品牌名称<br><span>河北梓熙科技</span>','乌金石果蔬净的主要成分为乌金石精华，能够有效去除瓜果蔬菜表面的农残、重金属，且其余成分全部也由食品级组成，安全健康。……','picture/9e01964b67224899bfc8e7e5d9d829a5.jpg','picture/95c1c3b71aec4a2eb239519304e1efa2.jpg','picture/f624506d21594a4786efd0c930eba902.jpg'),
(NULL,8,'红石榴素','北京芭萨生物科技有限公司是集私人定制美肌调理产品的研发、半永久、店务运营为一体的综合性美业培训公司。芭萨作为国际时尚美容技术开发资深品牌，带领行业团队走遍大江南北，帮助数万店家轻松致富！帮助无数学子开启美业之门。','品牌名称<br><span>北京芭萨生物</span>','红石榴素一套共28瓶，每瓶均为提纯原料，使用者可根据自身肌肤状况及需求进行调制，是现代科技衍生的新兴护肤产品。……','picture/e99a999c667e4f0c925d6acaa3c63eda.jpg','picture/97a38f26bbf849c9b678ba4c96bacbb6.jpg','picture/8852885088004a88b2388aaa2ee22926.jpg'),
(NULL,11,'柔卡臻绣3壁纸','北京柔卡壁纸有限公司（原公司）成立于2006年是一家OEM企业，该公司目前拥有国内知名并且实力雄厚、技术先进的多家一线生产厂家为其代工生产，专业批发供应全国各个建材市场店面、全国装饰工程公司和设计工作室代理销售。','品牌名称<br><span>北京柔卡壁纸</span>','柔卡臻绣3壁纸，它选用长纤无纺超厚底纸，自然肌理明晰，透气性佳，抗撕裂能力强，安全环保系数高，款式多样，是家装的上好选择。……
','picture/2c70897ebb004f058f69638e9e435801.jpg','picture/cbbd20e93ae741f3bdbaf53095bae902.jpg','picture/99a5f7c2fb734575b2866d92b191c2c6.jpg');


CREATE TABLE ct_commodity_kind(
  cmkid INT PRIMARY KEY AUTO_INCREMENT,		#品牌商城品牌编号
  cmkname VARCHAR(32) NOT NULL default ''		#品牌商城品牌名
);

INSERT INTO ct_commodity_kind VALUES
(NULL,'母婴用品'),
(NULL,'食品茶饮'),
(NULL,'美妆护肤'),
(NULL,'服装鞋帽'),
(NULL,'家用电器');



CREATE TABLE ct_index_variety(
  vid INT PRIMARY KEY AUTO_INCREMENT,		#index楼层标号
  vname VARCHAR(32) NOT NULL default ''		#index楼层名
);

INSERT INTO ct_index_variety VALUES
(NULL,'最新产品'),
(NULL,'本周人气'),
(NULL,'一镇一品'),
(NULL,'区域名品'),
(NULL,'全国风尚'),
(NULL,'商城商品');

CREATE TABLE ct_index_calo(
  cl_id INT PRIMARY KEY AUTO_INCREMENT,	#商品编号
  pid INT,				#商品编号
  title VARCHAR(64) default NULL ,	#标题
  subtitle VARCHAR(64) default NULL ,	#副标题
  site VARCHAR(64) default NULL ,	#地址
  pic VARCHAR(128) default NULL		#图片	
);

INSERT INTO `ct_index_calo` VALUES 
(NULL,9,'柯恩世家葡萄柚水漾莹透润肤水',NULL,'北京','picture/141d257e861e4f71bcdfa4385aa6a27b.jpg'),
(NULL,10,'柯恩世家葡萄柚水漾莹透润肤水',NULL,'贵州','picture/63bd6daf7e0f470592cda5417d1a5553.jpg'),
(NULL,11,'柔卡臻绣3壁纸',NULL,'贵州','picture/3bc2d55a00e24fca803079bb432c7c95.jpg'),
(NULL,12,'永安镇 三角州牌黄河口大闸蟹','一等好水，一品好蟹',NULL,'picture/c2501e09191d405ea437a460b1d5d80d.jpg'),
(NULL,13,'梅山镇 祥堡无抗健康猪肉','地道美味 欲罢不能',NULL,'picture/1b80316dedea4babb0bc489e06d3e07d.jpg'),
(NULL,14,'都城镇 十二岭荔枝冰酒','西江之畔 荔枝之源',NULL,'picture/117568e464e44ed5b1a56b90410061b8.jpg'),
(NULL,15,'丹茜砭石槌','它用砭石做凿子头，意在运用砭石之神奇特点，结合古法槌疗及手法，通过击打，刺激人体筋膜、肌肉、神经，利用砭石特有的远红外和强烈的超声波脉冲，直接作用身体不适处。','华东江苏','picture/f7783d1f8c3646c3af35448f3146aee4.jpg'),
(NULL,16,'水私季抑菌凝胶','水私季抑菌凝胶是一款女性私护温敏凝胶，由法国权威研究院技术支持，暨南大学生物医药研发基地研制……','华南郑州','picture/cb1e5cc3c1d74ce9ac915e500b76600d.jpg'),
(NULL,17,'德盛堂桦褐孔菌(白桦茸)茶','德盛堂桦褐孔菌（白桦茸）茶选用来自俄罗斯西伯利亚原始森林的白桦茸，经人工挑选后，使用先进低温技术加工成精致菌粉，配以罗汉果、决明子精制而成。','华北北京','picture/3acf7ca334b4471db48ff09dea14c27d.jpg'),
(NULL,18,'养乃世家 卡倍多','佰美优羊奶粉，源自大西北奶源，奶源好、奶羊品种好；先进工艺、高标准无菌生产；根据人体的营养需求，科学配比，营养均衡全面；具有高钙、高蛋白、高纤维之特点，粉质纯净、无糖配方，口感清新淡雅。','西北西安','picture/6c9b97c162824bce8ff7ec17b0344078.jpg'),
(NULL,19,'空气净化机','GEKO100桌面式空气净化机能够持久无衰减的消毒灭菌。它是以高能粒子—分子击断作为核心技术。','西南重庆','picture/f30f7b13db0b4413a8d52f6cf273da31.jpg'),
(NULL,20,'正多宝牌吗哪果饮品','新一代养生、绿色饮品','亳州','picture/e1fdaa4929d34a30a5a68df84b6059db.jpg'),
(NULL,21,'亲觅GABA胶原肽沙棘饮','最懂你的亲觅，最佳的“伴侣”','滨州','picture/b30e5533bd3c4ee0a62fae4c7272598b.jpg'),
(NULL,22,'天滋香胚芽米','营养健康更放心','六安','picture/a7ba446eab5340cd98c4a120d355feda.jpg'),
(NULL,23,'徕盟玻尿酸焕颜套装','养出少女感的“无龄”肌肤','滨州','picture/363640a5ca3f456fa01bbb0d4abd3ce4.jpg'),
(NULL,24,'儿体舒医用冷疗贴','健康降温 导热性强','青岛','picture/e9519e689f6244a38ccc908bc70eacfc.jpg'),
(NULL,25,'久食佳营养餐','重启健康生活','大连','picture/83231b4b2bd34c05a10245c754f67782.jpg'),
(NULL,26,'EST智能新风净化系统','净化如此彻底','北京','picture/f6d2ac7279ba429ba61a098430ff21a2.jpg'),
(NULL,27,'奇妙果男士晚餐','能量满满每一天','北京','picture/7a3d46b04413489798076edf07a0de91.jpg'),
(NULL,28,'钜宝酒','写下最美的祝福给你','南宁','picture/3ed2e4abe5534c3980673d2f6e5bbeba.jpg'),
(NULL,29,'【东方曼芭蕾】臻美明星礼盒','曼妙典雅的轻奢派','北京','picture/4309d0ec7a19496fb930890954981e57.jpg'),
(NULL,30,'宣威老浦家火腿','百年老味道','曲靖','picture/4a0a1ebf003c4e9b987517beb2b0be75.jpg'),
(NULL,31,'常寿山青钱柳茶','给家人更好的养生茶','黔东南苗族侗族自治州','picture/3bef58f710004524b28c79d0c93e93fb.jpg'),
(NULL,32,'空气净化机','高品质细节点亮生活','重庆','picture/d9db290a1fe74ba2814db4a82c35b11c.jpg'),
(NULL,33,'欧式真皮太子16号','让奢华走进生活','成都','picture/5a2e27e103414b8e8b30af81e5408e8d.jpg'),
(NULL,34,'“汪溢泉”天然山泉水','富硒之水，健康之泉','黔东南苗族侗族自治州','picture/6de507d358ad483d877e552d5795112a.jpg');


CREATE TABLE ct_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,		#产品编号
  vk_id INT,					#楼层编号
  title VARCHAR(64) default NULL ,		#产品标题
  number VARCHAR(32) default NULL,		#产品号
  price VARCHAR(32) default NULL,		#产品价格	
  selprice VARCHAR(32) default NULL,		#原价
  site VARCHAR(32) default NULL,		#配送地址
  cost VARCHAR(32)  default NULL,		#产品运费
  spec VARCHAR(64) default NULL,		#规格
  func VARCHAR(64) default NULL,		#产品性能
  pic VARCHAR(128) default NULL,		#产品图片
  detail VARCHAR(128) default NULL,		#产品详情
  dpic VARCHAR(128) default NULL,		#详情图片路径
  cpic VARCHAR(128) default NULL,		#产品图片路径
  xpic VARCHAR(128) default NULL,		#参数图片路径
  cmkid INT					#产品种类
);

#INSERT INTO ct_commodity_kind VALUES
#(NULL,'母婴用品'),
#(NULL,'食品茶饮'),
#(NULL,'美妆护肤'),
#(NULL,'服装鞋帽'),
#(NULL,'家用电器');

INSERT INTO `ct_index_product` VALUES 
(1,1,'【联合发布】冰苦荞','8016695770','¥65.00','¥80.00','北京市','免运费','16x280ML',NULL,'picture/2a230470e1904f50821524c3817779e2.jpg','天然 无糖 无色素 谷物饮品','dpic/01_1.gif','dpic/01_2.gif','dpic/01_3.gif',2),
(2,1,'【联合发布】太白无闲草—养心茶','8016695769','¥168.00','¥216.00','全国','免运费','84G',NULL,'picture/9b4144f992c94c1d81fca4febcb2fc4c.jpg','传统验方 科学配制 冲服方便 香醇甘甜', 'dpic/02_1.gif','dpic/02_2.gif','dpic/02_3.gif',2),
(3,1,'【联合发布】曲方净颜舒缓修护霜','8016695721','¥100.00','¥166.00','全国','免运费','30G','净颜亮肤','picture/2200631d756348c280a7fca00ad71cb4.jpg','健康护肤 柔润新生 补水修护', 'dpic/03_1.gif','dpic/03_2.gif','dpic/03_3.gif',3),
(4,1,'【联合发布】怡然滋润护肛组合','8016695373','¥135.00','¥135.00','全国','免运费','100ML',NULL,'picture/b062469472514b22beddd82c5aa63c31.jpg','携带方便 天然草本 配方温和', 'dpic/04_1.gif','dpic/04_2.gif','dpic/04_3.gif',3),
(5,1,'【联合发布】清润套','8016695017','¥3980.00','¥3980.00','北京市','免运费','套',NULL,'picture/f0644dd2e82249bcaf133d29da7774c4.jpg','拯救粗糙肌 释放新生活力 注入新鲜水能量', 'dpic/05_1.gif','dpic/05_2.gif','dpic/05_3.gif',3),
(6,1,'【联合发布】美加盈净颜膜液','8016695452','¥9000.00','¥9000.00','北京市','免运费','24瓶/盒','10ML/瓶','picture/46cb9d42ac8647cba09e4de9f23f20dc.jpg','水润清爽 吸收力强 先进技术', 'dpic/06_1.gif','dpic/06_2.gif','dpic/06_3.gif',3),
(7,1,'乌金石果蔬净','8016693981','¥76.80','¥86.00','全国','¥10.00','24瓶/盒','10ML/瓶','picture/63574b0f93b34ec18eea679c74d46f62.jpg','成分放心 除菌有道 快速洁净', 'dpic/07_1.gif','dpic/07_2.gif','dpic/07_3.gif',2),
(8,1,'【联合发布】红石榴素','8016695280','¥1680.00','¥1680.00','全国','免运费','50ML瓶/x28瓶',NULL,'picture/a092dce9d83d4524910e44c9bd41db74.jpg','原料搭配 因肤而调 私人定制', 'dpic/08_1.gif','dpic/08_2.gif','dpic/08_3.gif',3),
(9,2,'【联合发布】柯恩世家葡萄柚水漾莹透润肤水','8016695621','¥125.00','¥125.00','北京市','¥10.00','150ML',NULL,'picture/141d257e861e4f71bcdfa4385aa6a27b.jpg',NULL, 'dpic/09_1.gif','dpic/09_2.gif','dpic/09_3.gif',3),
(10,2,'【联合发布】宾洋妹油辣椒','8016695633','¥88.00','¥88.00','全国','免运费','160G/瓶x4瓶/盒',NULL,'picture/63bd6daf7e0f470592cda5417d1a5553.jpg',NULL, 'dpic/10_1.gif','dpic/10_2.gif','dpic/10_3.gif',3),
(11,2,'【联合发布】柔卡臻绣3壁纸','8016695669','¥450.00','¥450.00','全国','免运费','0.53M*10M',NULL,'picture/3bc2d55a00e24fca803079bb432c7c95.jpg',NULL, 'dpic/11_1.gif','dpic/11_2.gif','dpic/11_3.gif',4),
(12,3,'【黄河口】 现货大闸蟹 2.0两母蟹 —— 3.0两公蟹 现货黄河口新鲜大闸蟹 特价礼','8016665743','¥488.00','¥568.00','全国','¥25','10只','新鲜直达','picture/c2501e09191d405ea437a460b1d5d80d.jpg',NULL, NULL,'dpic/12_2.gif','dpic/12_3.gif',2),
(13,3,'祥堡农业 瘦肉 500g 气调包装','8016680702','¥360.00','¥680.00','全国','¥22','4斤','套装','picture/1b80316dedea4babb0bc489e06d3e07d.jpg',NULL, NULL,NULL,'dpic/12_3.gif',2),
(14,3,'十二岭果酒荔枝果酒 滋补养颜荔枝冰酒375ml 云浮县特色时尚饮品','8016660638','¥468.00','¥468.00','全国','免运费','375ml','15%vol','picture/117568e464e44ed5b1a56b90410061b8.jpg',NULL, 'dpic/14_1.gif','dpic/14_2.gif','dpic/14_3.gif',2),
(15,4,'【联合发布】水私季抑菌凝胶','8016695468','¥1980.00','¥1980.00','全国','免运费','3G/支*12支/盒',NULL,NULL,NULL, 'dpic/15_1.gif','dpic/15_2.gif','dpic/15_3.gif',3),
(16,4,'丹茜砭石槌','8016695554','¥2800.00','¥2880.00','全国','免运费','套','标准',NULL,NULL, 'dpic/16_1.gif','dpic/16_2.gif','dpic/16_3.gif',3),
(17,4,'【联合发布】德盛堂桦褐孔菌（白桦茸）茶','8016695634','¥168.00','¥680.00','全国','免运费','60G',NULL,NULL,NULL, 'dpic/17_1.gif','dpic/17_2.gif','dpic/17_3.gif',2),
(18,4,'【联合发布】养乃世家卡倍多','8016694841','¥358.00','¥358.00','北京市','¥10.00','400G','羊奶',NULL,NULL, 'dpic/18_1.gif','dpic/18_2.gif','dpic/18_3.gif',2),
(19,4,'【联合发布】桌面式空气净化机','8016695282','¥2680.00','¥2880.00','全国','免运费','台','10W',NULL,NULL, 'dpic/19_1.gif','dpic/19_2.gif','dpic/19_3.gif',5),
(20,5,'【联合发布】微态1号','8016695272','¥180.00','¥180.00','全国','免运费','248ML',NULL,NULL,NULL, 'dpic/20_1.gif','dpic/20_2.gif','dpic/20_3.gif',2),
(21,5,'【联合发布】亲觅GABA胶原肽沙棘饮','8016694750','¥218.00','¥228.00','全国','免运费','400ML',NULL,NULL,NULL, 'dpic/21_1.gif','dpic/21_2.gif','dpic/21_3.gif',2),
(22,5,'【联合发布】天滋香胚芽米','8016694693','¥60.00','¥60.00','北京市','¥10.00','2.5KGx2袋',NULL,NULL,NULL, 'dpic/22_1.gif','dpic/22_2.gif','dpic/22_3.gif',2),
(23,5,'【联合发布】徕盟玻尿酸焕颜套装','8016694792','¥188.00','¥238.00','全国','免运费','套',NULL,NULL,NULL, 'dpic/23_1.gif','dpic/23_2.gif','dpic/23_3.gif',3),
(24,5,'【联合发布】儿体舒医用冷疗贴','8016695403','¥49.80','¥49.80','全国','免运费','2袋/盒','2片/袋',NULL,NULL, 'dpic/24_1.gif','dpic/24_2.gif','dpic/24_3.gif',1),
(25,5,'【联合发布】久食佳营养餐','8016695072','¥198.00','¥198.00','广东','¥10.00','180G',NULL,NULL,NULL, 'dpic/25_1.gif','dpic/25_2.gif','dpic/25_3.gif',2),
(26,5,'【联合发布】SA-300智洁除霾风机','8016694667','¥13170.00','¥15170.00','全国','免运费','台','1050*663*225MM',NULL,NULL, 'dpic/26_1.gif','dpic/26_2.gif','dpic/26_3.gif',5),
(27,5,'【联合发布】奇妙果男士晚餐','8016695540','¥298.00','¥298.00','全国','免运费','15袋/盒','12G/袋',NULL,NULL, 'dpic/27_1.gif','dpic/27_2.gif','dpic/27_3.gif',2),
(28,5,'【联合发布】钜宝酒','8016695271','¥298.00','¥378.00','全国','¥10.00','500ML',NULL,NULL,NULL, 'dpic/28_1.gif','dpic/28_2.gif','dpic/28_3.gif',2),
(29,5,'【联合发布】臻美明星礼盒','8016695421','¥1669.00','¥1669.00','全国','免运费','套',NULL,NULL,NULL, 'dpic/29_1.gif','dpic/29_2.gif','dpic/29_3.gif',3),
(30,5,'【联合发布】宣威老浦家火腿','8016695404','¥118.00','¥118.00','全国','¥10.00','800g/盒','火腿',NULL,NULL, 'dpic/30_1.gif','dpic/30_2.gif','dpic/30_3.gif',2),
(31,5,'【联合发布】常寿山青钱柳代用茶','8016694462','¥258.00','¥258.00','全国','免运费','240G/盒',NULL,NULL,NULL, 'dpic/31_1.gif','dpic/31_2.gif','dpic/31_3.gif',2),
(32,5,'【联合发布】桌面式空气净化机','8016695282','¥2680.00','¥2880.00','全国','免运费','台','10W',NULL,NULL, 'dpic/32_1.gif','dpic/32_2.gif','dpic/32_3.gif',5),
(33,5,'【联合发布】欧式真皮太子16#','8016693508','¥8360.00','¥9880.00','全国','免运费','高1.52m*长2.32m*宽2.23m',NULL,NULL,NULL, 'dpic/33_1.gif','dpic/33_2.gif','dpic/33_3.gif',5),
(34,5,'【联合发布】汪溢泉','8016694668','¥120.00','¥120.00','全国','免运费','517mL/瓶',NULL,NULL,NULL, 'dpic/34_1.gif','dpic/34_2.gif','dpic/34_3.gif',2),
(35,6,'韩国优贝可婴儿纸尿裤 超薄拉拉裤 试用装 图片色 XL','8016624746','¥3','¥6','全国','免运费','L',NULL,NULL,NULL,NULL,NULL,NULL,1);


CREATE TABLE ct_index_pic(			#index产品图片表
  pic_id INT PRIMARY KEY AUTO_INCREMENT,	#index图片id
  pid INT ,					#产品编号
  sm VARCHAR(128) NOT NULL default '',		#小图片路径
  md VARCHAR(128) NOT NULL default '',		#中图片路径
  lg VARCHAR(128) NOT NULL default ''		#大图片路径
);

INSERT INTO ct_index_pic VALUES
(NULL, 1, 'picture/e5227ee5a7cd4e718ace5c8692eae8e2.jpg','picture/84315a1c33b046169f3f2818e7a5ad80.jpg','picture/bc8e06250319435c903fc1cc175e9b70.jpg'),
(NULL, 1, 'picture/efad7c034a0e4f84b0d04cd9b4526029.jpg','picture/3a1cebc232b04edcb132ad5a38e25fa6.jpg','picture/2cdbcf5c14454aa5879cdbb67bf215b5.jpg'),
(NULL, 1, 'picture/f8634347633b4b4e8313e85e29b211a4.jpg','picture/3650c82bc2f042dcba294b963113fed4.jpg','picture/1f755de2a00d4d2eb4a4ab2adfccfc1a.jpg'),
(NULL, 1, 'picture/c543352e139c429eb46834b3c5aeb2c2.jpg','picture/b4b2b06251044ce0999291d999551ce4.jpg','picture/543b5608223f47acbcea09148e8e9aff.jpg'),
(NULL, 2, 'picture/48966888c83c48e8b52ea96ded16de08.jpg','picture/617118d0906940eabca4a6f64c987315.jpg','picture/7fd0826118d748b6a2a7f2d45a330294.jpg'),
(NULL, 2, 'picture/ceb1b7e2988440dd9fee484d110cf1a5.jpg','picture/198c497369d84d4ebd185708d8ef1de6.jpg','picture/2dfdcf55db104cc3bce190beaad9483e.jpg'),
(NULL, 2, 'picture/37d093d09a9c4e0fa9ea2a59e3643948.jpg','picture/173f743998e74cb68ab5d6b23de8036f.jpg','picture/02feaacba6254da4a764254d4ea9d6d4.jpg'),
(NULL, 2, 'picture/444bb6b5935c4fd5bc91e586a0d0a156.jpg','picture/ee17d5cf4b694369b7df3b30969a1119.jpg','picture/ee17d5cf4b694369b7df3b30969a1119.jpg'),
(NULL, 3, 'picture/a510aa8e16744d0b969af2e1bd0a9d26.jpg','picture/14d18ec95c2b41b6a8e7a7dd3638fef9.jpg','picture/92f06b804dea424fae49163de2afed79.jpg'),
(NULL, 3, 'picture/c9646c3d06d34447bc76e62d46093247.jpg','picture/3e770ff4fb56495b811c15c1f36b6424.jpg','picture/0b48300c636c4766b10432f33b381c23.jpg'),
(NULL, 3, 'picture/c1c76c6d68534f82adf0a7a25712592d.jpg','picture/ba0b7a9e4ee7403690ab1edd68ab6f44.jpg','picture/8e11c06c3a25412bb414f7ea69ebe005.jpg'),
(NULL, 4, 'picture/32075ec115b74f4f88c55651a93c3928.jpg','picture/4c53331555e7494698f8949437e3cea2.jpg','picture/290210ce6c3a402a9ceab0ffc5e38f47.jpg'),
(NULL, 4, 'picture/9eb8306b0cee453387e6aa574dfd9b23.jpg','picture/4b741295219b44c9ba9ccd827559f76b.jpg','picture/e0cb228527b04c1ca15f9e6c631e9dfd.jpg'),
(NULL, 4, 'picture/cb2191dcae90462aa02e9ed65b6e3cf3.jpg','picture/cf2bb4bf5cf944c88a260ac74421ed11.jpg','picture/c49599c1529c4a599e1466055c6f099c.jpg'),
(NULL, 4, 'picture/bdc22bd0ef304f1b89af1e6142d9a84d.jpg','picture/a4d81e69e58b4b6184d2bbd7921306a8.jpg','picture/33c7c02fe67942269c5cf0ff8540da99.jpg'),
(NULL, 5, 'picture/8849ec7c69374c1a88304cac88a7c8a9.jpg','picture/f85201b7274746f691c55e4cd8bc6284.jpg','picture/4d1dbb83e0214167abc286502c2a96d6.jpg'),
(NULL, 5, 'picture/938a4b9d2ace46dea38fb45439426cd3.jpg','picture/4294705936c645abbcf627f8db603e54.jpg','picture/4294705936c645abbcf627f8db603e54.jpg'),
(NULL, 5, 'picture/526fdf29066b4747b0bce2c9e13d2cf3.jpg','picture/b8bdb71533b74ac999818e86ea72580b.jpg','picture/87f7c4f2d8aa4aaaa1a39aa6da062f86.jpg'),
(NULL, 5, 'picture/0dada6c51bc741f9a3c772ddac53cb87.jpg','picture/7a4cf9c2dbc94843b959339c75b41daf.jpg','picture/7a4cf9c2dbc94843b959339c75b41daf.jpg'),
(NULL, 6, 'picture/338dc1d6305b4e07a0f97fa67d858b4b.jpg','picture/5939ce28879a48c4b530fd0944733fc0.jpg','picture/48674371e57d48fc8f6de259dd24627e.jpg'),
(NULL, 6, 'picture/49ac0d2c4ba14a29aeb26fe8bcef9c58.jpg','picture/f3dda65c55a64d41917613fb5270ea3b.jpg','picture/cc5769e0e91b439daf7bbc6db1c0333c.jpg'),
(NULL, 6, 'picture/a46737830a74443fae709a09d6105527.jpg','picture/295b033928a94d2193ff6cc53c6c1077.jpg','picture/295b033928a94d2193ff6cc53c6c1077.jpg'),
(NULL, 6, 'picture/4d2a60d5a12a4609ad9ea8e05a5c736e.jpg','picture/bfe3471c7fe044909d142251d1ab4a6b.jpg','picture/260631c691e844199fc896d605e7f476.jpg'),
(NULL, 7, 'picture/c0a938576ead4604ba3ebdf537a5a488.jpg','picture/50ca4a4095664dfd9a916f62f91738b4.jpg','picture/50ca4a4095664dfd9a916f62f91738b4.jpg'),
(NULL, 7, 'picture/b229bffe07fc49aea7275b89b513c2e7.jpg','picture/9905ccb6d6cc49d8b7f06dde033730ff.jpg','picture/9905ccb6d6cc49d8b7f06dde033730ff.jpg'),
(NULL, 7, 'picture/f1c5df2e438548d49e6a10b33b17e85d.jpg','picture/47e5b3566f5c4f9ab6c941d2dff52c3b.jpg','picture/0ad1b180427a4033bb74948e565e47e1.jpg'),
(NULL, 7, 'picture/efcbee774b534c7481c9ab0d388b1603.jpg','picture/cb2d69f88498405fb3ba3900fe06b574.jpg','picture/4ab2d1a0b43f43858787b610bd310656.jpg'),
(NULL, 8, 'picture/3ad1ef47b6cf4c628b0dc40b32cd6ff4.jpg','picture/0cf73f0b5dd74645962a5a2b3c3daeee.jpg','picture/c7a7f251caf347f7bf6aed51993dbf61.jpg'),
(NULL, 8, 'picture/6ad54a234e54436e8646b73a3b03e91b.jpg','picture/835411df2fc84249a6812f6c83c02f5e.jpg','picture/835411df2fc84249a6812f6c83c02f5e.jpg'),
(NULL, 8, 'picture/9937d576b28a4d0a9c4cb4e413050568.jpg','picture/7194946f1f9e4a09a6d0531fef6a5836.jpg','picture/be97b052c0194426b885a2e592b676f9.jpg'),
(NULL, 8, 'picture/a6b4051d7f6d4632b7778544d0bd60b3.jpg','picture/f51e615f0258439dbb0a803aa82d7b21.jpg','picture/436c091295b74eba9b116d0bdb9866be.jpg'),
(NULL, 9, 'picture/ca47162771ce452db7443ec43d1e90b1.jpg','picture/e93335a2966b43e59abb37e987306618.jpg','picture/711b60334cdf4b0a84fb268e28278387.jpg'),
(NULL, 9, 'picture/d16bcf6139a0492d98d128cbf18f4067.jpg','picture/c3731fa776154f52898fba7a997debbe.jpg','picture/a66811595df648cdb3f3925f896cb375.jpg'),
(NULL, 9, 'picture/133ccb17951a462c873a399098194394.jpg','picture/ef10c2d7d940480e9c61172766f70f97.jpg','picture/91a476bc662840bca54fe529ed32d30e.jpg'),
(NULL, 10, 'picture/2c3925a1ed2843b6a430553225610b63.jpg','picture/0dd31d3cfb4d4bbaa5663ab4797943a4.jpg','picture/0dd31d3cfb4d4bbaa5663ab4797943a4.jpg'),
(NULL, 10, 'picture/1d77e2f4c2254c86be277b7dc864ac61.jpg','picture/c11939c68d874cc58aea79ffca9ae33d.jpg','picture/c11939c68d874cc58aea79ffca9ae33d.jpg'),
(NULL, 10, 'picture/0c9907a0c59f45e98e59c07b2bb1ae62.jpg','picture/a2ba37df75e9434baacf9a672352fd4d.jpg','picture/a2ba37df75e9434baacf9a672352fd4d.jpg'),
(NULL, 10, 'picture/e834401ebe9b42be846258f4804e68fe.jpg','picture/bcb6c30be6db4cca8bb9c03944bbdaed.jpg','picture/9a284ffcafd44242aba4d1a74fa273ad.jpg'),
(NULL, 11, 'picture/09b0702372344272af870b28ce246fca.jpg','picture/031d378217cf4811a92c7e4921a6900e.jpg','picture/031d378217cf4811a92c7e4921a6900e.jpg'),
(NULL, 11, 'picture/12fd641581134ba1a6b97379d5ea8aa9.jpg','picture/44a57297b95847488a7f884e8e8fac31.jpg','picture/44a57297b95847488a7f884e8e8fac31.jpg'),
(NULL, 11, 'picture/443f043b1e7c4c0baa3394237361aaf3.jpg','picture/f8f43286698e4d99907b051a819a413d.jpg','picture/f8f43286698e4d99907b051a819a413d.jpg'),
(NULL, 11, 'picture/5fefbf6da64c4475b68dc0f118c5f943.jpg','picture/4feb53aa002a406ab752555136b16d3e.jpg','picture/4feb53aa002a406ab752555136b16d3e.jpg'),
(NULL, 12, 'picture/ab4fb3116f4a431ab93f074aa25d6d0d.jpg','picture/ab4fb3116f4a431ab93f074aa25d6d0d.jpg','picture/ab4fb3116f4a431ab93f074aa25d6d0d.jpg'),
(NULL, 13, 'picture/9c2a9e3d9a4e46f1bd2c982afaff4759.jpg','picture/9c2a9e3d9a4e46f1bd2c982afaff4759.jpg','picture/9c2a9e3d9a4e46f1bd2c982afaff4759.jpg'),
(NULL, 14, 'picture/1fcc19a0ba1a44258facb7125eaa39eb.jpg','picture/1fcc19a0ba1a44258facb7125eaa39eb.jpg','picture/1fcc19a0ba1a44258facb7125eaa39eb.jpg'),
(NULL, 14, 'picture/5f78d35670da45a0aad6f4cdf0ee22a0.jpg','picture/5f78d35670da45a0aad6f4cdf0ee22a0.jpg','picture/5f78d35670da45a0aad6f4cdf0ee22a0.jpg'),
(NULL, 15, 'picture/d737e57413de44b095a93a7c535e2fab.jpg','picture/bc3805d744bf4b2b9cf4d3ce778125e5.jpg','picture/bc3805d744bf4b2b9cf4d3ce778125e5.jpg'),
(NULL, 15, 'picture/a36d631ce6714b4893d9fc953e91a1be.jpg','picture/975c9ded5a304d679a424803a3c4f3ff.jpg','picture/975c9ded5a304d679a424803a3c4f3ff.jpg'),
(NULL, 15, 'picture/f8c7e3523c694cff9d62feef1939a4b2.jpg','picture/14b6c8557e784a60871593e6da6303ca.jpg','picture/14b6c8557e784a60871593e6da6303ca.jpg'),
(NULL, 16, 'picture/51c13c75eb23423bac058f35ada86aee.jpg','picture/5b2c43e1949c4cf9a8d381513b9968c1.jpg','picture/5b2c43e1949c4cf9a8d381513b9968c1.jpg'),
(NULL, 16, 'picture/5a9c5df83d454602b139f90faa9f9235.jpg','picture/f7ccd8b4395748a79f51a4764fc51f24.jpg','picture/f7ccd8b4395748a79f51a4764fc51f24.jpg'),
(NULL, 16, 'picture/3cea3d65dd7246ff867608868f96991b.jpg','picture/8c74d6ba39364076b5b7d27a551d0e7d.jpg','picture/8c74d6ba39364076b5b7d27a551d0e7d.jpg'),
(NULL, 17, 'picture/59b53cfaed4542b49425f6e6a589e1ce.jpg','picture/9ca97ec599344d24a4c72bf7a0385f21.jpg','picture/9ca97ec599344d24a4c72bf7a0385f21.jpg'),
(NULL, 17, 'picture/d22c6537eb9f4636bae74bb6806b7ccc.jpg','picture/c219b530d00741f48e13ce300c0bf5b9.jpg','picture/ef8425d6ac4e4739b752bc6256c8c46d.jpg'),
(NULL, 17, 'picture/3e4d9d9dc0034b63ad7c338b2479a22a.jpg','picture/694c548bf30d4e648edd7a9d5fd8e81f.jpg','picture/856b581bf49f479e8ddda81c48b0c251.jpg'),
(NULL, 17, 'picture/015e1f5b17ac434d814c61ad079281cd.jpg','picture/6f401322980346a0962eb8f5b33ab460.jpg','picture/458ab598894541a59ae69ebe80906d2b.jpg'),
(NULL, 18, 'picture/e45c6bb13ea5425eb2d72a7605fd0323.jpg','picture/1fa0fbe858ce40f7a6afb31f1631edd0.jpg','picture/4110b0355aaf498b89c844bd1f22181c.jpg'),
(NULL, 18, 'picture/02d2ef61ca0a4b21ab69d5c6cd790250.jpg','picture/cc5381d7c3ba48c08ddc04407f71abce.jpg','picture/cc5381d7c3ba48c08ddc04407f71abce.jpg'),
(NULL, 18, 'picture/526a37c318374092b00f0990e8d3230a.jpg','picture/d10378b181f04aca9055320fa65f64aa.jpg','picture/d10378b181f04aca9055320fa65f64aa.jpg'),
(NULL, 18, 'picture/03e46990f76344bc9de8f1f606223a5b.jpg','picture/0d24214229c44c62981b4d184874618c.jpg','picture/0d24214229c44c62981b4d184874618c.jpg'),
(NULL, 19, 'picture/f66f271f8724462388882ab262cefa00.jpg','picture/72f3048dcaf54de69ddb4569b6391dfb.jpg','picture/879f776609764a77a89ce0f09e08fe85.jpg'),
(NULL, 19, 'picture/2cdf48bbf3ef4ba4afe6c61c25b2c531.jpg','picture/71ffa15562eb4a33af913c0516a7c0f5.jpg','picture/71ffa15562eb4a33af913c0516a7c0f5.jpg'),
(NULL, 19, 'picture/5da08bb4b5ee4495a7eff726bdefb6de.jpg','picture/dbe7be3e3c2345eea9385bf66bf3a8fc.jpg','picture/4357a7afc06b4482825f94a254fc7bf7.jpg'),
(NULL, 19, 'picture/6cf5695418c9446ba44f6845d5a129ac.jpg','picture/cf4f677ccb784ed5bbf1d7c49c17426c.jpg','picture/d6a622c639b3449ea1c3848500b341f4.jpg'),
(NULL, 20, 'picture/931db99be05e47bb8af08a417ba548f6.jpg','picture/113ec5b35e9441828af8571d79fc4067.jpg','picture/113ec5b35e9441828af8571d79fc4067.jpg'),
(NULL, 20, 'picture/1c0dbb939a8a40f5a255648e320b0638.jpg','picture/47803cd7d8c04d25bad61ab4f4e804fa.jpg','picture/38f752c38b9642c286a8c814aeedaef9.jpg'),
(NULL, 20, 'picture/86928f4fe63f438c8086acb671dafc18.jpg','picture/6f91deb7bb30484fa67b1d5c6fc6a633.jpg','picture/6f91deb7bb30484fa67b1d5c6fc6a633.jpg'),
(NULL, 20, 'picture/cb94c61199824125bf771e2ff1490637.jpg','picture/132cff0fa6bd40f3ba83931d3851b61a.jpg','picture/132cff0fa6bd40f3ba83931d3851b61a.jpg'),
(NULL, 21, 'picture/cbc65083b74847f7b779d6c7d1bb7faa.jpg','picture/79e3d3b82d504f1caa8f530c395f54cd.jpg','picture/79e3d3b82d504f1caa8f530c395f54cd.jpg'),
(NULL, 21, 'picture/825700f0b9c142d0a5f0092542689173.jpg','picture/ec1b3616ccdc461eb1a0e4ae2a5ead91.jpg','picture/dcf8c9bdb0d34b6199eb04fb1605a6e4.jpg'),
(NULL, 21, 'picture/2429a97dd16a4e13abc94af7334894a9.jpg','picture/16ec2cbd14f44e30986452df6202eac6.jpg','picture/f15e507c58a348f992a9b45af4fc8941.jpg'),
(NULL, 21, 'picture/685e088b3142450884a931036f215c75.jpg','picture/98f44007ed7e4058b71a2745d9ff4728.jpg','picture/f4430e875f60492d821c900eb76a1146.jpg'),
(NULL, 22, 'picture/6080c9b859cc43269edf858b02b8ed03.jpg','picture/456ca4994eec4c3ba507219c4a00edfa.jpg','picture/456ca4994eec4c3ba507219c4a00edfa.jpg'),
(NULL, 22, 'picture/b304d010190642dcbf42871843824661.jpg','picture/217ad99b2e594d4383022607106a4102.jpg','picture/217ad99b2e594d4383022607106a4102.jpg'),
(NULL, 22, 'picture/6ca7199098e845c1b527795db1a2d3c3.jpg','picture/1bb80cc1bf18452b8e0257dcb4083449.jpg','picture/17ca1ab3cdf944cfbc6b31ac2c7087e3.jpg'),
(NULL, 23, 'picture/f9b0ab1ce79e4d5398aab3e1ca65ffb7.jpg','picture/fb17724a3ebc46cdbcb76f23eb8a621d.jpg','picture/e5cbe6a6d18f404ebc639fa7571cfd94.jpg'),
(NULL, 23, 'picture/21f2b366e6004407803179f495c43596.jpg','picture/120a06162ccf409fb23d713321ef79f4.jpg','picture/45b3ab91421446cd91a7a022c3b88d17.jpg'),
(NULL, 23, 'picture/c1012d9459954073810ad8479d7fcbe6.jpg','picture/93003e390f59454f8bd2c7e107f946ca.jpg','picture/8fa2fbb69ad242fdb98b11e17538f50e.jpg'),
(NULL, 23, 'picture/0640042cd89a4e0f880ba7c650682d9b.jpg','picture/254721937e254964967c6dfabbb02412.jpg','picture/254721937e254964967c6dfabbb02412.jpg'),
(NULL, 24, 'picture/9d19c8ce96ac4a87aca54a0f84df76af.jpg','picture/829ddf16219849dcb0f80d468fcf8d39.jpg','picture/829ddf16219849dcb0f80d468fcf8d39.jpg'),
(NULL, 24, 'picture/29788dc2ff6949abaf5b33aa3c3878b2.jpg','picture/db7e30234f814ba2854d62c136a87b5c.jpg','picture/db7e30234f814ba2854d62c136a87b5c.jpg'),
(NULL, 25, 'picture/53b155dcbee04ae180d33cc81a70c117.jpg','picture/22363aa9f3fb4db5aa84c879cc96b665.jpg','picture/22363aa9f3fb4db5aa84c879cc96b665.jpg'),
(NULL, 25, 'picture/73e3cbd8223c4d6ca46081e63ff63995.jpg','picture/a439e383ee0c431c93ab4bf34f144b9e.jpg','picture/a439e383ee0c431c93ab4bf34f144b9e.jpg'),
(NULL, 25, 'picture/0818dd85563c468eaeef0c97369dd8b5.jpg','picture/5ec10bd5434742bbafc715849f452c36.jpg','picture/5ec10bd5434742bbafc715849f452c36.jpg'),
(NULL, 26, 'picture/87a36b46800a48ad89bc2f7e6c83afc6.jpg','picture/7178f68cea184b0cad3f87c8df35d8ce.jpg','picture/7178f68cea184b0cad3f87c8df35d8ce.jpg'),
(NULL, 26, 'picture/7f31a33edc10466fb77c31947d7674b0.jpg','picture/9a86bfc7f08f4500ab4a4638eb6c3818.jpg','picture/9a86bfc7f08f4500ab4a4638eb6c3818.jpg'),
(NULL, 26, 'picture/553b5992d5e149529ca00c9f0868567b.jpg','picture/19d0f6a7248d4afbbad0033de5c8fb5a.jpg','picture/19d0f6a7248d4afbbad0033de5c8fb5a.jpg'),
(NULL, 26, 'picture/9a0422b3b539466782bf75d274e6dbfc.jpg','picture/aa98c255ff004997a5b2e9043629227d.jpg','picture/aa98c255ff004997a5b2e9043629227d.jpg'),
(NULL, 27, 'picture/dd1b3bf2209347d887eefa20e06d5b1b.jpg','picture/ec8b0296195f45d5bbd1bdf2d51fa866.jpg','picture/ec8b0296195f45d5bbd1bdf2d51fa866.jpg'),
(NULL, 27, 'picture/0db3afe5b4a041928ddae3d5920e2403.jpg','picture/1a2f37205cc54c2a8f6f087cc061b270.jpg','picture/1a2f37205cc54c2a8f6f087cc061b270.jpg'),
(NULL, 27, 'picture/ba52d890bc834b7ba090a575c6f6e10c.jpg','picture/7d5639ec2d5f4df3ac7e75972e23639c.jpg','picture/7d5639ec2d5f4df3ac7e75972e23639c.jpg'),
(NULL, 27, 'picture/1b23f9d6abe140509b63396a78c36c60.jpg','picture/3a05d9cfecc445a8a59e18f120fa367b.jpg','picture/3a05d9cfecc445a8a59e18f120fa367b.jpg'),
(NULL, 28, 'picture/0633f2faf3664622a609aa3d3d388668.jpg','picture/bc673fc2997c4506be3e2c94ea666c94.jpg','picture/a215b1ac2b154381ae59c1b4b15e00c6.jpg'),
(NULL, 28, 'picture/8b97d29293014e0a8f25be86937ae0f2.jpg','picture/64ddf1e315034e74865ea4f70c544920.jpg','picture/16a1e064d4354ad9b92b27ad48db3b88.jpg'),
(NULL, 28, 'picture/cc78fbc85597411787ea72557429f02d.jpg','picture/f8f04bd6db6b4a8581e754a4ff0d81a3.jpg','picture/f8f04bd6db6b4a8581e754a4ff0d81a3.jpg'),
(NULL, 28, 'picture/eb3337a4c2db4ed599dcdd2732be9f0b.jpg','picture/5477350970cc43ff9f223893a4bb3829.jpg','picture/a9c20cf9674a4d44bf4203f0173859bc.jpg'),
(NULL, 29, 'picture/7a90c0e2ada84ade82bc63f12b6070a8.jpg','picture/1e79a56ebeb546619138eb283e22f70c.jpg','picture/fdf0e67dd30f44d18878c7f4bed09ef5.jpg'),
(NULL, 29, 'picture/39ff45096849498c819f0c6e6bef7cb5.jpg','picture/a7edb5bb337040809033bcb8c6a8e3fb.jpg','picture/1dc2a383e40e4277a673f0e9b407ac52.jpg'),
(NULL, 29, 'picture/c4ce938a34ed4331816b30f374e041a3.jpg','picture/008cec284f054f319236be42207b9a1d.jpg','picture/d009db38a2304168afb7da609eae8e94.jpg'),
(NULL, 30, 'picture/c48f339ef13d4f7a9feac1f3191dfe2b.jpg','picture/9ae5fdf1849048b3a36734a95d6b2571.jpg','picture/559543cf47a84671beaf50b6a6b6794f.jpg'),
(NULL, 30, 'picture/90d69632341e4702a0688191c4f90ea6.jpg','picture/32bbef39dff04969a6727b27c679101a.jpg','picture/32bbef39dff04969a6727b27c679101a.jpg'),
(NULL, 30, 'picture/08698043d3aa4517be6961f945a13484.jpg','picture/41c9f525c3de453ea39c1588a34367a8.jpg','picture/41c9f525c3de453ea39c1588a34367a8.jpg'),
(NULL, 30, 'picture/be5d24e367674834875718c221392141.jpg','picture/91ff225b5f2d4354946a311af10c4066.jpg','picture/91ff225b5f2d4354946a311af10c4066.jpg'),
(NULL, 31, 'picture/8a42b255a0bd4a0ab116bedc0970cdf5.jpg','picture/9ba5aec8fbff4bddbfd6760e81adcc72.jpg','picture/d597ca6fa59341bfba730cfb113d3b17.jpg'),
(NULL, 31, 'picture/c2975d591b804c89a7eee063117f7778.jpg','picture/ba5775f481364ed488cbb1e338d2d5d5.jpg','picture/7c540269f3b248809a8b32df1969a97a.jpg'),
(NULL, 31, 'picture/e61a191e3a55486e9bcfe58b383a94b6.jpg','picture/a12a906757704a9998098ad5aa99e18c.jpg','picture/a12a906757704a9998098ad5aa99e18c.jpg'),
(NULL, 31, 'picture/2c1c9cdaebb84d85b3062bb93f698379.jpg','picture/47c2beb4b0654d33a2d0be73bae671c9.jpg','picture/69a580b021b94c2891a1406f1f9942af.jpg'),
(NULL, 32, 'picture/f66f271f8724462388882ab262cefa00.jpg','picture/72f3048dcaf54de69ddb4569b6391dfb.jpg','picture/879f776609764a77a89ce0f09e08fe85.jpg'),
(NULL, 32, 'picture/2cdf48bbf3ef4ba4afe6c61c25b2c531.jpg','picture/71ffa15562eb4a33af913c0516a7c0f5.jpg','picture/71ffa15562eb4a33af913c0516a7c0f5.jpg'),
(NULL, 32, 'picture/5da08bb4b5ee4495a7eff726bdefb6de.jpg','picture/dbe7be3e3c2345eea9385bf66bf3a8fc.jpg','picture/4357a7afc06b4482825f94a254fc7bf7.jpg'),
(NULL, 32, 'picture/6cf5695418c9446ba44f6845d5a129ac.jpg','picture/cf4f677ccb784ed5bbf1d7c49c17426c.jpg','picture/d6a622c639b3449ea1c3848500b341f4.jpg'),
(NULL, 33, 'picture/50be99961da04c8cbb55f1dbc5662dd2.png','picture/77615f942f8a4e1b8e74964be57023ed.png','picture/77615f942f8a4e1b8e74964be57023ed.png'),
(NULL, 33, 'picture/277809df54a54d96ae63a669b897aeeb.png','picture/77f177160eae458084bbf9fd93ea16ef.png','picture/77f177160eae458084bbf9fd93ea16ef.png'),
(NULL, 33, 'picture/9bba2445a0944be9bf26de148f8647fc.png','picture/5c674b13a1224e2780328ed9d73c30f7.png','picture/5c674b13a1224e2780328ed9d73c30f7.png'),
(NULL, 33, 'picture/9a015d97192842d6b181e9c4f2abe490.png','picture/54c3ba9ad1f74a7bb5fd732531ff12c8.png','picture/54c3ba9ad1f74a7bb5fd732531ff12c8.png'),
(NULL, 34, 'picture/45722624a7cd4d7fbf8533865c1b4105.jpg','picture/7e286822474c4e75aeeeb57d5df2adec.jpg','picture/ef51c220546f4b8f9d78450f9e0da064.jpg'),
(NULL, 34, 'picture/580933a23f6941fa9c9e176f62396c48.jpg','picture/2a27137b02c14630abc08ab25e4ecf25.jpg','picture/2a27137b02c14630abc08ab25e4ecf25.jpg'),
(NULL, 34, 'picture/7d25eb76deb746f3978bc471ced48560.jpg','picture/1d31d1e92a0a415d9baea90c66e26877.jpg','picture/1d31d1e92a0a415d9baea90c66e26877.jpg'),
(NULL, 35, 'picture/02c6115f6bba447ba6ee18e5816ddc87_1.jpg','picture/02c6115f6bba447ba6ee18e5816ddc87.jpg','picture/02c6115f6bba447ba6ee18e5816ddc87.jpg'),
(NULL, 35, 'picture/30d4ef589e574ecdae86630b50f3ab74_1.jpg','picture/30d4ef589e574ecdae86630b50f3ab74.jpg','picture/30d4ef589e574ecdae86630b50f3ab74.jpg');


##购物车条目
CREATE TABLE ct_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,				#用户编号
  product_id INT,			#商品编号
  count INT,				#购买数量
  is_checked BOOLEAN			#是否已勾选，确定购买
);




