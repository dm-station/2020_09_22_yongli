var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var WebGL = laya.webgl.WebGL;
var Tween = Laya.Tween;
var Ease = Laya.Ease;

var os  = function(){
	var u = navigator.userAgent;
	var u2 = navigator.userAgent.toLowerCase();
	return { //移动终端版本信息
		mobile: !!u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为移动终端
		pc: !u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为pc终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //是否为ios终端
		android: u.indexOf('Android') > -1, //是否为android终端
		weixin: u2.match(/MicroMessenger/i) == "micromessenger", //是否为微信客户端
		newsapp: u.indexOf('NewsApp') > -1,//是否为网易新闻客户端
		yixin: u.indexOf('YiXin') > -1,//易信客户端
		weibo: u.indexOf('weibo') > -1,//微博客户端
		yunyuedu:u.indexOf('PRIS') > -1 //云阅读客户端
	};
};

document.body.addEventListener('touchmove', function (e) {
	e.preventDefault(); 
}, {passive: false}); 

window.alert = function(name){
  var iframe = document.createElement("IFRAME");
  iframe.style.display="none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

function getRequestParams(strname) {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		}
	}
	return theRequest[strname];
}

function getStageHeight(){
	var s = document.body.clientWidth / 750
	var stageW = document.body.clientWidth / s
	var stageH = document.body.clientHeight / s
	return stageH
}

function sf(type,obj,num,time) {
	var json = {};
	if(type==1){
		type = 0;
		json.scaleX =num;
		json.scaleY =num;
	}else{
		type = 1;
		json.scaleX =1;
		json.scaleY =1;
	}
	Tween.to(obj,json,time,Ease.linearIn,Handler.create(self, function(){sf(type,obj,num,time);}));
}

function butterfly(obj,sx,sy,y,alpha){
	var _y=obj.y
	Tween.to(obj,{scaleX:sx,scaleY:sy,y:_y+y,alpha:alpha},450,Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{scaleX:1,scaleY:1,y:_y,alpha:1},750,Ease.linearIn, Handler.create(self, function(){
			butterfly(obj,sx,sy,y,alpha)
		}));		
	}));
};

function rotation(obj,rotate,time){
	Tween.to(obj,{rotation:rotate},time,Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{rotation:-rotate},time*2,Ease.linearIn, Handler.create(self, function(){
			Tween.to(obj,{rotation:0},time,Ease.linearIn, Handler.create(self, function(){
				rotation(obj,rotate,time)
			}));
		}));
	}));
}
//x缩放比例=舞台宽度/设计宽度
var scaleRateW
//y缩放比例=舞台高度/设计高度
var scaleRateH
//token
var token = getRequestParams('token')||Math.random();
// 当前层级
var zindex = 0
// 跳转链接
var jump=''

var latitude='1'; // 纬度，浮点数，范围为90 ~ -90
var longitude='1'; // 经度，浮点数，范围为180 ~ -180。
var speed; // 速度，以米/每秒计
var accuracy; // 位置精度

function p1() {
	p1UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	if(Laya.stage.height<1500){
		self.top1.y=self.top2.y=-self.y
		self.logo.y=21-self.y
		self.bottom1.y=1481+self.y
		self.bottom2.y=1435+self.y
	}
	if(Laya.stage.height<=1220){
		self.gift.y-=50
		self.p1_t3.y-=70
	}
	sf(1,self.top1,1.03,800)
	sf(2,self.top2,1.03,800)
	rotation(self.bottom1,-1,600)
	rotation(self.bottom2,-2,600)

	butterfly(self.butterfly,0.8,0.95,0,0.8)
	rotation(self.leaves,-8,400)

	// self.p1_t1.y=-200
	// Tween.to(self.p1_t1,{y:235}, 600, Ease.backOut, null, 10)
	// self.p1_t2.alpha=0
	// Tween.to(self.p1_t2,{alpha:1}, 600, Ease.bounceOut, null, 10)

	// var poss=[0,37,375,37,375]
	// for (var i = 1; i < 5; i++) {
	// 	self['prz'+i].x=Laya.stage.width
	// 	Tween.to(self['prz'+i],{x:poss[i]}, 700, Ease.backOut, null, i*400+200)
	// }

	self.gift.scale(0,0)
	self.p1_t3.alpha=0
	Tween.to(self.gift,{scaleX:1,scaleY:1}, 400, Ease.linearIn, Handler.create(self, function(){
		Tween.to(self.p1_t3,{alpha:1}, 600, Ease.linearIn)
		sf(1,self.gift,1.1,400)
	}), 300)

	self.gift.on(Event.CLICK,this,function () {
		_czc.push(['_trackEvent', '首页', 'btn', '邂逅惊喜'])
		Laya.stage.removeChild(self)
		Laya.stage.addChildAt(new p2(),0)
	})
}

function p2() {
	p2UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	if(Laya.stage.height<1500){
		self.top1.y=self.top2.y=-self.y
		self.logo.y=21-self.y
		self.bottom1.y=1481+self.y
		self.bottom2.y=1435+self.y
	}
	if(Laya.stage.height<=1220){
		self.p2_btn.y-=40
	}
	sf(1,self.top1,1.03,800)
	sf(2,self.top2,1.03,800)
	rotation(self.bottom1,-1,600)
	rotation(self.bottom2,-2,600)

	butterfly(self.butterfly,0.8,0.95,0,0.8)
	rotation(self.leaves,-8,400)

	self.rule['_childs'][1].showButtons=false;
	self.rule['_childs'][1].elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
 	self.rule['_childs'][1].elasticDistance = 50;//设置橡皮筋极限距离。

	 var isCheck=false

	 self.check.on(Event.CLICK,this,function () {
		 if(self.check.skin==='p2/p2_check.png'){
			_czc.push(['_trackEvent', '规则页', 'btn', '同意条款'])
			 isCheck=true
			 self.check.skin='p2/p2_checked.png'
		 }else{
			 _czc.push(['_trackEvent', '规则页', 'btn', '取消条款'])
			 isCheck=false
			 self.check.skin='p2/p2_check.png'
		 }
	})

	 self.p2_btn.on(Event.CLICK,this,function () {
		 if(isCheck){
			 _czc.push(['_trackEvent', '规则页', 'btn', '轻启专属已同意'])
			Laya.stage.removeChild(self)
			Laya.stage.addChildAt(new p3(),0)
		 }else{
			 _czc.push(['_trackEvent', '规则页', 'btn', '轻启专属未同意'])
			 alert('须阅读条款，并勾选同意')
		 }
		
	})
}

function p3() {
	p3UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	if(Laya.stage.height<1500){
		self.top1.y=self.top2.y=-self.y
		self.logo.y=21-self.y
		self.bottom1.y=1481+self.y
		self.bottom2.y=1435+self.y
	}

	var przId=8
	sf(1,self.top1,1.03,800)
	sf(2,self.top2,1.03,800)
	rotation(self.bottom1,-1,600)
	rotation(self.bottom2,-2,600)

	self.win.visible=false
	self.losing.visible=false

	butterfly(self.butterfly,0.8,0.95,0,0.8)
	setTimeout(function() {
		butterfly(self.butterfly2,0.8,0.95,0,0.8)
	}, 300);

	loop(self.flower1,2000,0)
	loop(self.flower2,1600,0)
	loop(self.flower3,2400,0)
	function loop(obj,time,delay){
		obj.rotation=0
		Tween.to(obj,{rotation:360}, time, Ease.linearIn, Handler.create(self, function(){
			loop(obj,time)
		}), delay)
	}
	self.light.scale(0,0)
	self.light.alpha=0
	Tween.to(self.light,{scaleX:1,scaleY:1}, 1000, Ease.linearIn, Handler.create(self, function(){
		_czc.push(['_trackEvent', '抽奖页', '礼盒动画', '抽奖'])
		$.ajax({
			type : 'post',
			async : true,
			url :  '//api.slb.moneplus.cn/api/web/yl/rand',
			dataType: 'json',
			data:{token:token,lng:longitude,lat:latitude},
			success : function(res) {
				console.log('rand',res);
				if(res.code==0){
					przId=res.data.prize_id
					jump=res.data.prize_url
					przId=='9'?losing():win()
				}else{
					alert(res.msg);
				}
			},
			error : function(msg) {
				alert(msg);
			}
		});
		// setTimeout(function() {
		// 	self.gift.visible=false
		// 	Math.random()>0.5?win():losing()
		// }, 500);
	}), 10)
	Tween.to(self.light,{alpha:0.7}, 600, Ease.linearIn, null, 10)

	function win(){
		self.win.visible=true
		_czc.push(['_trackEvent', '结果页', '中奖', przId])

		self.prize.skin='p3/prize'+przId+'.png'

		butterfly(self.butterfly3,0.8,0.95,0,0.8)

		// self.p3_t1.y=-200
		// Tween.to(self.p3_t1,{y:400}, 800, Ease.backOut, null, 10)

		// self.prize.x=Laya.stage.width
		// Tween.to(self.prize,{x:2}, 700, Ease.backOut, null, 600)

		self.p3_btn.scale(0,0)
		Tween.to(self.p3_btn,{scaleX:1,scaleY:1}, 400, Ease.linearIn, Handler.create(self, function(){
			sf(1,self.p3_btn,0.95,600)
		}), 300)
	}

	self.p3_btn.once(Event.CLICK,this,function () {
		// alert('(●′ω`●)领取成功')
		_czc.push(['_trackEvent', 'btn', '领取卡包', przId])
		setTimeout(function() {
			window.location.replace(jump)
			// window.location.href=jump
		}, 500);
	})

	function losing(){
		_czc.push(['_trackEvent', '结果页', '未中奖', '(●′ω`●)'])
		self.losing.visible=true
		butterfly(self.butterfly4,0.8,0.95,0,0.8)
		loop(self.flower4,2000,0)
		rotation(self.p4_leaves,-6,400)
	}

}

var loadView = null;
function load() {
	var self = this;
	loadUI.super(this);
	loadView = this;
	
	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	// if(Laya.stage.height<1289)self.y=-211
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	console.log('load：'+Laya.stage.width+','+Laya.stage.height,scaleRateW,scaleRateH)
	sf(1,self.load_left,1.03,600)
	self.load_left.y=-self.y

	butterfly(self.butterfly,0.8,0.95,5,0.8)

	wx.ready(function(){
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        wx.getLocation({
			type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
			success: function (res) {
				latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				speed = res.speed; // 速度，以米/每秒计
				accuracy = res.accuracy; // 位置精度
				// latitude='39.916960'; // 纬度，浮点数，范围为90 ~ -90
				// longitude='116.411040'; // 经度，浮点数，范围为180 ~ -180。
				console.log('经纬度：',longitude,latitude)
			},
			fail: function (res){
				console.log('fail',res)
			},
			complete: function (res){
				console.log('complete',res)
			}
		});
    });
	
}

Laya.class(load, "load", loadUI);
Laya.class(p1, "p1", p1UI);
Laya.class(p2, "p2", p2UI);
Laya.class(p3, "p3", p3UI);

//程序入口
getStageHeight()<1289?Laya.init(750,1500,Laya.WebGL):Laya.init(750,1500,Laya.WebGL)
//缩放模式
os().pc?Laya.stage.scaleMode='showall':Laya.stage.scaleMode='fixedwidth'
//对齐方式
Laya.stage.alignH='center';
Laya.stage.alignV='top';
// 显示fps
// Laya.Stat.show(0,0);
// 背景颜色
Laya.stage.bgColor='#fff';
//背景透明
// Config.isAlpha = true;//设置画布是否透明，只对2D(WebGL)、3D有效。
// Laya.Render.isWebGL ? Laya.stage.bgColor = "none" : Laya.stage.bgColor = null;

var assets = [
	{url:'img/rule1.png',type:Laya.Loader.IMAGE},
	{url:'img/rule2.png',type:Laya.Loader.IMAGE},
	{url:'img/rule3.png',type:Laya.Loader.IMAGE},
	{url:'img/rule4.png',type:Laya.Loader.IMAGE},
	{url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'res/atlas/p1.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p3.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p2.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p4.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/gift.atlas',type:Laya.Loader.ATLAS},
];

var imgs=[
	// {url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
]

assets.push.apply(assets,imgs)

Laya.stage.on(Laya.Event.RESIZE, this, stageResize);

function stageResize(event){
	Laya.stage.off(Laya.Event.RESIZE, this, stageResize);
	trace('RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL)
	Laya.loader.load(['res/atlas/load.atlas'], Handler.create(this, loading), null, Laya.Loader.ATLAS);
}

function loading() {
	Laya.stage.addChildAt(new load(),zindex);
	Laya.loader.load(assets, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
}

// 加载结束侦听器
function onAssetLoaded(texture) {
	console.log("加载结束",texture);
	setTimeout(function() {
		Laya.stage.removeChild(loadView);
		Laya.stage.addChildAt(new p1(),zindex);
	}, 500);
}

// 加载进度侦听器
function onLoading(progress) {
	console.log("加载进度: " + parseInt(progress*100));
	loadView.bar.x=parseInt(358*progress)-358
	loadView.percent.text=parseInt(progress*100)+"%";//文字百分比
}

