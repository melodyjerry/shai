var n="abcdefghijklmnopqrstuvwxyz",t="0123456789";function r(n,t){return void 0===n&&(n=1),void 0===t&&(t=10),~~(Math.random()*(t-n+1)+n)}function e(){return Math.random()<.5}function i(r,e){void 0===r&&(r=10),e=e||n+n.toUpperCase()+t;for(var i=new Array(r),o=0;o<r;o++)i[o]=e.charAt(~~(Math.random()*e.length));return i.join("")}var o={int:r,number:function(n,t,e){return void 0===n&&(n=1),void 0===t&&(t=100),e&&e>=1?+(Math.random()*(t-n+1)+n).toFixed(e):r(n,t)},pick:function(n,t){var r=function(){return n.length>0?n[~~(Math.random()*n.length)]:void 0};if("number"==typeof t){for(var e=new Array(t),i=0;i<t;i++)e[i]=r();return e}return r()},str:i,shuffle:function(n){return(Array.from?Array.from(n):Array.prototype.slice.call(n)).sort((function(){return e()?-1:1})).join("")},bool:e,once:function(n){return e()?"string"==typeof n?n:"number"==typeof n?String(n):"":""},letter:function(t,r){return void 0===t&&(t=10),void 0===r&&(r=!1),i(t,r?n:n+n.toUpperCase())},numstr:function(n){return void 0===n&&(n=10),i(n,t)},alphanum:function(r,e){return void 0===r&&(r=10),void 0===e&&(e=!1),i(r,e?n:n+n.toUpperCase()+t)},ext:function(r,e){return i(r,n+n.toUpperCase()+t+e)},hex:function(n){return void 0===n&&(n=6),i(n,"abcdef"+t)}},u=function(n,t){var r=this;this.__base=0,this.__step=1,this.val=function(){return r.__base+=r.__step},n&&(this.__step=n),t&&(this.__base=t)};function a(n,t){var r,e={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":parseInt(((n.getMonth()+3)/3).toString()),S:n.getMilliseconds()};for(var i in/(y+)/.test(t)&&(r=RegExp.$1,t=t.replace(r,String(n.getFullYear()).substr(4-r.length))),/(E+)/.test(t)&&(r=RegExp.$1,t=t.replace(r,(r.length>1?r.length>2?"/u661f/u671f":"/u5468":"")+["/u65e5","/u4e00","/u4e8c","/u4e09","/u56db","/u4e94","/u516d"][n.getDay()])),e)if(new RegExp("("+i+")").test(t)){r=RegExp.$1;var o=String(e[i]);t=t.replace(r,1===r.length?o:("00"+o).slice(-r.length))}return t}var c="云舟巨鹏飞捷华禄富瑞天隆益力发文化世新金润寿宏康丰本恒明大先弘春利如伟贵长达德光安翔童青兴美环易锐博涛同辉洪晨聚佳仙渊勤百全汇凯慧超庆仁东星夏阳城千广福万畅宝旺进合和雅浩成满祥奇永平升丽鼎立通意迪健柏友峰铭胜坤",s="李王张刘陈杨赵黄周吴徐孙胡朱高林何郭马罗梁宋郑谢韩唐冯于董萧程曹袁邓许傅沈曾彭吕苏卢蒋蔡贾丁魏薛叶阎余潘杜戴夏钟汪田任姜",f="芳娜敏静丽艳娟霞秀燕玲桂丹萍红玉兰英梅莉珍雪帅慧宁婷凤晶欢颖佳倩琴云洁柳淑晨荣莹云婷琳欣博香芝楠霞瑜璐",l="伟强磊洋勇军杰涛超明刚平辉鹏华飞鑫波斌宇浩凯健俊帆帅旭龙林阳亮成建峰国军晨瑞志兵雷东博彬坤想岩杨文利轩",p=["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson"],h=["James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian"],m=["Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon"],d=["United States","China","Japan","Germany","United Kingdom","France","India","Italy","Brazil","Canada","South Korea","Russia","Australia","Spain","Mexico","Indonesia","Turkey","Netherlands","Switzerland"],g=["美国","中国","日本","德国","英国","法国","印度","意大利","巴西","加拿大","韩国","俄罗斯","澳大利亚","西班牙","墨西哥","印度尼西亚","土耳其","荷兰","瑞士"],x=["股份","科技","电子","实业","商贸","机械","服装","广告","建材","物流","能源","办公用品","信贷","培训","酒店","房地产","食品","汽车服务","五金"],v=["新村","花园","小区","苑","大厦","公寓","楼","广场","城"],y=["建设","人民","文化","迎宾","朝阳","育才","振兴","光明","幸福","解放","团结","公园","和平","新华","西环","胜利","南环","平安","向阳","滨河","东环","友谊","富民","前进"],k=["路","街","大道"],S=["com","cn","com.cn","net"],M=[11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65],w=["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区"],b={incre:function(n,t){return new u(n,t)},range:function(n,t,r){void 0===r&&(r=1);for(var e=1+~~((t-n)/r),i=new Array(e),o=0;o<=e;o++)i[o]=n+r*o;return i},uuid:function(n){void 0===n&&(n="-");var t=(new Date).getTime();return["xxxxxxxx","xxxx","4xxx","yxxx","xxxxxxxxxxxx"].join(n).replace(/[xy]/g,(function(n){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===n?r:3&r|8).toString(16)}))}},D={repeat:function(n,t){return new Array((n||10)+1).join(t||"填充文本样式")},english:function(n,t){return t?o.str(n||o.int(5,10),t):o.letter(n||o.int(5,10),!0)},chinese:function(n,t){return n=n||o.int(5,10),t?o.str(n,t):o.str(n,c)}},A={time:function(n,t,r){var e=new Date(o.int(n?new Date(n).getTime():-288e5,t?new Date(t).getTime():(new Date).getTime()));return r?a(e,r):e},now:function(n){return n?a(new Date,n):new Date},year:function(){return o.int(1949,2020)},month:function(){return o.int(1,12)},day:function(){return o.int(1,28)},hour:function(){return o.int(1,24)},minute:function(){return o.int(0,59)}},_={firstName:function(){return o.str(1,s)},maleName:function(){return o.str(1,s)+o.str(o.int(1,2),l)},femaleName:function(){return o.str(1,s)+o.str(o.int(1,2),f)},fullName:function(){return o.str(1,s)+(o.bool()?o.str(o.int(1,2),l):o.str(o.int(1,2),f))},mobile:function(){return o.pick(["13"+String(o.int(1,9)),"15"+o.numstr(1),"17"+o.str(1,"018")])+o.numstr(8)},idcard:function(){for(var n=function(n){return n<10?"0"+String(n):String(n)},t=[o.pick(M),0,o.int(1,5),0,o.int(1,5),A.year(),n(o.int(1,12)),n(o.int(1,28)),o.numstr(3)].join(""),r=t.split(""),e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=0,u=0;u<17;u++)i+=+r[u]*e[u];return t+String([1,0,"X",9,8,7,6,5,4,3,2][i%11])},autocard:function(){return o.str(1,"京津冀晋蒙黑吉辽沪苏浙皖闽赣鲁湘鄂豫粤桂琼川云贵藏陕甘青宁新")+o.str(1,"ABCD")+o.shuffle(o.str(1,"ABCDEFGHJKLMNPQRSTUWYZ")+o.numstr(4))},company:function(){return o.str(o.int(2,3),c)+o.pick(x)+"有限公司"},country:function(){return o.pick(g)},road:function(){return[o.pick(y),o.pick(k),o.pick(["1","2","3"]),o.numstr(o.int(1,3)),"号"].join("")},build:function(){return o.str(2,c)+o.pick(v)},phone:function(){return o.str(1,"826")+o.numstr(o.int(6,7))},zipcode:function(){return o.bool()?"0"+o.int(1,7).toString():o.int(1,9).toString()+o.int(0,7).toString()+o.numstr(4)},province:function(){return o.pick(w)}},C={firstName:function(){return o.pick(p)},maleName:function(){return o.pick(h)+" "+o.pick(p)},femaleName:function(){return o.pick(m)+" "+o.pick(p)},fullName:function(){return(o.bool()?o.pick(h):o.pick(m))+" "+o.pick(p)},country:function(){return o.pick(d)}},N={account:function(){return o.letter(1)+o.ext(o.int(5,6),"-")+o.letter(1)},password:function(){return o.letter(1)+o.ext(o.int(5,7),"`~!@#$%^&*")},qq:function(){return String(o.int(1,2))+o.numstr(10)},domain:function(){return o.bool()?o.alphanum(o.int(3,8),!0)+".":o.alphanum(o.int(3,8),!0)+"."+o.pick(S)},url:function(){return["http"+o.once("s")+"://www",o.alphanum(o.int(3,8),!0),o.pick(S)+o.once("/"+o.letter(o.int(3,8),!0))].join(".")},email:function(){return[o.letter(o.int(3,8),!0)+"@"+o.alphanum(o.int(3,8),!0),o.pick(S)].join(".")},ip:function(n){return void 0===n&&(n=!1),[n?o.pick(["198","172","10"]):o.int(0,255),o.int(0,255),o.int(0,255),o.int(0,255)].join(".")},color:function(){return"#"+o.hex(6)}};export{_ as cn,A as date,C as en,o as rand,D as text,b as util,N as web};
//# sourceMappingURL=mock.js.map
